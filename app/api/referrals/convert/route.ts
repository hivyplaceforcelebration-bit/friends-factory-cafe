import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const {
      referral_code,
      customer_name,
      customer_phone,
      package_name,
      package_price,
    } = await request.json()

    if (!referral_code) {
      return NextResponse.json({ error: 'Referral code is required' }, { status: 400 })
    }

    const supabase = createAdminClient()

    // Find the affiliate
    const { data: affiliate } = await supabase
      .from('affiliates')
      .select('id, referral_code, commission_rate')
      .eq('referral_code', referral_code.toLowerCase())
      .eq('is_active', true)
      .single()

    if (!affiliate) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 404 })
    }

    // Calculate commission
    const price = package_price ? Number(package_price) : 0
    const commissionAmount = price > 0
      ? Math.round((price * affiliate.commission_rate) / 100)
      : 0

    // Log the conversion
    const { error } = await supabase.from('referral_conversions').insert({
      affiliate_id: affiliate.id,
      referral_code: affiliate.referral_code,
      customer_name: customer_name || null,
      customer_phone: customer_phone || null,
      package_name: package_name || null,
      package_price: price || null,
      commission_rate: affiliate.commission_rate,
      commission_amount: commissionAmount,
      status: 'pending',
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
