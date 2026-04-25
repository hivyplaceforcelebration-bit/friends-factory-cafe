'use client'

import { useEffect, useState } from 'react'
import { Search, CheckCircle, XCircle, Clock, Ban } from 'lucide-react'
import type { ReferralConversion } from '@/lib/supabase/types'

interface ConversionWithAffiliate extends ReferralConversion {
  affiliates: { name: string; referral_code: string }
}

export default function ReferralsPage() {
  const [conversions, setConversions] = useState<ConversionWithAffiliate[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [updating, setUpdating] = useState<string | null>(null)

  const loadData = async () => {
    const params = statusFilter !== 'all' ? `?status=${statusFilter}` : ''
    const res = await fetch(`/api/referrals${params}`)
    if (res.ok) setConversions(await res.json())
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [statusFilter])

  const updateStatus = async (id: string, status: string) => {
    setUpdating(id)
    const res = await fetch('/api/referrals', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    if (res.ok) await loadData()
    setUpdating(null)
  }

  const filtered = conversions.filter((c) => {
    if (!search) return true
    const s = search.toLowerCase()
    return (
      (c.customer_name || '').toLowerCase().includes(s) ||
      (c.customer_phone || '').includes(s) ||
      c.referral_code.toLowerCase().includes(s) ||
      (c.affiliates?.name || '').toLowerCase().includes(s)
    )
  })

  const statusCounts = {
    all: conversions.length,
    pending: conversions.filter((c) => c.status === 'pending').length,
    confirmed: conversions.filter((c) => c.status === 'confirmed').length,
    paid: conversions.filter((c) => c.status === 'paid').length,
    rejected: conversions.filter((c) => c.status === 'rejected').length,
  }

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
        <h1 className="text-3xl font-bold tracking-tight">Referrals</h1>
        <p className="mt-1 text-muted-foreground">
          Track and manage all referral conversions
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, phone, or affiliate..."
            className="w-full rounded-lg border bg-background pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {(['all', 'pending', 'confirmed', 'paid', 'rejected'] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`shrink-0 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  statusFilter === status
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'hover:bg-muted'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                <span className="ml-1.5 text-xs text-muted-foreground">
                  ({statusCounts[status]})
                </span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border bg-card py-16 text-center">
          <h3 className="text-lg font-medium">No referrals found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Conversions will appear here when customers book via referral links
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Customer</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Affiliate</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Package</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Price</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Commission</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-center font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((conv) => (
                  <tr key={conv.id} className="transition-colors hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <p className="font-medium">{conv.customer_name || 'N/A'}</p>
                      <p className="text-xs text-muted-foreground">
                        {conv.customer_phone || ''}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium">{conv.affiliates?.name || 'N/A'}</p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {conv.referral_code}
                      </p>
                    </td>
                    <td className="px-4 py-3">{conv.package_name || 'N/A'}</td>
                    <td className="px-4 py-3 text-right">
                      {conv.package_price
                        ? `₹${Number(conv.package_price).toLocaleString('en-IN')}`
                        : '-'}
                    </td>
                    <td className="px-4 py-3 text-right font-medium">
                      ₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusBadge status={conv.status} />
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">
                      {new Date(conv.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        {conv.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateStatus(conv.id, 'confirmed')}
                              disabled={updating === conv.id}
                              className="rounded p-1.5 text-emerald-600 hover:bg-emerald-50"
                              title="Confirm"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(conv.id, 'rejected')}
                              disabled={updating === conv.id}
                              className="rounded p-1.5 text-red-500 hover:bg-red-50"
                              title="Reject"
                            >
                              <Ban className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        {conv.status === 'confirmed' && (
                          <button
                            onClick={() => updateStatus(conv.id, 'paid')}
                            disabled={updating === conv.id}
                            className="rounded px-2.5 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50"
                          >
                            Mark Paid
                          </button>
                        )}
                        {conv.status === 'paid' && (
                          <span className="text-xs text-muted-foreground">Done</span>
                        )}
                        {conv.status === 'rejected' && (
                          <button
                            onClick={() => updateStatus(conv.id, 'pending')}
                            disabled={updating === conv.id}
                            className="rounded p-1.5 text-muted-foreground hover:bg-muted"
                            title="Re-open"
                          >
                            <Clock className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { icon: typeof CheckCircle; style: string }> = {
    pending: { icon: Clock, style: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-600' },
    confirmed: { icon: CheckCircle, style: 'border-blue-500/20 bg-blue-500/10 text-blue-600' },
    paid: { icon: CheckCircle, style: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600' },
    rejected: { icon: XCircle, style: 'border-red-500/20 bg-red-500/10 text-red-600' },
  }

  const { icon: Icon, style } = config[status] || config.pending

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${style}`}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  )
}
