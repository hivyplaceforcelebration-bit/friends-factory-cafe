import { NextResponse } from 'next/server'
import { getAffiliateSession } from '@/lib/referral-auth'

export async function GET() {
  const session = await getAffiliateSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.json(session)
}
