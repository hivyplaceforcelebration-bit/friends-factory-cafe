import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = createServerClient()

  // Fetch 50 active reviews then shuffle in JS — avoids ORDER BY RANDOM() full scan
  const { data, error } = await supabase
    .from('google_reviews')
    .select('id, text, star_rating')
    .eq('status', 'active')
    .limit(50)

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ reviews: [] })
  }

  // Shuffle and return 10
  const shuffled = data.sort(() => Math.random() - 0.5).slice(0, 10)

  return NextResponse.json({ reviews: shuffled })
}
