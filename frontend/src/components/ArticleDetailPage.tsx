import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { articles } from "../data/articles.js"
import { TopBar } from "./TopBar.js"

// Single-line short blocks are section headers; everything else is a paragraph
function renderContent(text: string) {
  const blocks = text.split(/\n\n+/).map((b) => b.trim()).filter(Boolean)

  return blocks.map((block, i) => {
    if (block.split("\n").length === 1 && block.length < 60) {
      return (
        <h2 key={i} className="font-semibold text-base mt-8 mb-2">
          {block}
        </h2>
      )
    }
    return (
      <p key={i} className="text-sm leading-relaxed mb-4">
        {block}
      </p>
    )
  })
}

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const article = articles.find((a) => a.slug === slug)

  useEffect(() => {
    fetch(`/articles/${slug}.txt`)
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.text()
      })
      .then((text) => { setContent(text); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [slug])

  if (loading) return (
    <div className="min-h-screen">
      <TopBar backTo="/travelPage" backLabel="Back to blog" />
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif italic text-black/30 text-lg animate-pulse">Loading…</p>
      </div>
    </div>
  )

  if (error) return (
    <div className="min-h-screen">
      <TopBar backTo="/travelPage" backLabel="Back to blog" />
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif italic text-black/30 text-lg">Could not load article.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen text-[#0d0d0d]">
     <TopBar backTo="/travelPage" backLabel="Back to blog" />
      <div className="max-w-2xl mx-auto px-6 pt-15 pb-24 text-left">

        {(article?.image1 || article?.image2 || article?.image3) && (
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {[article?.image1, article?.image2, article?.image3].filter(Boolean).map((src, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-1/3 aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={src}
                  alt={`${article?.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {(article?.author || article?.role) && (
          <div className="mb-8 ">
            {article?.author && (
              <p className="text-sm font-medium">{article.author}</p>
            )}
            {article?.role && (
              <p className="text-xs text-muted-foreground">{article.role}</p>
            )}
            {article?.date && (
              <p className="text-xs text-muted-foreground">{article.date}</p>
            )}

          </div>
        )}
        <h1
          className="text-[2rem] sm:text-[3rem] mb-8 leading-tight"
          style={{ color: "var(--font-color)" }}
        >
          {article?.title}
        </h1>

        <div>{content && renderContent(content)}</div>

      </div>
    </div>
  )
}
