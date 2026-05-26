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
