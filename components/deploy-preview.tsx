"use client"

import { useEffect, useState } from "react"

const steps = [
  {
    label: "Connected repository",
    detail: "github.com/acme/webapp",
    delay: 800,
  },
  {
    label: "API key validated",
    detail: "claude-opus-4-7",
    delay: 1200,
  },
  {
    label: "Agent spawned",
    detail: "issue #142",
    delay: 1600,
  },
]

const tasks = [
  { label: "Reading issue description…", delay: 2200 },
  { label: "Cloning repository…", delay: 2600 },
  { label: "Analyzing codebase structure…", delay: 3000 },
  { label: "Identifying relevant files…", delay: 3400 },
  { label: "Implementing feature…", delay: 3800 },
  { label: "Writing tests…", delay: 4200 },
  { label: "Running test suite…", delay: 4600 },
  { label: "Linting and formatting…", delay: 5000 },
]

const done = { label: "Pull request created", detail: "#143", url: "https://github.com/acme/webapp/pull/143", delay: 5400 }

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

export function DeployPreview() {
  const [phase, setPhase] = useState<"setup" | "running" | "done">("setup")
  const [visibleSteps, setVisibleSteps] = useState(0)
  const [visibleTasks, setVisibleTasks] = useState(0)
  const [showDone, setShowDone] = useState(false)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    steps.forEach((step, i) => {
      timers.push(setTimeout(() => setVisibleSteps(i + 1), step.delay))
    })

    timers.push(setTimeout(() => setPhase("running"), 2000))

    tasks.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleTasks(i + 1), tasks[i].delay))
    })

    timers.push(setTimeout(() => {
      setPhase("done")
      setShowDone(true)
    }, done.delay))

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">acme/webapp</p>
          <p className="text-xs text-muted-foreground">issue #142 &middot; claude-opus-4-7</p>
        </div>
        {phase === "running" && (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            Deploying
          </span>
        )}
        {phase === "done" && (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            <CheckIcon />
            Done
          </span>
        )}
      </div>

      {/* Setup steps */}
      <div className="mb-3 space-y-0.5">
        {steps.map((step, i) => {
          const done = i < visibleSteps
          const current = i === visibleSteps && phase === "setup"
          return (
            <div
              key={step.label}
              className={`flex items-center gap-3 rounded-lg px-3 py-1 text-sm transition-colors ${
                done ? "text-foreground" : current ? "text-foreground" : "text-muted-foreground/40"
              }`}
            >
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                done ? "bg-foreground text-background" : current ? "bg-secondary text-foreground" : "bg-secondary/50 text-muted-foreground/40"
              }`}>
                {done ? <CheckIcon /> : current ? <Spinner /> : <span className="text-xs">{i + 1}</span>}
              </span>
              <span>{step.label}</span>
              <span className="ml-auto font-mono text-xs text-muted-foreground">{done || current ? step.detail : ""}</span>
            </div>
          )
        })}
      </div>

      {/* Divider + running tasks */}
      {(phase === "running" || phase === "done") && (
        <div className="mb-3 border-t border-border pt-3 space-y-0.5">
          {tasks.map((task, i) => {
            const done = phase === "done" || i < visibleTasks
            const current = i === visibleTasks && phase === "running"
            return (
              <div
                key={task.label}
                className={`flex items-center gap-3 rounded-lg px-3 py-1 text-sm ${
                  done ? "text-foreground" : current ? "text-foreground" : "text-muted-foreground/40"
                }`}
              >
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  done ? "bg-foreground text-background" : current ? "bg-secondary text-foreground" : "bg-secondary/50 text-muted-foreground/40"
                }`}>
                  {done ? <CheckIcon /> : <Spinner />}
                </span>
                <span>{task.label}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Done: PR result */}
      {showDone && (
        <div className="rounded-lg border border-border bg-secondary/50 p-4">
          <div className="mb-1 flex items-center gap-2">
            <CheckIcon />
            <span className="text-sm font-semibold text-foreground">{done.label}</span>
            <span className="font-mono text-sm text-foreground">{done.detail}</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{done.url}</p>
        </div>
      )}

      {/* Placeholder for empty state before anything animates */}
      {phase === "setup" && visibleSteps === 0 && (
        <div className="flex items-center justify-center py-4 text-sm text-muted-foreground">
          <Spinner />
          <span className="ml-2">Initializing…</span>
        </div>
      )}
    </div>
  )
}
