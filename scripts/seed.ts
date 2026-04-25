import { loadEnvConfig } from '@next/env'
import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

// Load environment variables from .env.local
loadEnvConfig(process.cwd())

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

async function seed() {
  console.log('🌱 Seeding database...\n')

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  // Create admin user
  const adminPassword = 'Madamji@5678'
  const adminHash = await bcrypt.hash(adminPassword, 12)

  const { data: admin, error: adminError } = await supabase
    .from('admins')
    .upsert(
      {
        email: 'friendsfactorycafe@gmail.com',
        password_hash: adminHash,
        name: 'Friends Factory Admin',
      },
      { onConflict: 'email' }
    )
    .select()
    .single()

  if (adminError) {
    console.error('❌ Error creating admin:', adminError.message)
    process.exit(1)
  }

  console.log('✅ Admin created:', admin.email)
  console.log(`   Password: ${adminPassword}`)
  console.log(`   Login at: /admin/login\n`)

  console.log('🎉 Seed complete!')
}

seed().catch(console.error)
