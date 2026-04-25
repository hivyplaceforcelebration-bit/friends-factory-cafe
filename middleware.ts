import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

function getJwtSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET!)
}

async function isValidToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getJwtSecret())
    return true
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Capture referral code from any page URL
  const refCode = request.nextUrl.searchParams.get('ref')
  if (refCode && /^[a-zA-Z0-9_-]{2,30}$/.test(refCode)) {
    response.cookies.set('ffc_ref', refCode.toLowerCase(), {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      sameSite: 'lax',
    })
  }

  // Admin routes protection (skip login page)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('admin_token')?.value
    if (!token || !(await isValidToken(token))) {
      const loginUrl = new URL('/admin/login', request.url)
      const redirectResponse = NextResponse.redirect(loginUrl)
      if (token) redirectResponse.cookies.delete('admin_token')
      return redirectResponse
    }
  }

  // Affiliate routes protection (skip login page)
  if (pathname.startsWith('/affiliate') && !pathname.startsWith('/affiliate/login')) {
    const token = request.cookies.get('affiliate_token')?.value
    if (!token || !(await isValidToken(token))) {
      const loginUrl = new URL('/affiliate/login', request.url)
      const redirectResponse = NextResponse.redirect(loginUrl)
      if (token) redirectResponse.cookies.delete('affiliate_token')
      return redirectResponse
    }
  }

  return response
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/affiliate/:path*',
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}
