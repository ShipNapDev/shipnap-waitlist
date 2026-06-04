import type { Metadata } from "next"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "ShipNap Blog — Thoughts on AI, Code, and Shipping",
  description:
    "Deep dives on AI-powered development, prompt engineering, and building tools that write code.",
  alternates: { canonical: "/blog" },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        {children}
      </main>
    </SiteLayout>
  )
}
