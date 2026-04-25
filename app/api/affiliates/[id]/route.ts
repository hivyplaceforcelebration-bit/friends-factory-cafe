import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getAdminSession, getAffiliateSession, hashPassword } from '@/lib/referral-auth'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Allow both admin and affiliate (own data only)
  const adminSession = await getAdminSession()
  const affiliateSession = !adminSession ? await getAffiliateSession() : null

  if (!adminSession && !affiliateSession) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  // Affiliates can only view their own data
  if (affiliateSession && affiliateSession.id !== id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  const supabase = createAdminClient()

  // Get affiliate info
  const { data: affiliate, error } = await supabase
    .from('affiliates')
    .select(
      'id, name, email, phone, referral_code, commission_rate, is_active, total_clicks, total_conversions, total_earned, created_at, updated_at'
    )
    .eq('id', id)
    .single()

  if (error || !affiliate) {
    return NextResponse.json({ error: 'Affiliate not found' }, { status: 404 })
  }

  // Get recent conversions
  const { data: conversions } = await supabase
    .from('referral_conversions')
    .select('*')
    .eq('affiliate_id', id)
    .order('created_at', { ascending: false })
    .limit(50)

  // Get click stats (last 30 days)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  const { data: recentClicks } = await supabase
    .from('referral_clicks')
    .select('created_at')
    .eq('affiliate_id', id)
    .gte('created_at', thirtyDaysAgo.toISOString())

  return NextResponse.json({
    ...affiliate,
    conversions: conversions || [],
    recent_clicks: recentClicks || [],
  })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  try {
    const body = await request.json()
    const updates: Record<string, unknown> = {}

    if (body.name !== undefined) updates.name = body.name.trim()
    if (body.email !== undefined) updates.email = body.email.toLowerCase().trim()
    if (body.phone !== undefined) updates.phone = body.phone || null
    if (body.commission_rate !== undefined)
      updates.commission_rate = body.commission_rate
    if (body.is_active !== undefined) updates.is_active = body.is_active
    if (body.password) updates.password_hash = await hashPassword(body.password)

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('affiliates')
      .update(updates)
      .eq('id', id)
      .select(
        'id, name, email, phone, referral_code, commission_rate, is_active, total_clicks, total_conversions, total_earned, created_at, updated_at'
      )
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already exists' },
          { status: 409 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const supabase = createAdminClient()

  const { error } = await supabase.from('affiliates').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
