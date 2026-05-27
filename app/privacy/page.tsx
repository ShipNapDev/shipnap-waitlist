export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <a href="/" className="text-lg font-bold text-foreground hover:opacity-80 transition-opacity">
            ShipNap
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-2xl px-6 pt-28 pb-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last updated: May 27, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Information We Collect</h2>
            <p>When you use ShipNap, we collect:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li><strong>GitHub account information</strong> — your GitHub username, email, and avatar, obtained through GitHub OAuth when you sign in.</li>
              <li><strong>Repository data</strong> — names and metadata of repositories you connect to ShipNap.</li>
              <li><strong>API keys</strong> — third-party AI provider API keys you provide. These are encrypted at rest.</li>
              <li><strong>Task data</strong> — descriptions, prompts, and outputs from AI agent runs.</li>
              <li><strong>Payment information</strong> — processed by our payment provider (Stripe). We do not store full credit card numbers.</li>
              <li><strong>Email address</strong> — if you join the waitlist or create an account.</li>
              <li><strong>Usage data</strong> — anonymous analytics about how you interact with the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>To authenticate you and provide access to the service</li>
              <li>To clone your repositories and run AI agents on your behalf</li>
              <li>To process payments and manage your subscription</li>
              <li>To send transactional emails (confirmations, notifications)</li>
              <li>To improve the service through anonymous analytics</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">3. Data Storage and Security</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>AI API keys are encrypted using AES-256-GCM before storage.</li>
              <li>GitHub OAuth tokens are encrypted at rest.</li>
              <li>Repository clones are created in temporary directories and deleted after task completion.</li>
              <li>We do not train AI models on your code, prompts, or task data.</li>
              <li>We do not sell, rent, or share your personal information with third parties except as required to provide the service (e.g., payment processing).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">4. Third-Party Services</h2>
            <p>ShipNap integrates with the following third-party services. Each has its own privacy policy:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li><strong>GitHub</strong> — for authentication and repository access</li>
              <li><strong>Stripe</strong> — for payment processing</li>
              <li><strong>Resend</strong> — for transactional emails</li>
              <li><strong>Vercel</strong> — for hosting and analytics</li>
              <li><strong>Trigger.dev</strong> — for background task execution</li>
              <li><strong>AI providers</strong> (OpenAI, Anthropic, etc.) — your API keys are used directly with these providers; we do not proxy or intercept requests</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Data Retention</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Account data is retained until you delete your account.</li>
              <li>Task logs and outputs are retained for 90 days, then automatically purged.</li>
              <li>Repository data is removed when you disconnect the repository.</li>
              <li>Payment records are retained as required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent at any time</li>
              <li>Delete your account (available in the app dashboard)</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at privacy@shipnap.dev.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Cookies</h2>
            <p>We use essential cookies for authentication (session cookies). We do not use tracking cookies or third-party ad networks.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>We will notify you of material changes via email or through the service. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">9. Contact</h2>
            <p>For privacy-related inquiries: privacy@shipnap.dev</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a href="/" className="text-sm font-semibold text-foreground hover:opacity-80">ShipNap</a>
            <p className="text-sm text-muted-foreground">
              © 2026 ShipNap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
