import fs from "node:fs"
import path from "node:path"
import type { MetadataRoute } from "next"

const BASE_URL = "https://shipnap.dev"

function getBlogPosts(): { slug: string; date: string }[] {
  const contentDir = path.join(process.cwd(), "content")
  if (!fs.existsSync(contentDir)) return []

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8")
      const dateMatch = raw.match(/date:\s*["'](.+?)["']/)
      return { slug, date: dateMatch?.[1] ?? new Date().toISOString() }
    })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
