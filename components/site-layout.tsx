import { ModeToggle } from "@/components/theme-toggle"

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="text-lg font-bold text-foreground hover:text-muted-foreground transition-colors"
        >
          ShipNap
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm font-semibold text-foreground">
            ShipNap
          </span>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a
              href="/sitemap.xml"
              className="hover:text-foreground transition-colors"
            >
              Sitemap
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 ShipNap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  )
}
