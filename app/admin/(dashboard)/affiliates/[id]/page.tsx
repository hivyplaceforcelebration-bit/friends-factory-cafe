'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  QrCode,
  MousePointerClick,
  ArrowRightLeft,
  IndianRupee,
  Save,
  Percent,
} from 'lucide-react'
import { StatsCard } from '@/components/admin/stats-card'
import type { Affiliate, ReferralConversion } from '@/lib/supabase/types'

interface AffiliateDetail extends Affiliate {
  conversions: ReferralConversion[]
  recent_clicks: { created_at: string }[]
}

export default function AffiliateDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = params.id as string
  const isEditMode = searchParams.get('edit') === 'true'

  const [affiliate, setAffiliate] = useState<AffiliateDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [editing, setEditing] = useState(isEditMode)
  const [saving, setSaving] = useState(false)
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    phone: '',
    commission_rate: 10,
    password: '',
  })

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/affiliates/${id}`)
      if (res.ok) {
        const data = await res.json()
        setAffiliate(data)
        setEditForm({
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          commission_rate: Number(data.commission_rate),
          password: '',
        })
      }
      setLoading(false)
    }
    load()
  }, [id])

  const copyLink = () => {
    if (!affiliate) return
    navigator.clipboard.writeText(
      `https://friendsfactorycafe.com?ref=${affiliate.referral_code}`
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = async () => {
    setSaving(true)
    const body: Record<string, unknown> = {
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone,
      commission_rate: editForm.commission_rate,
    }
    if (editForm.password) body.password = editForm.password

    const res = await fetch(`/api/affiliates/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      const data = await res.json()
      setAffiliate((prev) => (prev ? { ...prev, ...data } : prev))
      setEditing(false)
      router.replace(`/admin/affiliates/${id}`)
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
      </div>
    )
  }

  if (!affiliate) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-semibold">Affiliate not found</h2>
        <Link href="/admin/affiliates" className="mt-4 text-primary hover:underline">
          Back to affiliates
        </Link>
      </div>
    )
  }

  const conversionRate =
    affiliate.total_clicks > 0
      ? ((affiliate.total_conversions / affiliate.total_clicks) * 100).toFixed(1)
      : '0'

  const siteUrl = 'https://friendsfactorycafe.com'
  const referralLink = `${siteUrl}?ref=${affiliate.referral_code}`

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/affiliates"
            className="rounded-lg border p-2 transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {affiliate.name}
              </h1>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  affiliate.is_active
                    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600'
                    : 'border-red-500/20 bg-red-500/10 text-red-600'
                }`}
              >
                {affiliate.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="mt-1 text-muted-foreground">{affiliate.email}</p>
          </div>
        </div>
        <button
          onClick={() => setEditing(!editing)}
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {/* Edit Form */}
      {editing && (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Edit Affiliate</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={editForm.phone}
                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Commission Rate (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={editForm.commission_rate}
                onChange={(e) =>
                  setEditForm({ ...editForm, commission_rate: Number(e.target.value) })
                }
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium">
                New Password{' '}
                <span className="text-muted-foreground">(leave empty to keep current)</span>
              </label>
              <input
                type="text"
                value={editForm.password}
                onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/25"
                placeholder="New password..."
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Changes
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Clicks"
          value={(affiliate.total_clicks || 0).toLocaleString('en-IN')}
          subtitle={`${affiliate.recent_clicks?.length || 0} in last 30 days`}
          icon={MousePointerClick}
        />
        <StatsCard
          title="Conversions"
          value={affiliate.total_conversions || 0}
          subtitle={`${conversionRate}% conversion rate`}
          icon={ArrowRightLeft}
        />
        <StatsCard
          title="Commission Rate"
          value={`${Number(affiliate.commission_rate)}%`}
          icon={Percent}
        />
        <StatsCard
          title="Total Earned"
          value={`₹${Number(affiliate.total_earned || 0).toLocaleString('en-IN')}`}
          icon={IndianRupee}
        />
      </div>

      {/* Referral Link + QR */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Referral Link</h2>
          <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3">
            <code className="flex-1 truncate text-sm">{referralLink}</code>
            <button
              onClick={copyLink}
              className="shrink-0 rounded-lg border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="h-3.5 w-3.5" /> Copied
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="h-3.5 w-3.5" /> Copy
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">QR Code</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-xl border bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/qrcode/${affiliate.referral_code}`}
                alt="QR Code"
                width={180}
                height={180}
                className="h-[180px] w-[180px]"
              />
            </div>
            <a
              href={`/api/qrcode/${affiliate.referral_code}`}
              download={`qr-${affiliate.referral_code}.png`}
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" />
              Download PNG
            </a>
          </div>
        </div>
      </div>

      {/* Conversions Table */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Conversion History</h2>
        {(!affiliate.conversions || affiliate.conversions.length === 0) ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            No conversions recorded yet
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left font-medium text-muted-foreground">Package</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Price</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Commission</th>
                  <th className="pb-3 text-center font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-right font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {affiliate.conversions.map((conv) => (
                  <tr key={conv.id}>
                    <td className="py-3">
                      <p className="font-medium">{conv.customer_name || 'N/A'}</p>
                      <p className="text-xs text-muted-foreground">
                        {conv.customer_phone || ''}
                      </p>
                    </td>
                    <td className="py-3">{conv.package_name || 'N/A'}</td>
                    <td className="py-3 text-right">
                      {conv.package_price
                        ? `₹${Number(conv.package_price).toLocaleString('en-IN')}`
                        : '-'}
                    </td>
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
                        year: 'numeric',
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
