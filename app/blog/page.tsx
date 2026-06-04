import fs from "node:fs"
import path from "node:path"

interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

function getPosts(): Post[] {
  const contentDir = path.join(process.cwd(), "content")
  if (!fs.existsSync(contentDir)) return []
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

  const posts: Post[] = []

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "")
    const filePath = path.join(contentDir, file)
    const raw = fs.readFileSync(filePath, "utf-8")

    // Extract exported metadata from the MDX file
    const metadataMatch = raw.match(
      /export const metadata = \{([\s\S]*?)\}/
    )
    if (!metadataMatch) continue

    try {
      // Extract individual fields from the metadata object
      const title = metadataMatch[1].match(/title:\s*(["'])(.+?)\1/)?.[2] ?? ""
      const description =
        metadataMatch[1].match(/description:\s*(["'])(.+?)\1/)?.[2] ?? ""
      const date = metadataMatch[1].match(/date:\s*["'](.+?)["']/)?.[1] ?? ""
      const tagsMatch = metadataMatch[1].match(/tags:\s*\[(.+?)\]/)
      const tags = tagsMatch
        ? tagsMatch[1].split(",").map((t) => t.trim().replace(/["']/g, ""))
        : []

      if (!title || !description || !date) continue

      posts.push({ slug, title, description, date, tags })
    } catch {
      continue
    }
  }

  // Sort by date descending
  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return posts
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div>
      <a
        href="/"
        className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        ← Back to homepage
      </a>
      <header className="mb-12">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Deep dives on AI-powered development, prompt engineering, and building
          tools that write code.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-2">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <a
                href={`/blog/${post.slug}`}
                className="block no-underline rounded-xl border border-transparent hover:border-border hover:bg-card/50 p-4 -mx-4 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.tags.length > 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{post.tags.join(", ")}</span>
                    </>
                  )}
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
