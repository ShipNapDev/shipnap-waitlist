import { WaitlistForm } from "@/components/waitlist-form"
import { DeployPreview } from "@/components/deploy-preview"
import { FeatureCard } from "@/components/feature-card"
import { StepCard } from "@/components/step-card"
import { ModeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-bold text-foreground">ShipNap</span>
          <ModeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-8 md:pt-32 md:pb-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:64px_64px] [--grid-color:rgba(128,128,128,0.08)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              AI agents that code while you sleep
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Connect a repo, bring your own API key, pick a model, and wake up to a pull request.
            </p>

            <div className="w-full max-w-md">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative pt-10 pb-6 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            See it in action
          </p>
          <DeployPreview />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              How it works
            </h2>
            <p className="text-muted-foreground">
              From GitHub issue to merged PR — while you sleep
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4 md:gap-12">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />

            <StepCard
              number="1"
              title="Connect"
              description="Link your GitHub repository with one click"
            />
            <StepCard
              number="2"
              title="Configure"
              description="Add your API key and choose your preferred model"
            />
            <StepCard
              number="3"
              title="Deploy"
              description="Point the agent at an issue and hit deploy"
            />
            <StepCard
              number="4"
              title="Wake Up"
              description="Wake up to a polished pull request, ready to merge"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Built for developers
            </h2>
            <p className="text-muted-foreground">
              No lock-in, no markup, no nonsense
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              }
              title="Any GitHub Repo"
              description="Works with public and private repositories. Just connect and go."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              }
              title="Bring Your Own Key"
              description="Use your own API keys. Full control, no middleman markup."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              }
              title="Any Model"
              description="GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro — you pick. No vendor lock-in."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              title="Secure by Design"
              description="Your code stays yours. We never store or train on your data."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Sleep & Ship"
              description="Deploy before bed. Wake up to a ready-to-merge PR."
            />
            <FeatureCard
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              }
              title="Clean Pull Requests"
              description="Well-structured commits, proper descriptions, and passing tests."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:32px_32px] [--grid-color:rgba(128,128,128,0.05)]" />
            </div>

            <div className="relative flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to ship while you sleep?
              </h2>
              <p className="mb-6 max-w-lg text-muted-foreground">
                Get early access and be the first to try ShipNap.
              </p>
              <div className="mb-4 w-full max-w-md">
                <WaitlistForm />
              </div>
              <p className="text-xs text-muted-foreground/60">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm font-semibold text-foreground">ShipNap</span>
            <p className="text-sm text-muted-foreground">
              © 2026 ShipNap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
