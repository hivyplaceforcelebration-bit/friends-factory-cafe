'use client'

import { useEffect, useState } from 'react'
import {
  Building2,
  MousePointerClick,
  ArrowRightLeft,
  IndianRupee,
  TrendingUp,
} from 'lucide-react'
import { StatsCard } from '@/components/admin/stats-card'
import type { Affiliate, ReferralConversion } from '@/lib/supabase/types'

export default function AdminDashboardPage() {
  const [affiliates, setAffiliates] = useState<Affiliate[]>([])
  const [conversions, setConversions] = useState<ReferralConversion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [affRes, convRes] = await Promise.all([
          fetch('/api/affiliates'),
          fetch('/api/referrals'),
        ])
        if (affRes.ok) setAffiliates(await affRes.json())
        if (convRes.ok) setConversions(await convRes.json())
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const totalAffiliates = affiliates.length
  const activeAffiliates = affiliates.filter((a) => a.is_active).length
  const totalClicks = affiliates.reduce((s, a) => s + (a.total_clicks || 0), 0)
  const totalConversions = conversions.filter(
    (c) => c.status === 'confirmed' || c.status === 'paid'
  ).length
  const totalRevenue = affiliates.reduce(
    (s, a) => s + Number(a.total_earned || 0),
    0
  )
  const pendingPayouts = conversions
    .filter((c) => c.status === 'confirmed')
    .reduce((s, c) => s + Number(c.commission_amount || 0), 0)

  const topAffiliates = [...affiliates]
    .sort((a, b) => Number(b.total_earned || 0) - Number(a.total_earned || 0))
    .slice(0, 5)

  const recentConversions = conversions.slice(0, 8)

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-amber-500" />
          <p className="text-sm text-gray-400">Loading dashboard…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Overview of your referral program performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Affiliates"
          value={totalAffiliates}
          subtitle={`${activeAffiliates} active`}
          icon={Building2}
          iconColor="text-violet-600"
          iconBg="bg-violet-50"
        />
        <StatsCard
          title="Total Clicks"
          value={totalClicks.toLocaleString('en-IN')}
          icon={MousePointerClick}
          iconColor="text-blue-600"
          iconBg="bg-blue-50"
        />
        <StatsCard
          title="Conversions"
          value={totalConversions}
          subtitle={
            totalClicks > 0
              ? `${((totalConversions / totalClicks) * 100).toFixed(1)}% rate`
              : 'No clicks yet'
          }
          icon={ArrowRightLeft}
          iconColor="text-emerald-600"
          iconBg="bg-emerald-50"
        />
        <StatsCard
          title="Total Commission"
          value={`₹${totalRevenue.toLocaleString('en-IN')}`}
          subtitle={
            pendingPayouts > 0
              ? `₹${pendingPayouts.toLocaleString('en-IN')} pending`
              : 'All settled'
          }
          icon={IndianRupee}
          iconColor="text-amber-600"
          iconBg="bg-amber-50"
        />
      </div>

      {/* Two Column */}
      <div className="grid gap-5 lg:grid-cols-5">
        {/* Top Affiliates */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:col-span-2">
          <div className="mb-5 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-amber-500" />
            <h2 className="text-[15px] font-semibold text-gray-900">
              Top Affiliates
            </h2>
          </div>
          {topAffiliates.length === 0 ? (
            <div className="flex h-48 items-center justify-center">
              <p className="text-sm text-gray-400">No affiliates yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {topAffiliates.map((aff, i) => (
                <div
                  key={aff.id}
                  className="flex items-center justify-between rounded-xl border border-gray-50 bg-gray-50/60 px-4 py-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                        i === 0
                          ? 'bg-amber-100 text-amber-700'
                          : i === 1
                            ? 'bg-gray-200 text-gray-700'
                            : i === 2
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      #{i + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-800">
                        {aff.name}
                      </p>
                      <p className="text-[11px] font-medium text-gray-400">
                        {aff.referral_code}
                      </p>
                    </div>
                  </div>
                  <span className="text-[13px] font-bold text-gray-900">
                    ₹{Number(aff.total_earned || 0).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Conversions */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:col-span-3">
          <div className="mb-5 flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4 text-emerald-500" />
            <h2 className="text-[15px] font-semibold text-gray-900">
              Recent Conversions
            </h2>
          </div>
          {recentConversions.length === 0 ? (
            <div className="flex h-48 items-center justify-center">
              <p className="text-sm text-gray-400">No conversions yet</p>
            </div>
          ) : (
            <div className="-mx-2 overflow-x-auto px-2">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-left font-medium text-gray-400">
                      Customer
                    </th>
                    <th className="pb-3 text-left font-medium text-gray-400">
                      Affiliate
                    </th>
                    <th className="pb-3 text-left font-medium text-gray-400">
                      Package
                    </th>
                    <th className="pb-3 text-right font-medium text-gray-400">
                      Commission
                    </th>
                    <th className="pb-3 text-right font-medium text-gray-400">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentConversions.map((conv) => (
                    <tr key={conv.id} className="group">
                      <td className="py-3 pr-4">
                        <p className="font-medium text-gray-800">
                          {conv.customer_name || '—'}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          {conv.customer_phone || ''}
                        </p>
                      </td>
                      <td className="py-3 pr-4">
                        <span className="rounded-md bg-gray-50 px-2 py-0.5 text-[12px] font-mono font-medium text-gray-600">
                          {conv.referral_code}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-gray-600">
                        {conv.package_name || '—'}
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-900">
                        ₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 text-right">
                        <StatusBadge status={conv.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: 'bg-amber-50 text-amber-700 ring-amber-200',
    confirmed: 'bg-blue-50 text-blue-700 ring-blue-200',
    paid: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    rejected: 'bg-red-50 text-red-600 ring-red-200',
  }

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize ring-1 ring-inset ${
        styles[status] || styles.pending
      }`}
    >
      {status}
    </span>
  )
}
