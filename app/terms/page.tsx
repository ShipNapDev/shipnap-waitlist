import Link from "next/link";

const sections = [
  {
    title: "1. Agreement to these Terms",
    body: [
      "These Terms of Service govern your access to and use of ShipNap, an AI-assisted code automation service. By creating an account, joining the waitlist, connecting a repository, starting a task, or otherwise using ShipNap, you agree to these Terms.",
      "If you use ShipNap on behalf of a company, organization, or other entity, you represent that you have authority to bind that entity to these Terms. In that case, 'you' includes that entity.",
    ],
  },
  {
    title: "2. What ShipNap does",
    body: [
      "ShipNap lets you describe requested code changes in natural language. The service connects to repositories you authorize, runs an AI coding agent, creates branches and commits, and may open pull requests for your review.",
      "ShipNap does not replace your engineering review, security review, legal review, or deployment process. You are responsible for deciding whether to merge, deploy, or rely on any code, text, configuration, or other output generated through the service.",
    ],
  },
  {
    title: "3. Accounts and access",
    body: [
      "You may join the waitlist by providing an email address. Access to the full service may require signing in with GitHub OAuth. You are responsible for keeping your GitHub account secure and for all activity under your ShipNap account or workspace.",
      "You must provide accurate account, billing, and workspace information. You may not share access in a way that bypasses account, workspace, security, or billing controls.",
    ],
  },
  {
    title: "4. GitHub repositories and permissions",
    body: [
      "ShipNap uses a GitHub App to access repositories you authorize. Depending on your configuration, ShipNap may read repository contents, create branches, write commits, push branches, and open pull requests.",
      "You represent that you have the rights and permissions needed to connect each repository and to allow ShipNap to process its contents. You can revoke GitHub App access through GitHub or disconnect repositories in ShipNap.",
    ],
  },
  {
    title: "5. AI providers and API keys",
    body: [
      "ShipNap may use third-party AI providers selected by you. If you provide an AI provider API key, you authorize ShipNap to use that key to perform tasks you request.",
      "You are responsible for your AI provider account, provider terms, provider charges, rate limits, model behavior, and data handling settings. ShipNap does not control third-party AI provider policies or infrastructure.",
    ],
  },
  {
    title: "6. User content and generated output",
    body: [
      "Your content includes waitlist information, task descriptions, repository contents made available to ShipNap, connected repository metadata, API keys, logs, prompts, model responses, branches, commits, and pull request content.",
      "As between you and ShipNap, you retain ownership of your content. You grant ShipNap the limited rights needed to host, process, transmit, transform, display, and store your content to provide, secure, support, and improve the service.",
      "AI-generated output may be incomplete, incorrect, insecure, infringing, incompatible with your project, or unsuitable for production. You must review, test, and approve output before merging or deploying it.",
    ],
  },
  {
    title: "7. Acceptable use",
    body: [
      "You may not use ShipNap to violate laws, infringe rights, access systems without authorization, distribute malware, exfiltrate secrets, bypass security controls, abuse third-party services, or generate code intended primarily for harm.",
      "You may not attempt to reverse engineer, overload, disrupt, scrape, resell, or misuse ShipNap or its infrastructure. We may suspend or terminate access if we believe your use creates risk for ShipNap, other users, third-party services, or the public.",
    ],
  },
  {
    title: "8. Plans, billing, and refunds",
    body: [
      "Paid plans, limits, and features are shown in the product or checkout flow. Subscription billing is handled by our payment provider. By starting a paid plan, you authorize recurring charges until cancellation.",
      "Plan limits may include monthly task counts, connected repositories, concurrent tasks, task duration, provider access, and other feature gates. We may enforce these limits automatically.",
      "Unless required by law or stated otherwise in writing, fees are non-refundable. You can manage or cancel your subscription through the billing portal. Cancellation generally takes effect at the end of the current billing period.",
    ],
  },
  {
    title: "9. Service changes and availability",
    body: [
      "ShipNap is an evolving service. We may add, change, suspend, or remove features, providers, integrations, plans, limits, or infrastructure.",
      "We work to keep the service reliable, but we do not guarantee uninterrupted availability. Tasks may fail because of model errors, repository size, provider outages, GitHub permissions, sandbox limits, rate limits, network issues, or other operational conditions.",
    ],
  },
  {
    title: "10. Confidentiality and security",
    body: [
      "We use technical and organizational safeguards intended to protect API keys, tokens, repository data, logs, and account information. No online service can guarantee absolute security.",
      "You are responsible for avoiding secrets in task descriptions when possible, rotating credentials if you suspect exposure, reviewing generated diffs, and maintaining your own repository and deployment security practices.",
    ],
  },
  {
    title: "11. Third-party services",
    body: [
      "ShipNap depends on third-party services such as GitHub, AI providers, hosting, database, queueing, sandboxing, billing, email, analytics, monitoring, and error tracking providers.",
      "Third-party services are governed by their own terms and policies. ShipNap is not responsible for third-party services, their availability, their outputs, or their handling of data outside ShipNap's control.",
    ],
  },
  {
    title: "12. Disclaimers",
    body: [
      "ShipNap is provided 'as is' and 'as available.' To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage of trade.",
      "We do not warrant that generated code will be correct, secure, compliant, original, non-infringing, deployable, or suitable for your use case.",
    ],
  },
  {
    title: "13. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, ShipNap will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost revenue, lost data, security incidents, business interruption, or cost of substitute services.",
      "To the fullest extent permitted by law, ShipNap's total liability for any claim relating to the service will not exceed the amount you paid to ShipNap for the service in the three months before the event giving rise to the claim, or USD $100 if you have not paid ShipNap.",
    ],
  },
  {
    title: "14. Indemnity",
    body: [
      "You will defend, indemnify, and hold ShipNap harmless from claims, damages, liabilities, losses, and expenses arising from your content, your repositories, your use of generated output, your violation of these Terms, or your violation of laws or third-party rights.",
    ],
  },
  {
    title: "15. Termination",
    body: [
      "You may stop using ShipNap at any time. We may suspend or terminate access if you violate these Terms, create security or legal risk, fail to pay fees, or use the service in a way that may harm ShipNap, users, or third parties.",
      "After termination, sections that by their nature should survive will survive, including ownership, payment obligations, disclaimers, limitations of liability, indemnity, and dispute-related provisions.",
    ],
  },
  {
    title: "16. Changes to these Terms",
    body: [
      "We may update these Terms from time to time. If changes are material, we will take reasonable steps to notify users, such as posting an updated date or providing in-product notice. Continued use after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    title: "17. Contact",
    body: ["Questions about these Terms can be sent to support@shipnap.dev."],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="/" className="text-lg font-bold text-foreground hover:opacity-80 transition-opacity">
            ShipNap
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-16">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Terms of Service</h1>
        <p className="mb-4 text-sm text-muted-foreground">Last updated: June 3, 2026</p>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          These Terms explain the rules for using ShipNap. They are written for a developer-focused SaaS product that connects to GitHub repositories and uses AI providers to generate code changes.
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="text-sm font-semibold text-foreground hover:opacity-80">ShipNap</Link>
            <p className="text-sm text-muted-foreground">© 2026 ShipNap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
