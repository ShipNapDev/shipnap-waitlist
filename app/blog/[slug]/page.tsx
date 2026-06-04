import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { evaluate } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { useMDXComponents } from "@/mdx-components"
import { BackToTop } from "@/components/back-to-top"

interface PostMetadata {
  title: string
  description: string
  date: string
  tags: string[]
}

function getPostMetadata(filePath: string): PostMetadata | null {
  const raw = fs.readFileSync(filePath, "utf-8")
  const match = raw.match(/export const metadata = \{([\s\S]*?)\}/)
  if (!match) return null

  const title = match[1].match(/title:\s*(["'])(.+?)\1/)?.[2] ?? ""
  const description =
    match[1].match(/description:\s*(["'])(.+?)\1/)?.[2] ?? ""
  const date = match[1].match(/date:\s*["'](.+?)["']/)?.[1] ?? ""
  const tagsMatch = match[1].match(/tags:\s*\[(.+?)\]/)
  const tags = tagsMatch
    ? tagsMatch[1].split(",").map((t) => t.trim().replace(/["']/g, ""))
    : []

  return { title, description, date, tags }
}

function getSlugs(): string[] {
  const contentDir = path.join(process.cwd(), "content")
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return {}

  const meta = getPostMetadata(filePath)
  if (!meta) return {}

  return {
    title: `${meta.title} — ShipNap Blog`,
    description: meta.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content", `${slug}.mdx`)

  if (!fs.existsSync(filePath)) notFound()

  const meta = getPostMetadata(filePath)

  let Post: React.ComponentType
  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    const mod = await evaluate(raw, {
      ...runtime,
      useMDXComponents,
    })
    Post = mod.default
  } catch {
    notFound()
  }

  return (
    <div>
      <a
        href="/blog"
        className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        ← Back to all posts
      </a>
      {meta && (
        <header className="mb-10 not-prose">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {meta.tags.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span>{meta.tags.join(", ")}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="mt-3 text-lg text-muted-foreground">
              {meta.description}
            </p>
          )}
        </header>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
        prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2
        prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl
        prose-p:leading-relaxed prose-p:mb-5
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-code:before:content-none prose-code:after:content-none prose-code:rounded-md prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal
        prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card
        prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:not-italic
        prose-li:leading-relaxed
        prose-img:rounded-xl
      ">
        <Post />
      </div>

      <BackToTop />
    </div>
  )
}
