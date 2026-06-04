import { Resend } from "resend"
import { NextResponse } from "next/server"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const rateLimit = new Map<string, { count: number; resetAt: number }>()

const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetAt) {
    const resetAt = now + WINDOW_MS
    rateLimit.set(ip, { count: 1, resetAt })
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt }
  }

  entry.count++
  if (entry.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt }
  }

  return { allowed: true, remaining: MAX_REQUESTS - entry.count, resetAt: entry.resetAt }
}

function validateOrigin(request: Request): boolean {
  const origin = request.headers.get("origin")
  const host = request.headers.get("host")

  if (origin && host) {
    try {
      const originUrl = new URL(origin)
      return originUrl.host === host
    } catch {
      return false
    }
  }

  // Allow requests without an Origin header (e.g. curl, native apps)
  // but verify Referer if present as a secondary signal
  const referer = request.headers.get("referer")
  if (referer && host) {
    try {
      const refererUrl = new URL(referer)
      return refererUrl.host === host
    } catch {
      return false
    }
  }

  return true
}

function welcomeEmail({ email }: { email: string }) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <tr>
            <td align="left" style="padding-bottom:32px;">
              <span style="color:#ffffff;font-size:20px;font-weight:700;">ShipNap</span>
            </td>
          </tr>
          <tr>
            <td style="background-color:#141414;border:1px solid #262626;border-radius:12px;padding:40px 32px;">
              <h1 style="margin:0 0 16px;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">
                You're on the list.
              </h1>
              <p style="margin:0 0 24px;color:#a3a3a3;font-size:16px;line-height:1.6;">
                Thanks for joining the ShipNap waitlist. We're onboarding developers in small batches — you'll hear from us when your spot opens up.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border:1px solid #262626;border-radius:8px;padding:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px;color:#737373;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">What to expect</p>
                    <p style="margin:0 0 8px;color:#d4d4d4;font-size:14px;line-height:1.6;">▪ Early access as we expand in batches</p>
                    <p style="margin:0 0 8px;color:#d4d4d4;font-size:14px;line-height:1.6;">▪ BYOK — bring your own API key, no markup</p>
                    <p style="margin:0;color:#d4d4d4;font-size:14px;line-height:1.6;">▪ Pick any model: Claude, GPT, Gemini</p>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0;color:#737373;font-size:13px;line-height:1.5;">
                In the meantime, read about <a href="https://shipnap.dev/blog/shipnap-intro" style="color:#a3a3a3;text-decoration:underline;">why we built ShipNap</a> and how the architecture keeps your source code off our servers.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color:#525252;font-size:12px;">
                    <p style="margin:0 0 4px;">Sent to ${email}. <a href="%mailing_list_unsubscribe_url%" style="color:#525252;">Unsubscribe</a> anytime.</p>
                    <p style="margin:0;">ShipNap — AI agents that code while you sleep.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  if (!validateOrigin(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("x-real-ip")
    ?? "unknown"

  const { allowed, resetAt } = checkRateLimit(ip)

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(MAX_REQUESTS),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(resetAt / 1000)),
        },
      }
    )
  }

  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const parsed = z.string().email().safeParse(email)
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const segmentId = process.env.RESEND_SEGMENT_ID

    // Create or find the contact
    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
    })

    if (error && !error.message?.includes("already exists")) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      )
    }

    // Add to segment
    if (segmentId) {
      const { error: segError } = await resend.contacts.segments.add({
        email,
        segmentId,
      })

      if (segError) {
        console.error("Segment error:", segError)
        return NextResponse.json(
          { error: "Failed to join waitlist" },
          { status: 500 }
        )
      }
    }

    // Send welcome email (non-blocking — don't fail the signup if this errors)
    const fromEmail = process.env.RESEND_FROM_EMAIL
    if (fromEmail) {
      try {
        await resend.emails.send({
          from: `ShipNap <${fromEmail}>`,
          to: email,
          subject: "You're on the ShipNap waitlist",
          html: welcomeEmail({ email }),
        })
      } catch (emailError) {
        console.error("Welcome email error:", emailError)
      }
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: data?.id
        ? "Welcome to the waitlist!"
        : "You're already on the waitlist!",
    })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
