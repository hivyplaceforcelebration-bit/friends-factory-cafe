'use client'

import { useEffect, useState } from 'react'
import { IndianRupee, Clock, CheckCircle, Wallet } from 'lucide-react'

interface Conversion {
  id: string
  customer_name: string | null
  package_name: string | null
  package_price: number | null
  commission_rate: number
  commission_amount: number
  status: string
  created_at: string
  paid_at: string | null
}

interface AffiliateData {
  total_earned: number
  conversions: Conversion[]
}

const cardStyle: React.CSSProperties = {
  borderRadius: 16, border: '1px solid #f3f4f6', backgroundColor: '#fff',
  padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
}

export default function AffiliateEarningsPage() {
  const [data, setData] = useState<AffiliateData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const sessionRes = await fetch('/api/auth/affiliate/session')
      if (!sessionRes.ok) { setLoading(false); return }
      const session = await sessionRes.json()
      if (session.id) {
        const res = await fetch(`/api/affiliates/${session.id}`)
        if (res.ok) setData(await res.json())
      }
      setLoading(false)
    }
    load().catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 260 }}>
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-teal-500" />
      </div>
    )
  }

  if (!data) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <p style={{ fontSize: 15, color: '#6b7280' }}>Could not load earnings data</p>
      </div>
    )
  }

  const conversions = data.conversions || []
  const pending = conversions.filter((c) => c.status === 'pending' || c.status === 'confirmed')
  const paid = conversions.filter((c) => c.status === 'paid')
  const pendingAmount = pending.reduce((s, c) => s + Number(c.commission_amount || 0), 0)
  const paidAmount = paid.reduce((s, c) => s + Number(c.commission_amount || 0), 0)
  const totalEarned = Number(data.total_earned || 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Earnings</h1>
        <p style={{ fontSize: 15, color: '#6b7280', marginTop: 4 }}>Track your commission earnings and payment history</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {[
          { label: 'Total Earned', value: `₹${totalEarned.toLocaleString('en-IN')}`, icon: IndianRupee, color: '#8b5cf6', bg: '#f5f3ff' },
          { label: 'Pending', value: `₹${pendingAmount.toLocaleString('en-IN')}`, sub: `${pending.length} conversion(s)`, icon: Clock, color: '#f59e0b', bg: '#fffbeb' },
          { label: 'Paid', value: `₹${paidAmount.toLocaleString('en-IN')}`, sub: `${paid.length} payment(s)`, icon: Wallet, color: '#10b981', bg: '#ecfdf5' },
        ].map((s) => (
          <div key={s.label} style={{ ...cardStyle, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon style={{ width: 20, height: 20, color: s.color }} />
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 500, color: '#6b7280' }}>{s.label}</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginTop: 2 }}>{s.value}</p>
              {s.sub && <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{s.sub}</p>}
            </div>
          </div>
        ))}
      </div>

      <div style={cardStyle}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16 }}>All Earnings</h2>
        {conversions.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 0' }}>
            <CheckCircle style={{ width: 48, height: 48, color: '#d1d5db' }} />
            <p style={{ marginTop: 12, fontSize: 14, color: '#9ca3af' }}>No earnings yet. Share your referral link to start earning!</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  {['Customer','Package','Booking Value','Rate','Your Earning','Status','Date'].map((h, i) => (
                    <th key={h} style={{
                      padding: '12px 16px', fontWeight: 500, color: '#6b7280', fontSize: 13,
                      textAlign: i === 2 || i === 4 ? 'right' : i === 3 || i === 5 ? 'center' : i === 6 ? 'right' : 'left',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {conversions.map((conv, i) => (
                  <tr key={conv.id} style={{ borderBottom: i < conversions.length - 1 ? '1px solid #f9fafb' : 'none' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#1f2937' }}>{conv.customer_name || 'Customer'}</td>
                    <td style={{ padding: '12px 16px', color: '#4b5563' }}>{conv.package_name || 'N/A'}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#4b5563' }}>
                      {conv.package_price ? `₹${Number(conv.package_price).toLocaleString('en-IN')}` : '-'}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#374151' }}>{Number(conv.commission_rate)}%</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 700, color: '#111827' }}>₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                      <StatusBadge status={conv.status} />
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#9ca3af', fontSize: 13 }}>
                      {new Date(conv.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    pending: { bg: '#fffbeb', text: '#d97706', border: '#fde68a' },
    confirmed: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
    paid: { bg: '#ecfdf5', text: '#059669', border: '#a7f3d0' },
    rejected: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
  }
  const c = colors[status] || colors.pending
  return (
    <span style={{
      display: 'inline-flex', padding: '3px 10px', borderRadius: 999,
      fontSize: 12, fontWeight: 600, textTransform: 'capitalize',
      backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}`,
    }}>{status}</span>
  )
}
