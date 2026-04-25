import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

const getJwtSecret = () => new TextEncoder().encode(process.env.JWT_SECRET!)

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function createToken(payload: {
  id: string
  email: string
  role: 'admin' | 'affiliate'
  name?: string
}): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getJwtSecret())
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret())
    return payload as {
      id: string
      email: string
      role: 'admin' | 'affiliate'
      name?: string
    }
  } catch {
    return null
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (!token) return null
  const session = await verifyToken(token)
  if (!session || session.role !== 'admin') return null
  return session
}

export async function getAffiliateSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('affiliate_token')?.value
  if (!token) return null
  const session = await verifyToken(token)
  if (!session || session.role !== 'affiliate') return null
  return session
}
