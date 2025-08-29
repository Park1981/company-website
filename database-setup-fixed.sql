-- 유니태크 주식회사 데이터베이스 스키마 (수정버전)
-- Supabase에서 실행할 SQL 스크립트

-- 1. 제품 테이블
CREATE TABLE products (
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
CREATE TABLE installations (
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
CREATE TABLE contacts (
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
CREATE INDEX products_category_idx ON products(category);
CREATE INDEX products_is_active_idx ON products(is_active);
CREATE INDEX installations_is_featured_idx ON installations(is_featured);
CREATE INDEX installations_is_active_idx ON installations(is_active);
CREATE INDEX contacts_status_idx ON contacts(status);
CREATE INDEX contacts_created_at_idx ON contacts(created_at DESC);