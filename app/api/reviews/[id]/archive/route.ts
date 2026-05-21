import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!id || !/^[0-9a-f-]{36}$/.test(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  const supabase = createServerClient()

  const { error } = await supabase
    .from('google_reviews')
    .update({ status: 'archived', archived_at: new Date().toISOString() })
    .eq('id', id)
    .eq('status', 'active') // only archive if still active — idempotent

  if (error) {
    return NextResponse.json({ error: 'Failed to archive review' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
