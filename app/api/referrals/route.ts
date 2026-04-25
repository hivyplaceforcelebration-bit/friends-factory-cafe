import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getAdminSession } from '@/lib/referral-auth'

export async function GET(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = request.nextUrl
  const status = searchParams.get('status')
  const affiliateId = searchParams.get('affiliate_id')
  const limit = parseInt(searchParams.get('limit') || '100')

  const supabase = createAdminClient()
  let query = supabase
    .from('referral_conversions')
    .select('*, affiliates!inner(name, referral_code)')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (status) {
    query = query.eq('status', status)
  }
  if (affiliateId) {
    query = query.eq('affiliate_id', affiliateId)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// Update conversion status (confirm, reject, mark as paid)
export async function PUT(request: NextRequest) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id, status, notes } = await request.json()

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Conversion ID and status are required' },
        { status: 400 }
      )
    }

    if (!['pending', 'confirmed', 'paid', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const updates: Record<string, unknown> = { status }
    if (notes !== undefined) updates.notes = notes
    if (status === 'paid') updates.paid_at = new Date().toISOString()

    const { data: conversion, error } = await supabase
      .from('referral_conversions')
      .update(updates)
      .eq('id', id)
      .select('*')
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // If confirmed or paid, update affiliate totals
    if (status === 'confirmed' || status === 'paid') {
      const { data: totals } = await supabase
        .from('referral_conversions')
        .select('commission_amount')
        .eq('affiliate_id', conversion.affiliate_id)
        .in('status', ['confirmed', 'paid'])

      const totalEarned = (totals || []).reduce(
        (sum: number, r: { commission_amount: number }) => sum + Number(r.commission_amount),
        0
      )
      const totalConversions = (totals || []).length

      await supabase
        .from('affiliates')
        .update({
          total_earned: totalEarned,
          total_conversions: totalConversions,
        })
        .eq('id', conversion.affiliate_id)
    }

    return NextResponse.json(conversion)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
