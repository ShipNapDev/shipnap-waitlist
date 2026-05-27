export default function TermsPage() {
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
        <h1 className="mb-2 text-3xl font-bold text-foreground">Terms of Service</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last updated: May 27, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ShipNap ("the Service"), you agree to be bound by these Terms of Service.
              If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. Description of Service</h2>
            <p>
              ShipNap is an AI-powered code automation platform. You connect a GitHub repository, provide an AI provider
              API key, describe changes in natural language, and ShipNap runs an AI coding agent that implements the changes
              and opens a pull request on your behalf.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">3. User Accounts</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>You must sign in with a valid GitHub account.</li>
              <li>You are responsible for maintaining the security of your account and API keys.</li>
              <li>You must be at least 13 years old to use the Service.</li>
              <li>You may not use the Service for illegal or unauthorized purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">4. API Keys and Third-Party Services</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>You provide your own API keys for AI providers (OpenAI, Anthropic, etc.).</li>
              <li>You are responsible for all costs incurred through your API keys.</li>
              <li>ShipNap encrypts your API keys at rest but does not monitor or limit your usage of third-party APIs.</li>
              <li>ShipNap is not responsible for the availability, pricing, or behavior of third-party AI providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Payments and Billing</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>ShipNap offers both free and paid subscription tiers.</li>
              <li>Paid subscriptions are billed monthly or annually via Stripe.</li>
              <li>All fees are non-refundable except as required by law.</li>
              <li>We may change pricing with 30 days' notice. Continued use after a price change constitutes acceptance.</li>
              <li>You may cancel your subscription at any time. Access continues until the end of the billing period.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Code and Repository Access</h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>You grant ShipNap temporary, revocable access to clone and modify your repositories solely for the purpose of fulfilling your requested tasks.</li>
              <li>ShipNap does not retain copies of your code after task completion.</li>
              <li>You retain all rights to your code. ShipNap claims no ownership over your repositories or the changes made by the AI agent.</li>
              <li>You are responsible for reviewing all AI-generated changes before merging. ShipNap does not guarantee that AI-generated code is correct, secure, or fit for any purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Acceptable Use</h2>
            <p>You may not use the Service to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Generate, distribute, or facilitate malware, exploits, or malicious code</li>
              <li>Violate the terms of service of any third-party platform or service</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm others</li>
              <li>Circumvent rate limits, authentication, or security measures</li>
              <li>Mine cryptocurrencies or perform computationally wasteful tasks</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. SHIPNAP DISCLAIMS ALL WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              AI-GENERATED CODE MAY CONTAIN ERRORS, SECURITY VULNERABILITIES, OR UNINTENDED BEHAVIOR. YOU ARE SOLELY
              RESPONSIBLE FOR REVIEWING AND TESTING ALL AI-GENERATED CHANGES.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHIPNAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, LOSS OF PROFITS, OR COST OF
              PROCUREMENT OF SUBSTITUTE SERVICES, ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE
              TWELVE MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">10. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at any time for violation of these Terms.
              You may terminate your account at any time through the dashboard. Upon termination, your data will
              be deleted in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify users of material changes via email or through
              the Service. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, without regard to conflict of law
              principles. Any disputes shall be resolved in the courts of Delaware.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">13. Contact</h2>
            <p>For questions about these Terms: legal@shipnap.dev</p>
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
