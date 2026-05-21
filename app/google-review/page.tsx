'use client'

import { useEffect, useState } from 'react'

type Review = {
  id: string
  text: string
  star_rating: 4 | 5
}

const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
  'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID'

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-lg">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function GoogleReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Review | null>(null)
  const [copied, setCopied] = useState(false)
  const [archiving, setArchiving] = useState(false)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        setReviews(d.reviews || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  async function handleSelect(review: Review) {
    setSelected(review)
    setCopied(false)

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(review.text)
      setCopied(true)
    } catch {
      // Clipboard blocked — user will see the text to manually copy
    }
  }

  async function handleGoToGoogle() {
    if (!selected) return
    setArchiving(true)

    // Archive in background — don't wait for it to block the redirect
    fetch(`/api/reviews/${selected.id}/archive`, { method: 'POST' }).catch(() => {})

    // Small delay so archive fires before page unloads
    await new Promise((r) => setTimeout(r, 300))
    window.open(GOOGLE_REVIEW_URL, '_blank')
    setArchiving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Loading reviews…</p>
        </div>
      </div>
    )
  }

  if (selected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">📋</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Your review is ready!</h2>
          <Stars count={selected.star_rating} />
          <div className="bg-gray-50 rounded-2xl p-4 text-left border border-gray-100">
            <p className="text-gray-700 text-sm leading-relaxed">{selected.text}</p>
          </div>

          {copied ? (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-sm">
              <span>✓</span> Review copied to clipboard!
            </div>
          ) : (
            <p className="text-amber-600 text-sm font-medium">
              Please copy the text above manually, then tap the button below.
            </p>
          )}

          <div className="space-y-3">
            <button
              onClick={handleGoToGoogle}
              disabled={archiving}
              className="w-full bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 text-lg"
            >
              {archiving ? 'Opening Google…' : '⭐ Open Google Reviews'}
            </button>
            <p className="text-xs text-gray-400">
              Paste your review on Google &amp; select {selected.star_rating} stars — takes 10 seconds!
            </p>
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-gray-400 hover:text-gray-600 underline"
            >
              ← Choose a different review
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 px-4 py-10">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-5xl">☕</div>
          <h1 className="text-3xl font-bold text-gray-800">Friends Factory Cafe</h1>
          <p className="text-gray-500 text-sm">Vadodara&apos;s favourite celebration cafe</p>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100">
            <p className="text-gray-700 font-medium text-sm">
              Loved your experience? Share it with others! 💛
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Pick a review below — we&apos;ll copy it for you automatically.
            </p>
          </div>
        </div>

        {/* Reviews grid */}
        {reviews.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-4xl mb-3">🎉</p>
            <p className="font-medium">All reviews have been shared!</p>
            <p className="text-sm mt-1">Please visit us again soon.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {reviews.map((review) => (
              <button
                key={review.id}
                onClick={() => handleSelect(review)}
                className="w-full bg-white hover:bg-amber-50 border border-gray-100 hover:border-amber-300 rounded-2xl p-4 text-left transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Stars count={review.star_rating} />
                  <span className="text-xs text-amber-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Select →
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {review.text}
                </p>
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-xs text-gray-400 pb-4">
          Thank you for supporting Friends Factory Cafe 🧡
        </p>
      </div>
    </div>
  )
}
