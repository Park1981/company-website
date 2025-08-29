import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: number
          created_at: string
          name: string
          email: string
          message: string
          status: 'new' | 'processing' | 'completed'
        }
        Insert: {
          id?: never
          created_at?: string
          name: string
          email: string
          message: string
          status?: 'new' | 'processing' | 'completed'
        }
        Update: {
          id?: never
          created_at?: string
          name?: string
          email?: string
          message?: string
          status?: 'new' | 'processing' | 'completed'
        }
      }
      products: {
        Row: {
          id: number
          created_at: string
          name: string
          description: string
          category: string
          price: number | null
          image_url: string | null
          is_active: boolean
        }
        Insert: {
          id?: never
          created_at?: string
          name: string
          description: string
          category: string
          price?: number | null
          image_url?: string | null
          is_active?: boolean
        }
        Update: {
          id?: never
          created_at?: string
          name?: string
          description?: string
          category?: string
          price?: number | null
          image_url?: string | null
          is_active?: boolean
        }
      }
    }
  }
}