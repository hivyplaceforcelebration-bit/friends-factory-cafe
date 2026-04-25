import { Poppins } from 'next/font/google'
import { AdminSidebar } from '@/components/admin/admin-sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={poppins.className} style={{ minHeight: '100vh', backgroundColor: '#f8f9fb' }}>
      <AdminSidebar />
      <main style={{ paddingTop: 56 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 24px' }}>
          {children}
        </div>
      </main>
    </div>
  )
}
