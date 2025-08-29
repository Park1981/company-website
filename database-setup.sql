-- 유니태크 주식회사 데이터베이스 스키마
-- Supabase에서 실행할 SQL 스크립트

-- 1. 제품 테이블
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  product_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('chamber', 'equipment', 'testing', 'analysis')),
  main_image TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  index_description TEXT NOT NULL,
  description TEXT NOT NULL,
  details TEXT[] DEFAULT '{}',
  specifications JSONB DEFAULT '[]'::jsonb,
  temperature_range TEXT,
  humidity_range TEXT,
  capacity TEXT,
  standards TEXT[] DEFAULT '{}',
  download_url TEXT,
  is_active BOOLEAN DEFAULT true
);

-- 2. 설치사례 테이블
CREATE TABLE IF NOT EXISTS installations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  client_name TEXT NOT NULL,
  project_title TEXT NOT NULL,
  location TEXT NOT NULL,
  installation_date DATE NOT NULL,
  products_used TEXT[] DEFAULT '{}',
  description TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true
);

-- 3. 문의 테이블
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  inquiry_type TEXT DEFAULT 'general' CHECK (inquiry_type IN ('product', 'quotation', 'support', 'general')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'processing', 'completed'))
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_is_active_idx ON products(is_active);
CREATE INDEX IF NOT EXISTS installations_is_featured_idx ON installations(is_featured);
CREATE INDEX IF NOT EXISTS installations_is_active_idx ON installations(is_active);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts(status);
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);

-- Row Level Security (RLS) 설정
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE installations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 정책 (모든 사용자가 활성화된 데이터 읽기 가능)
CREATE POLICY IF NOT EXISTS "Enable read access for active products" ON products
  FOR SELECT USING (is_active = true);

CREATE POLICY IF NOT EXISTS "Enable read access for active installations" ON installations
  FOR SELECT USING (is_active = true);

-- 관리자만 쓰기 가능 (나중에 인증 시스템 구축 후 수정)
CREATE POLICY IF NOT EXISTS "Enable insert for authenticated users only" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Enable update for authenticated users only" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Enable insert for authenticated users only" ON installations
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Enable update for authenticated users only" ON installations
  FOR UPDATE USING (auth.role() = 'authenticated');

-- 문의는 누구나 등록 가능, 읽기는 인증된 사용자만
CREATE POLICY IF NOT EXISTS "Enable insert for all users" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Enable read for authenticated users only" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Enable update for authenticated users only" ON contacts
  FOR UPDATE USING (auth.role() = 'authenticated');