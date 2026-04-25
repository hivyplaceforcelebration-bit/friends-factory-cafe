'use client'

import { useEffect, useState } from 'react'
import {
  MousePointerClick,
  ArrowRightLeft,
  IndianRupee,
  Percent,
  Copy,
  Check,
  Download,
  Share2,
} from 'lucide-react'
import { StatsCard } from '@/components/admin/stats-card'

interface AffiliateData {
  id: string
  name: string
  referral_code: string
  commission_rate: number
  total_clicks: number
  total_conversions: number
  total_earned: number
  conversions: {
    id: string
    customer_name: string | null
    package_name: string | null
    commission_amount: number
    status: string
    created_at: string
  }[]
}

export default function AffiliateDashboardPage() {
  const [data, setData] = useState<AffiliateData | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function load() {
      // Get affiliate ID from session
      const sessionRes = await fetch('/api/auth/affiliate/session')
      if (!sessionRes.ok) {
        // Fallback: we'll get the data from the affiliates API via a special endpoint
        setLoading(false)
        return
      }
      const session = await sessionRes.json()
      if (session.id) {
        const res = await fetch(`/api/affiliates/${session.id}`)
        if (res.ok) setData(await res.json())
      }
      setLoading(false)
    }
    load().catch(() => setLoading(false))
  }, [])

  const siteUrl = 'https://friendsfactorycafe.com'
  const referralLink = data ? `${siteUrl}?ref=${data.referral_code}` : ''

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareWhatsApp = () => {
    const text = `Check out Friends Factory Cafe - The best celebration venue in Vadodara! Book your special moments here: ${referralLink}`
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank'
    )
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">Could not load dashboard data</p>
      </div>
    )
  }

  const conversionRate =
    data.total_clicks > 0
      ? ((data.total_conversions / data.total_clicks) * 100).toFixed(1)
      : '0'

  const pendingEarnings = (data.conversions || [])
    .filter((c) => c.status === 'confirmed')
    .reduce((s, c) => s + Number(c.commission_amount || 0), 0)

  const paidEarnings = (data.conversions || [])
    .filter((c) => c.status === 'paid')
    .reduce((s, c) => s + Number(c.commission_amount || 0), 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {data.name}!
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s how your referrals are performing
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Clicks"
          value={(data.total_clicks || 0).toLocaleString('en-IN')}
          icon={MousePointerClick}
        />
        <StatsCard
          title="Conversions"
          value={data.total_conversions || 0}
          subtitle={`${conversionRate}% rate`}
          icon={ArrowRightLeft}
        />
        <StatsCard
          title="Commission Rate"
          value={`${Number(data.commission_rate)}%`}
          icon={Percent}
        />
        <StatsCard
          title="Total Earned"
          value={`₹${Number(data.total_earned || 0).toLocaleString('en-IN')}`}
          icon={IndianRupee}
        />
      </div>

      {/* Referral Link + QR Code */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Link Section */}
        <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold">Your Referral Link</h2>
          <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3">
            <code className="flex-1 truncate text-sm">{referralLink}</code>
            <button
              onClick={copyLink}
              className="shrink-0 rounded-lg border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="h-3.5 w-3.5" /> Copied!
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="h-3.5 w-3.5" /> Copy
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={shareWhatsApp}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              <Share2 className="h-4 w-4" />
              Share on WhatsApp
            </button>
          </div>

          {/* Earnings Summary */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">Pending Payout</p>
              <p className="mt-1 text-2xl font-bold text-amber-600">
                ₹{pendingEarnings.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">Already Paid</p>
              <p className="mt-1 text-2xl font-bold text-emerald-600">
                ₹{paidEarnings.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 self-start text-lg font-semibold">Your QR Code</h2>
          <div className="overflow-hidden rounded-xl border bg-white p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/api/qrcode/${data.referral_code}`}
              alt="Your QR Code"
              width={200}
              height={200}
              className="h-[200px] w-[200px]"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Scan to open your referral link
          </p>
          <a
            href={`/api/qrcode/${data.referral_code}`}
            download={`qr-${data.referral_code}.png`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Download QR
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Recent Referrals</h2>
        {(!data.conversions || data.conversions.length === 0) ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No referrals yet. Share your link to start earning!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Package</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Commission</th>
                  <th className="pb-3 text-center font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.conversions.map((conv) => (
                  <tr key={conv.id}>
                    <td className="py-3 font-medium">{conv.customer_name || 'Customer'}</td>
                    <td className="py-3">{conv.package_name || 'N/A'}</td>
                    <td className="py-3 text-right font-medium">
                      ₹{Number(conv.commission_amount || 0).toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 text-center">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${
                          {
                            pending: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-600',
                            confirmed: 'border-blue-500/20 bg-blue-500/10 text-blue-600',
                            paid: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600',
                            rejected: 'border-red-500/20 bg-red-500/10 text-red-600',
                          }[conv.status] || ''
                        }`}
                      >
                        {conv.status}
                      </span>
                    </td>
                    <td className="py-3 text-right text-muted-foreground">
                      {new Date(conv.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
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
