export interface Admin {
  id: string
  email: string
  password_hash: string
  name: string
  created_at: string
}

export interface Affiliate {
  id: string
  name: string
  email: string
  phone: string | null
  password_hash: string
  referral_code: string
  commission_rate: number
  is_active: boolean
  total_clicks: number
  total_conversions: number
  total_earned: number
  created_at: string
  updated_at: string
}

export interface ReferralClick {
  id: string
  affiliate_id: string
  referral_code: string
  ip_address: string | null
  user_agent: string | null
  page_url: string | null
  created_at: string
}

export interface ReferralConversion {
  id: string
  affiliate_id: string
  referral_code: string
  customer_name: string | null
  customer_phone: string | null
  package_name: string | null
  package_price: number | null
  commission_rate: number
  commission_amount: number
  status: 'pending' | 'confirmed' | 'paid' | 'rejected'
  notes: string | null
  created_at: string
  paid_at: string | null
}
