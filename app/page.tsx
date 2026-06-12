import { WaitlistForm } from "@/components/waitlist-form"
import { DeployPreview } from "@/components/deploy-preview"
import { FeatureCard } from "@/components/feature-card"
import { StepCard } from "@/components/step-card"
import { SiteNav, SiteFooter } from "@/components/site-layout"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main>{/* Hero Section */}
      <section className="relative pt-28 pb-8 md:pt-32 md:pb-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[size:64px_64px] [--grid-color:rgba(128,128,128,0.08)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
              The overnight coding agent for indie hackers
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Ship while you sleep.
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Got a feature idea before bed? Describe it, connect your repo, and wake up to a pull request. ShipNap keeps the momentum going when you are too tired to code.
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
            From midnight idea to morning PR
          </p>
          <DeployPreview />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Before bed to first PR in four steps
            </h2>
            <p className="text-muted-foreground">
              Capture the spark, let ShipNap do the async work, review in the morning.
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4 md:gap-12">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />

            <StepCard
              number="1"
              title="Connect"
              description="Sign in with GitHub and choose the repo you want ShipNap to work on."
            />
            <StepCard
              number="2"
              title="Describe"
              description="Write the task while the idea is fresh, like you are leaving a note for tomorrow."
            />
            <StepCard
              number="3"
              title="Nap"
              description="ShipNap branches, codes, runs checks, and keeps going while you log off."
            />
            <StepCard
              number="4"
              title="Review"
              description="Wake up to commits, test output, decision notes, and a pull request ready for review."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Built for sudden inspiration
            </h2>
            <p className="text-muted-foreground">
              Fast enough for a late-night idea. Serious enough to open a real pull request.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <FeatureCard title="Any GitHub repo" description="Connect public or private repos and turn a small idea, bug fix, or refactor into a reviewable branch." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>} />
            <FeatureCard title="Bring your own key" description="Use your Anthropic, OpenAI, or Google key directly. No AI markup, no bundled mystery costs, no provider lock-in." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>} />
            <FeatureCard title="Pick the model for the job" description="Claude, GPT, Gemini — choose what works best for the task and switch whenever you want." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>} />
            <FeatureCard title="No code stored" description="ShipNap is built around orchestration, not hoarding your repo. Your code is not stored, cached, logged, or used for training." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>} />
            <FeatureCard title="Perfect for off-hours tasks" description="Queue focused work when inspiration hits: a bug fix, a small feature, tests, cleanup, or a refactor you keep postponing." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
            <FeatureCard title="Pull requests, not magic" description="You still review the work. ShipNap gives you commits, test output, and notes so you can decide what to merge." icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>} />
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
                Your next late-night idea deserves a morning PR.
              </h2>
              <p className="mb-6 max-w-lg text-muted-foreground">
                We are onboarding indie hackers and vibe coders in small batches. Join the waitlist and be ready when the next idea hits.
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

      </main>

      <SiteFooter />
    </div>
  )
}
