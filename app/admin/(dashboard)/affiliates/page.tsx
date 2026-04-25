'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  Search,
  MoreVertical,
  Eye,
  Pencil,
  Power,
  Trash2,
  QrCode,
  Copy,
  Check,
  Building2,
} from 'lucide-react'
import type { Affiliate } from '@/lib/supabase/types'

export default function AffiliatesPage() {
  const [affiliates, setAffiliates] = useState<Affiliate[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [actionMenu, setActionMenu] = useState<string | null>(null)
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 })

  const openMenu = (id: string, e: React.MouseEvent) => {
    if (actionMenu === id) { setActionMenu(null); return }
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setMenuPos({ top: rect.bottom + 4, left: rect.right - 180 })
    setActionMenu(id)
  }

  const loadAffiliates = async () => {
    const res = await fetch('/api/affiliates')
    if (res.ok) setAffiliates(await res.json())
    setLoading(false)
  }

  useEffect(() => { loadAffiliates() }, [])

  const filtered = affiliates.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.email.toLowerCase().includes(search.toLowerCase()) ||
    a.referral_code.toLowerCase().includes(search.toLowerCase())
  )

  const copyLink = (code: string, id: string) => {
    navigator.clipboard.writeText(`https://friendsfactorycafe.com?ref=${code}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const toggleActive = async (id: string, currentStatus: boolean) => {
    const res = await fetch(`/api/affiliates/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !currentStatus }),
    })
    if (res.ok) loadAffiliates()
    setActionMenu(null)
  }

  const deleteAffiliate = async (id: string) => {
    if (!confirm('Are you sure? This will delete all referral data for this affiliate.')) return
    const res = await fetch(`/api/affiliates/${id}`, { method: 'DELETE' })
    if (res.ok) loadAffiliates()
    setActionMenu(null)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-gray-200 border-t-amber-500" />
          <p style={{ fontSize: 14, color: '#9ca3af' }}>Loading affiliates…</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>Affiliates</h1>
          <p style={{ fontSize: 15, color: '#6b7280', marginTop: 4 }}>
            Manage your referral partners · {affiliates.length} total
          </p>
        </div>
        <Link
          href="/admin/affiliates/new"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#111827', color: '#fff',
            padding: '12px 22px', borderRadius: 12,
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          }}
        >
          <Plus style={{ width: 16, height: 16 }} />
          Add Affiliate
        </Link>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 420 }}>
        <Search style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: '#9ca3af' }} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by firm name, email, or code…"
          style={{
            width: '100%', borderRadius: 12,
            border: '1px solid #e5e7eb', backgroundColor: '#fff',
            padding: '12px 16px 12px 42px', fontSize: 14, color: '#111827', outline: 'none',
          }}
        />
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          borderRadius: 16, border: '1px solid #f3f4f6', backgroundColor: '#fff',
          padding: '80px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <div style={{ backgroundColor: '#f9fafb', padding: 16, borderRadius: 12 }}>
            <Building2 style={{ width: 32, height: 32, color: '#d1d5db' }} />
          </div>
          <h3 style={{ marginTop: 16, fontSize: 16, fontWeight: 700, color: '#1f2937' }}>No affiliates found</h3>
          <p style={{ marginTop: 6, fontSize: 14, color: '#9ca3af' }}>
            {search ? 'Try a different search term' : 'Add your first affiliate to get started'}
          </p>
        </div>
      ) : (
        <div style={{
          borderRadius: 16, border: '1px solid #f3f4f6', backgroundColor: '#fff',
          overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f3f4f6', backgroundColor: '#fafbfc' }}>
                  {['Firm Name','Code','Commission','Clicks','Conversions','Earned','Status','Actions'].map((h,i) => (
                    <th key={h} style={{
                      padding: '14px 20px', fontWeight: 500, color: '#6b7280', fontSize: 13,
                      textAlign: i === 0 || i === 1 ? 'left' : i === 5 || i === 7 ? 'right' : 'center',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((aff, i) => (
                  <tr key={aff.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #f9fafb' : 'none' }}>
                    <td style={{ padding: '14px 20px' }}>
                      <p style={{ fontWeight: 600, color: '#1f2937', fontSize: 14 }}>{aff.name}</p>
                      <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{aff.email}</p>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <code style={{
                          backgroundColor: '#f3f4f6', padding: '3px 8px', borderRadius: 6,
                          fontFamily: 'monospace', fontSize: 12, fontWeight: 500, color: '#4b5563',
                        }}>{aff.referral_code}</code>
                        <button onClick={() => copyLink(aff.referral_code, aff.id)}
                          style={{ padding: 4, borderRadius: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }} title="Copy referral link">
                          {copiedId === aff.id ? <Check style={{ width: 14, height: 14, color: '#10b981' }} /> : <Copy style={{ width: 14, height: 14 }} />}
                        </button>
                        <a href={`/api/qrcode/${aff.referral_code}`} target="_blank" style={{ padding: 4, borderRadius: 6, color: '#9ca3af' }} title="View QR Code">
                          <QrCode style={{ width: 14, height: 14 }} />
                        </a>
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 500, color: '#374151' }}>{Number(aff.commission_rate)}%</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: '#4b5563' }}>{(aff.total_clicks || 0).toLocaleString('en-IN')}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: '#4b5563' }}>{aff.total_conversions || 0}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'right', fontWeight: 700, color: '#111827' }}>₹{Number(aff.total_earned || 0).toLocaleString('en-IN')}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-flex', padding: '3px 10px', borderRadius: 999,
                        fontSize: 12, fontWeight: 600,
                        backgroundColor: aff.is_active ? '#ecfdf5' : '#fef2f2',
                        color: aff.is_active ? '#059669' : '#dc2626',
                        border: `1px solid ${aff.is_active ? '#a7f3d0' : '#fecaca'}`,
                      }}>{aff.is_active ? 'Active' : 'Inactive'}</span>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                      <button onClick={(e) => openMenu(aff.id, e)}
                        style={{ padding: 6, borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                        <MoreVertical style={{ width: 16, height: 16 }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Action menu popup — fixed position so it escapes overflow containers */}
      {actionMenu && (() => {
        const aff = affiliates.find(a => a.id === actionMenu)
        if (!aff) return null
        return (
          <>
            <div onClick={() => setActionMenu(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000 }} />
            <div style={{
              position: 'fixed', top: menuPos.top, left: menuPos.left, zIndex: 1001,
              width: 180, borderRadius: 12,
              border: '1px solid #e5e7eb', backgroundColor: '#fff',
              padding: '6px 0', boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
            }}>
              <Link href={`/admin/affiliates/${aff.id}`} onClick={() => setActionMenu(null)}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', fontSize: 13, color: '#4b5563', textDecoration: 'none' }}>
                <Eye style={{ width: 14, height: 14 }} /> View Details
              </Link>
              <Link href={`/admin/affiliates/${aff.id}?edit=true`} onClick={() => setActionMenu(null)}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', fontSize: 13, color: '#4b5563', textDecoration: 'none' }}>
                <Pencil style={{ width: 14, height: 14 }} /> Edit
              </Link>
              <button onClick={() => toggleActive(aff.id, aff.is_active)}
                style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 10, padding: '10px 14px', fontSize: 13, color: '#4b5563', background: 'none', border: 'none', cursor: 'pointer' }}>
                <Power style={{ width: 14, height: 14 }} /> {aff.is_active ? 'Deactivate' : 'Activate'}
              </button>
              <div style={{ height: 1, backgroundColor: '#f3f4f6', margin: '4px 0' }} />
              <button onClick={() => deleteAffiliate(aff.id)}
                style={{ display: 'flex', width: '100%', alignItems: 'center', gap: 10, padding: '10px 14px', fontSize: 13, color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                <Trash2 style={{ width: 14, height: 14 }} /> Delete
              </button>
            </div>
          </>
        )
      })()}
    </div>
  )
}
