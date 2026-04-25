import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { Poppins } from 'next/font/google'
import { AffiliateSidebar } from '@/components/affiliate/affiliate-sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

async function getAffiliateName() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('affiliate_token')?.value
    if (!token) return undefined
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)
    return (payload as { name?: string }).name
  } catch {
    return undefined
  }
}

export default async function AffiliateDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const name = await getAffiliateName()

  return (
    <div className={poppins.className} style={{ minHeight: '100vh', backgroundColor: '#f8f9fb' }}>
      <AffiliateSidebar name={name} />
      <main style={{ paddingTop: 56 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 24px' }}>
          {children}
        </div>
      </main>
    </div>
  )
}
