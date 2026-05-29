# ShipNap

Describe a task in plain English. Wake up to a pull request.

ShipNap connects your GitHub repo to an AI agent that writes code, runs tests, and opens a clean PR — using your own API key, on your choice of model, while you're away.

## How it works

1. **Connect** — Authorize access to any GitHub repo, public or private.
2. **Describe** — Write the task in natural language, like you'd explain it to a coworker.
3. **Ship** — The agent writes the code, runs the tests, and opens a pull request.
4. **Review** — Review clean commits, check test output, merge when ready.

## What makes it different

- **Bring Your Own API Key.** Paste your Anthropic, OpenAI, or Google key. Your provider bills you at their standard rate — ShipNap adds nothing.
- **Any model.** Claude, GPT, Gemini — whichever handles your codebase best. Change models between tasks.
- **No vendor lock-in.** Your code, your model, your key. ShipNap only handles orchestration — cloning, branching, committing, opening the PR.
- **Secure by design.** Source code flows from your repo through the model to a PR branch. Nothing is stored, cached, logged, or trained on.
- **Clean pull requests.** Every PR lands with atomic commits, a clear description, test results, and decision notes for nontrivial changes.

## Status

ShipNap is pre-launch. We're onboarding developers in small batches.

[Join the waitlist](https://shipnap.dev) to get early access.

## Development

```bash
# Install dependencies
npm install

# Start the dev server (Turbopack)
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Lint
npm run lint
```

### Tech stack

- **Framework:** Next.js 16 (Turbopack)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Language:** TypeScript
- **Waitlist API:** Next.js API routes + Resend
