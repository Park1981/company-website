-- 유니태크 실제 설치사례 데이터 입력
-- Supabase SQL 에디터에서 실행

INSERT INTO installations (
  client_name, project_title, location, installation_date, products_used, description, images, is_featured
) VALUES 

-- 1. 2024.10 - 대형 챔버 시스템
('연구기관', '건축자재 방출량 측정용 대형챔버 구축', '서울/경기 지역', 
 '2024-10-01', 
 ARRAY['large-chamber'], 
 '대형(24m³) 챔버 시스템을 활용한 건축자재 방출량 측정 시설 구축', 
 ARRAY['/images/installations/installations1.webp'], 
 true),

-- 2. 2024.05 - 토양해양생분해 챔버시스템 오창
('환경연구기관', '토양해양생분해 챔버 시스템 구축', '충북 오창', 
 '2024-05-01', 
 ARRAY['biodegradation'], 
 '토양해양생분해 챔버시스템(48ch) 구축으로 환경친화적 소재의 생분해 특성 평가 시설 완성', 
 ARRAY['/images/installations/installations5.jpg', '/images/installations/installations5-2.jpg', '/images/installations/installations5-3.jpg'], 
 true),

-- 3. 2023.05 - 대형 챔버 시스템 동탄
('시험인증기관', '건축자재 방출량 측정용 대형챔버 구축', '경기 동탄', 
 '2023-05-01', 
 ARRAY['large-chamber'], 
 '대형(26m³) 챔버 시스템을 통한 종합적인 건축자재 시험 환경 구축', 
 ARRAY['/images/installations/installations4.jpg', '/images/installations/installations4-2.webp', '/images/installations/installations4-3.jpg'], 
 true),

-- 4. 2022.11 - 소형 챔버 시스템 서울
('연구기관', '건축자재 소형 시료 방출량 측정 시설 구축', '서울', 
 '2022-11-01', 
 ARRAY['small-chamber'], 
 '소형 챔버 시스템(9ch)을 활용한 건축자재 및 기타 소형 시료의 방출량 측정 시설', 
 ARRAY['/images/installations/installations8.jpg', '/images/installations/installations8-2.jpg'], 
 false),

-- 5. 2022.09 - 소형 챔버 시스템 마곡
('시험기관', '소형 시료 방출량 측정용 챔버 구축', '서울 마곡', 
 '2022-09-01', 
 ARRAY['small-chamber'], 
 '건축자재 및 기타 소형 시료의 자체 방출량 측정을 위한 소형챔버 시스템(9ch) 구축', 
 ARRAY['/images/installations/installations2.webp', '/images/installations/installations2-2.webp'], 
 false),

-- 6. 2022.04 - 소형 챔버 시스템 군포
('연구기관', '소형 시료 VOC 분석 시설 구축', '경기 군포', 
 '2022-04-01', 
 ARRAY['small-chamber'], 
 '건축자재 및 각종 소형 시료의 VOC 방출량 측정을 위한 소형챔버(9ch) 설치', 
 ARRAY['/images/installations/installations7.jpg', '/images/installations/installations7-2.jpg'], 
 false),

-- 7. 2021.05 - 대형 챔버 시스템 세종
('정부기관', '대용량 건축자재 시험 시설 구축', '세종시', 
 '2021-05-01', 
 ARRAY['large-chamber'], 
 '대형(40m³) 챔버 시스템을 통한 대용량 건축자재의 방출량 측정 전용 시설 구축', 
 ARRAY['/images/installations/installations3.webp', '/images/installations/installations3-2.jpg', '/images/installations/installations3-3.jpg'], 
 true);