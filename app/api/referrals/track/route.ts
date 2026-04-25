import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const { referral_code, page_url } = await request.json()

    if (!referral_code || !/^[a-zA-Z0-9_-]{2,30}$/.test(referral_code)) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 400 })
    }

    const supabase = createAdminClient()

    // Find the affiliate
    const { data: affiliate } = await supabase
      .from('affiliates')
      .select('id, referral_code')
      .eq('referral_code', referral_code.toLowerCase())
      .eq('is_active', true)
      .single()

    if (!affiliate) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 404 })
    }

    // Log the click
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    await supabase.from('referral_clicks').insert({
      affiliate_id: affiliate.id,
      referral_code: affiliate.referral_code,
      ip_address: ip,
      user_agent: userAgent.substring(0, 500),
      page_url: page_url || null,
    })

    // Increment total clicks
    await supabase.rpc('increment_clicks', { affiliate_id_input: affiliate.id }).catch(() => {
      // Fallback: direct update if RPC doesn't exist
      return supabase
        .from('affiliates')
        .update({ total_clicks: affiliate.id })
        .eq('id', affiliate.id)
    })

    // Simple increment via raw update
    const { data: currentAffiliate } = await supabase
      .from('affiliates')
      .select('total_clicks')
      .eq('id', affiliate.id)
      .single()

    if (currentAffiliate) {
      await supabase
        .from('affiliates')
        .update({ total_clicks: (currentAffiliate.total_clicks || 0) + 1 })
        .eq('id', affiliate.id)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
