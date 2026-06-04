"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-8 right-8 z-50",
        "flex items-center gap-2",
        "rounded-full border border-border",
        "bg-background/80 backdrop-blur-md",
        "text-muted-foreground hover:text-foreground",
        "shadow-lg shadow-foreground/5",
        "hover:shadow-xl hover:shadow-foreground/10",
        "hover:border-foreground/20",
        "transition-all duration-300",
        "px-4 py-2.5",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp className="h-4 w-4" />
      <span className="text-sm font-medium">Top</span>
    </button>
  )
}
