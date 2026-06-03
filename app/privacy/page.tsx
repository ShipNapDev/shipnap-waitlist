import Link from "next/link";

const sections = [
  {
    title: "1. Scope",
    body: [
      "This Privacy Policy explains how ShipNap collects, uses, shares, and protects personal information when you use our waitlist, website, application, GitHub integration, billing flows, support channels, and related services.",
      "ShipNap is designed for developers and teams that connect GitHub repositories and use AI providers to generate code changes. Because repository data can contain personal information, secrets, confidential business information, or customer data, you should only connect repositories you are authorized to process through ShipNap.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Waitlist and account information: email address, GitHub account ID, username, name, avatar, session data, workspace membership, and authentication metadata.",
      "Repository information: repository owner, name, default branch, GitHub repository ID, installation metadata, connected repository status, and repository content needed to perform requested tasks.",
      "Task information: task descriptions, selected AI provider and model, task status, logs, tool activity, generated branches, commits, pull request metadata, diffs, and diagnostic information.",
      "Credentials and tokens: GitHub OAuth tokens, GitHub App installation tokens, AI provider API keys you provide, and related encrypted secrets needed to operate the service.",
      "Billing information: subscription tier, checkout status, customer portal status, payment and invoice metadata received from our payment provider. Full payment card details are processed by the payment provider and are not stored by ShipNap.",
      "Usage and device information: IP address, browser, device, pages viewed, events, approximate location derived from IP address, errors, performance data, and product usage analytics.",
      "Communications: messages you send to support, waitlist emails, invitation emails, workspace member invitations, and related metadata.",
    ],
  },
  {
    title: "3. Sources of information",
    body: [
      "We collect information directly from you when you join the waitlist, sign in, connect repositories, create tasks, enter API keys, manage billing, invite members, or contact support.",
      "We receive information from GitHub when you authenticate, install the GitHub App, grant repository access, or use repository automation.",
      "We receive billing and subscription information from our payment provider. We may receive analytics, monitoring, and error information from service providers used to operate ShipNap.",
    ],
  },
  {
    title: "4. How we use information",
    body: [
      "We use information to manage the waitlist, authenticate users, create and manage workspaces, connect repositories, run AI coding tasks, stream logs, create branches and pull requests, enforce plan limits, process billing, provide support, prevent abuse, secure the service, debug failures, improve product quality, and comply with legal obligations.",
      "We use AI provider API keys only to perform actions you request, such as validating available models, profiling a repository, running an agent, generating code changes, or generating pull request metadata.",
    ],
  },
  {
    title: "5. AI providers and repository processing",
    body: [
      "When you start a task, ShipNap may send task descriptions, selected repository context, file contents, diffs, logs, and related prompts to the AI provider and model you select. The provider may process that information according to its own terms, privacy policy, and data controls.",
      "Do not connect repositories or submit tasks containing personal information, regulated data, trade secrets, credentials, or confidential material unless you have authority to do so and your selected AI provider settings are appropriate for that data.",
    ],
  },
  {
    title: "6. How we share information",
    body: [
      "We share information with service providers that help operate ShipNap, including hosting, database, queueing, sandbox execution, GitHub integration, AI providers selected by you, payment processing, email delivery, analytics, error monitoring, logging, and security providers.",
      "We may share information when required by law, legal process, or to protect ShipNap, users, third parties, or the public. We may share information in connection with a merger, acquisition, financing, reorganization, or sale of assets.",
      "We do not sell personal information. We do not use your private repository contents to train ShipNap-owned foundation models.",
    ],
  },
  {
    title: "7. Cookies and analytics",
    body: [
      "ShipNap uses cookies and similar technologies for authentication, session management, security, preferences, product analytics, and error monitoring.",
      "We may use analytics and session insight tools if enabled. Where required, we will request consent before using non-essential analytics or session recording technologies.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use safeguards intended to protect information, including encrypted storage for API keys and GitHub OAuth tokens, HTTPS, access controls, rate limiting, secret redaction, sandboxed task execution, and monitoring.",
      "No system is perfectly secure. You are responsible for maintaining secure GitHub and AI provider accounts, using appropriate repository permissions, reviewing generated code, and rotating credentials if you suspect exposure.",
    ],
  },
  {
    title: "9. Retention",
    body: [
      "We keep waitlist, account, workspace, repository, task, billing, and log information for as long as needed to provide the service, comply with legal obligations, resolve disputes, enforce agreements, maintain security, and support users.",
      "You can delete tasks, disconnect repositories, revoke GitHub App access, revoke sessions, unsubscribe from waitlist emails, and request account deletion. Some information may remain in backups, audit logs, billing records, security logs, or third-party systems for a limited period where needed for legitimate business or legal purposes.",
    ],
  },
  {
    title: "10. International data transfers",
    body: [
      "ShipNap and its service providers may process information in countries other than where you live or where your organization is located. These countries may have different data protection laws.",
      "If applicable law requires a transfer mechanism, we will use appropriate safeguards for international transfers, such as contractual protections with service providers.",
    ],
  },
  {
    title: "11. Your choices and rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, export, restrict, or object to certain processing of your personal information. You may also have rights to opt out of certain analytics or marketing uses.",
      "You can exercise many controls directly through GitHub, your ShipNap account, workspace settings, repository connection settings, billing portal, unsubscribe links, or browser cookie settings. You may contact privacy@shipnap.dev for privacy requests.",
    ],
  },
  {
    title: "12. California privacy notice",
    body: [
      "If California privacy laws apply to your use of ShipNap, this section provides additional information. We collect identifiers, internet or network activity, commercial information, professional or employment-related information if included in your account or repository context, and inferences from product usage analytics.",
      "We use these categories for the purposes described in this Privacy Policy. We do not sell personal information. We do not knowingly share personal information for cross-context behavioral advertising. You may contact privacy@shipnap.dev to exercise applicable California privacy rights.",
    ],
  },
  {
    title: "13. Children",
    body: [
      "ShipNap is not intended for children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided personal information to ShipNap, contact privacy@shipnap.dev.",
    ],
  },
  {
    title: "14. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. If changes are material, we will take reasonable steps to notify users, such as posting an updated date or providing in-product notice.",
    ],
  },
  {
    title: "15. Contact",
    body: ["For privacy questions or requests, contact privacy@shipnap.dev. For support questions, contact support@shipnap.dev."],
  },
];

export default function PrivacyPage() {
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
        <h1 className="mb-2 text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mb-4 text-sm text-muted-foreground">Last updated: June 3, 2026</p>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          This policy describes how ShipNap handles waitlist data, account data, repository data, task data, AI provider processing, billing information, analytics, and support communications.
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
