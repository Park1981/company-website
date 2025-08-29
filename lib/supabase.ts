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
          phone?: string
          company?: string
          message: string
          inquiry_type: 'product' | 'quotation' | 'support' | 'general'
          status: 'new' | 'processing' | 'completed'
        }
        Insert: {
          id?: never
          created_at?: string
          name: string
          email: string
          phone?: string
          company?: string
          message: string
          inquiry_type?: 'product' | 'quotation' | 'support' | 'general'
          status?: 'new' | 'processing' | 'completed'
        }
        Update: {
          id?: never
          created_at?: string
          name?: string
          email?: string
          phone?: string
          company?: string
          message?: string
          inquiry_type?: 'product' | 'quotation' | 'support' | 'general'
          status?: 'new' | 'processing' | 'completed'
        }
      }
      products: {
        Row: {
          id: number
          created_at: string
          product_id: string
          name: string
          category: 'chamber' | 'equipment' | 'testing' | 'analysis'
          main_image: string
          images: string[]
          index_description: string
          description: string
          details: string[]
          specifications: {
            label: string
            value: string
          }[]
          temperature_range?: string
          humidity_range?: string
          capacity?: string
          standards: string[]
          download_url?: string
          is_active: boolean
        }
        Insert: {
          id?: never
          created_at?: string
          product_id: string
          name: string
          category: 'chamber' | 'equipment' | 'testing' | 'analysis'
          main_image: string
          images?: string[]
          index_description: string
          description: string
          details?: string[]
          specifications?: {
            label: string
            value: string
          }[]
          temperature_range?: string
          humidity_range?: string
          capacity?: string
          standards?: string[]
          download_url?: string
          is_active?: boolean
        }
        Update: {
          id?: never
          created_at?: string
          product_id?: string
          name?: string
          category?: 'chamber' | 'equipment' | 'testing' | 'analysis'
          main_image?: string
          images?: string[]
          index_description?: string
          description?: string
          details?: string[]
          specifications?: {
            label: string
            value: string
          }[]
          temperature_range?: string
          humidity_range?: string
          capacity?: string
          standards?: string[]
          download_url?: string
          is_active?: boolean
        }
      }
      installations: {
        Row: {
          id: number
          created_at: string
          client_name: string
          project_title: string
          location: string
          installation_date: string
          products_used: string[]
          description: string
          images: string[]
          is_featured: boolean
          is_active: boolean
        }
        Insert: {
          id?: never
          created_at?: string
          client_name: string
          project_title: string
          location: string
          installation_date: string
          products_used: string[]
          description: string
          images?: string[]
          is_featured?: boolean
          is_active?: boolean
        }
        Update: {
          id?: never
          created_at?: string
          client_name?: string
          project_title?: string
          location?: string
          installation_date?: string
          products_used?: string[]
          description?: string
          images?: string[]
          is_featured?: boolean
          is_active?: boolean
        }
      }
    }
  }
}