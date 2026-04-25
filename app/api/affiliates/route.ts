import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getAdminSession, hashPassword } from '@/lib/referral-auth'

export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('affiliates')
    .select(
      'id, name, email, phone, referral_code, commission_rate, is_active, total_clicks, total_conversions, total_earned, created_at, updated_at'
    )
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, email, phone, password, referral_code, commission_rate } = body

    if (!name || !email || !password || !referral_code) {
      return NextResponse.json(
        { error: 'Name, email, password, and referral code are required' },
        { status: 400 }
      )
    }

    if (!/^[a-zA-Z0-9_-]{2,30}$/.test(referral_code)) {
      return NextResponse.json(
        { error: 'Referral code must be 2-30 characters (letters, numbers, hyphens, underscores)' },
        { status: 400 }
      )
    }

    const passwordHash = await hashPassword(password)

    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('affiliates')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone || null,
        password_hash: passwordHash,
        referral_code: referral_code.toLowerCase().trim(),
        commission_rate: commission_rate || 10,
      })
      .select(
        'id, name, email, phone, referral_code, commission_rate, is_active, total_clicks, total_conversions, total_earned, created_at'
      )
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email or referral code already exists' },
          { status: 409 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
