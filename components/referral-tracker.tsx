'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function ReferralTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (!ref || !/^[a-zA-Z0-9_-]{2,30}$/.test(ref)) return

    // Track the click server-side
    fetch('/api/referrals/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referral_code: ref,
        page_url: window.location.pathname,
      }),
    }).catch(() => {
      // Silent fail - don't block user experience
    })
  }, [searchParams])

  return null
}
