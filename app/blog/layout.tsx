import type { Metadata } from "next"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "ShipNap Blog — Ship While You Sleep",
  description:
    "Notes for indie hackers on overnight coding agents, scoped tasks, late-night ideas, and waking up to pull requests.",
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
