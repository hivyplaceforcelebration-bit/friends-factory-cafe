'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, UserPlus, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function NewAffiliatePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    referral_code: '',
    commission_rate: 10,
  })

  const generateCode = () => {
    const base = form.name
      ? form.name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8)
      : 'ff'
    const suffix = Math.random().toString(36).substring(2, 6)
    setForm((prev) => ({ ...prev, referral_code: `${base}-${suffix}` }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/affiliates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to create affiliate')
        return
      }

      router.push('/admin/affiliates')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/affiliates"
          className="rounded-lg border p-2 transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Affiliate</h1>
          <p className="mt-1 text-muted-foreground">
            Create a new referral partner
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
                placeholder="Rahul Sharma"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
                placeholder="rahul@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
                placeholder="9876543210"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password *</label>
              <input
                type="text"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
                placeholder="They'll use this to login"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Referral Code *</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={form.referral_code}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      referral_code: e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9_-]/g, ''),
                    })
                  }
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm font-mono outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
                  placeholder="rahul-xyz"
                  maxLength={30}
                />
                <button
                  type="button"
                  onClick={generateCode}
                  className="shrink-0 rounded-lg border px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  title="Auto-generate"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Link: friendsfactorycafe.com?ref=
                <span className="font-mono text-foreground">
                  {form.referral_code || '...'}
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Commission Rate (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={form.commission_rate}
                onChange={(e) =>
                  setForm({ ...form, commission_rate: Number(e.target.value) })
                }
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/25"
              />
              <p className="text-xs text-muted-foreground">
                Affiliate earns {form.commission_rate}% of each booking value
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-lg border bg-muted/50 p-4">
            <h3 className="mb-2 text-sm font-medium">Preview</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">{form.name || 'Name'}</span>{' '}
                will earn{' '}
                <span className="font-medium text-foreground">
                  {form.commission_rate}%
                </span>{' '}
                on every referred booking
              </p>
              <p>
                Referral link:{' '}
                <code className="rounded bg-background px-1.5 py-0.5 text-xs">
                  friendsfactorycafe.com?ref={form.referral_code || '...'}
                </code>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              ) : (
                <UserPlus className="h-4 w-4" />
              )}
              Create Affiliate
            </button>
            <Link
              href="/admin/affiliates"
              className="inline-flex items-center rounded-lg border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
