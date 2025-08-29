-- RLS 정책 설정 (테이블 생성 후 별도 실행)
-- Supabase에서 실행할 보안 정책

-- Row Level Security (RLS) 활성화
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE installations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 제품 읽기 정책 (모든 사용자가 활성화된 제품 읽기 가능)
CREATE POLICY "Enable read access for active products" ON products
  FOR SELECT USING (is_active = true);

-- 설치사례 읽기 정책 (모든 사용자가 활성화된 설치사례 읽기 가능)
CREATE POLICY "Enable read access for active installations" ON installations
  FOR SELECT USING (is_active = true);

-- 문의 등록 정책 (누구나 문의 등록 가능)
CREATE POLICY "Enable insert for all users" ON contacts
  FOR INSERT WITH CHECK (true);

-- 관리자 정책은 나중에 인증 시스템 구축 후 추가예정