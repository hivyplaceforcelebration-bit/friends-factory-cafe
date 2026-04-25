'use client'

import { useEffect, useState } from 'react'
import { IndianRupee, Clock, CheckCircle, Wallet } from 'lucide-react'
import { StatsCard } from '@/components/admin/stats-card'
import type { ReferralConversion } from '@/lib/supabase/types'

interface ConversionWithAffiliate extends ReferralConversion {
  affiliates: { name: string; referral_code: string }
}

export default function PayoutsPage() {
  const [conversions, setConversions] = useState<ConversionWithAffiliate[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)

  const loadData = async () => {
    const res = await fetch('/api/referrals')
    if (res.ok) setConversions(await res.json())
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const markPaid = async (id: string) => {
    setUpdating(id)
    await fetch('/api/referrals', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: 'paid' }),
    })
    await loadData()
    setUpdating(null)
  }

  const pendingConversions = conversions.filter((c) => c.status === 'confirmed')
  const paidConversions = conversions.filter((c) => c.status === 'paid')

  const totalPending = pendingConversions.reduce(
    (s, c) => s + Number(c.commission_amount || 0),
    0
  )
  const totalPaid = paidConversions.reduce(
    (s, c) => s + Number(c.commission_amount || 0),
    0
  )
  const totalCommission = totalPending + totalPaid

  // Group pending by affiliate
  const pendingByAffiliate = pendingConversions.reduce(
    (acc, conv) => {
      const name = conv.affiliates?.name || conv.referral_code
      if (!acc[name]) {
        acc[name] = { name, conversions: [], total: 0 }
      }
      acc[name].conversions.push(conv)
      acc[name].total += Number(conv.commission_amount || 0)
      return acc
    },
    {} as Record<string, { name: string; conversions: ConversionWithAffiliate[]; total: number }>
  )

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payouts</h1>
        <p className="mt-1 text-muted-foreground">
          Track and manage commission payments
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatsCard
          title="Total Commission"
          value={`₹${totalCommission.toLocaleString('en-IN')}`}
          icon={IndianRupee}
        />
        <StatsCard
          title="Pending Payout"
          value={`₹${totalPending.toLocaleString('en-IN')}`}
          subtitle={`${pendingConversions.length} conversions`}
          icon={Clock}
        />
        <StatsCard
          title="Total Paid"
          value={`₹${totalPaid.toLocaleString('en-IN')}`}
          subtitle={`${paidConversions.length} conversions`}
          icon={Wallet}
        />
      </div>

      {/* Pending Payouts by Affiliate */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Pending Payouts</h2>
        {Object.keys(pendingByAffiliate).length === 0 ? (
          <div className="flex flex-col items-center py-12">
            <CheckCircle className="h-12 w-12 text-emerald-500/30" />
            <p className="mt-3 text-sm text-muted-foreground">
              All payouts are settled!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.values(pendingByAffiliate).map((group) => (
              <div key={group.name} className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{group.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {group.conversions.length} pending conversion(s)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">
                      ₹{group.total.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {group.conversions.map((conv) => (
                    <div
                      key={conv.id}
                      className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm"
                    >
                      <div>
                        <span className="font-medium">
                          {conv.customer_name || 'Customer'}
                        </span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {conv.package_name || 'N/A'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">
                          ₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => markPaid(conv.id)}
                          disabled={updating === conv.id}
                          className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
                        >
                          {updating === conv.id ? '...' : 'Pay'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Paid */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Recently Paid</h2>
        {paidConversions.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No payments made yet
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Affiliate</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Commission</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Paid On</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {paidConversions.slice(0, 20).map((conv) => (
                  <tr key={conv.id}>
                    <td className="py-3 font-medium">{conv.affiliates?.name || conv.referral_code}</td>
                    <td className="py-3">{conv.customer_name || 'N/A'}</td>
                    <td className="py-3 text-right font-medium">
                      ₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 text-right text-muted-foreground">
                      {conv.paid_at
                        ? new Date(conv.paid_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : '-'}
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
