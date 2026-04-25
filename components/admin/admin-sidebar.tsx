'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Link2,
  Wallet,
  LogOut,
  Menu,
  X,
  Building2,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Affiliates', href: '/admin/affiliates', icon: Building2 },
  { label: 'Referrals', href: '/admin/referrals', icon: Link2 },
  { label: 'Payouts', href: '/admin/payouts', icon: Wallet },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    await fetch('/api/auth/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Top Bar — always visible */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#fff',
          padding: '0 16px',
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            borderRadius: 8,
            border: '1px solid #e5e7eb',
            padding: 6,
            background: 'none',
            cursor: 'pointer',
            color: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Menu style={{ width: 20, height: 20 }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            FF
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>
            Friends Factory Admin
          </span>
        </div>
      </div>

      {/* Drawer overlay + sidebar */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          />

          {/* Sidebar drawer */}
          <aside
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 50,
              width: 280,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#0f1117',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #fbbf24, #f97316)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  FF
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', margin: 0 }}>
                    Friends Factory
                  </p>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    Admin Panel
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  borderRadius: 8,
                  padding: 6,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <X style={{ width: 20, height: 20 }} />
              </button>
            </div>

            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

            {/* Nav */}
            <nav style={{ flex: 1, padding: '16px 12px' }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.25)',
                  textTransform: 'uppercase',
                  margin: '0 12px 12px',
                }}
              >
                Menu
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        borderRadius: 8,
                        padding: '10px 12px',
                        fontSize: 13,
                        fontWeight: active ? 600 : 500,
                        color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                        backgroundColor: active
                          ? 'rgba(255,255,255,0.08)'
                          : 'transparent',
                        textDecoration: 'none',
                      }}
                    >
                      <item.icon
                        style={{
                          width: 18,
                          height: 18,
                          color: active ? '#fbbf24' : 'inherit',
                        }}
                      />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Logout */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 12 }}>
              <button
                onClick={handleLogout}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  gap: 12,
                  borderRadius: 8,
                  padding: '10px 12px',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.35)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <LogOut style={{ width: 18, height: 18 }} />
                Sign Out
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
