-- 유니태크 실제 제품 데이터 입력
-- Supabase SQL 에디터에서 실행

INSERT INTO products (
  product_id, name, category, main_image, images, index_description, description, 
  details, specifications, temperature_range, humidity_range, capacity, standards, download_url
) VALUES 

-- 1. 대형 챔버 시스템
('large-chamber', '대형 챔버 시스템', 'chamber', 
 '/images/products/large-chamber-1.webp',
 ARRAY['/images/products/large-chamber-1.webp', '/images/products/large-chamber-2.webp'],
 '대형 건축 내장재, 가구, 가전제품 등 대형 시험체의 VOC 및 포름알데히드 분석 솔루션',
 '내부 챔버와 외부 챔버 사이에 공조를 통해 온도와 습도를 이상적으로 관리합니다.',
 ARRAY['용량 : 26 m³ (요청에 따라 맞춤형 챔버 제공)', '온도 범위 : 15 ~ 40 °C', '습도 범위 : 30 ~ 80 % RH', 'ISO/IEC 28360, KS I 2007 등 규격 대응'],
 '[
   {"label": "내부 크기", "value": "4,000 x 3,500 x 2,800 mm(요청에 따라 변경 가능)"},
   {"label": "온도 정밀도", "value": "± 0.5 °C"},
   {"label": "습도 정밀도", "value": "± 3 %RH"},
   {"label": "Back Ground 농도", "value": "TVOC : 20㎍/m3 미만<br>HCHO : 6㎍/m3 미만"}
 ]'::jsonb,
 '15 ~ 40 °C', '30 ~ 80 % RH', '26 m³',
 ARRAY['ISO/IEC 28360', 'KS I 2007'],
 '/downloads/large-chamber-catalog.pdf'),

-- 2. 소형 챔버 시스템
('small-chamber', '소형 챔버 시스템', 'chamber',
 '/images/products/small-chamber-1.webp',
 ARRAY['/images/products/small-chamber-1.webp', '/images/products/small-chamber-2.webp'],
 '건축자재 및 가구 VOC/포름알데히드 포집장치',
 '각 유닛간 유기적 연결을 통해 온도차로 인한 결로를 방지하며 설치가 용이합니다.',
 ARRAY['챔버수 : 9ch (요청에 따라 맞춤형 제공)', 'KS M 1988-2 / ISO 16000-9 대응'],
 '[
   {"label": "항온조 크기", "value": "1,200 x 1,400 x 500 mm(요청에 따라 변경 가능)"},
   {"label": "온도 범위", "value": "15 ~ 30 °C(주기동온도 25°C) ± 1 °C"},
   {"label": "온도 정밀도", "value": "± 0.2 °C"},
   {"label": "Back Ground 농도", "value": "TVOC : 20㎍/m3 미만<br>HCHO : 6㎍/m3 미만"}
 ]'::jsonb,
 '15 ~ 30 °C', NULL, '9ch',
 ARRAY['KS M 1988-2', 'ISO 16000-9'],
 '/downloads/small-chamber-catalog.pdf'),

-- 3. 고온 건조기
('dryer', '고온 건조기', 'equipment',
 '/images/products/dryer-1.jpg',
 ARRAY['/images/products/dryer-1.jpg', '/images/products/dryer-2.jpg'],
 '고정밀도의 온도 조절·분포',
 '온도 제어와 분포가 우수하며, 공간 절약형 디자인으로 효율성을 높였습니다.',
 ARRAY['고정밀도의 온도 조절·분포', '운전은 단지 스타트키를 누름만으로'],
 '[]'::jsonb,
 NULL, NULL, NULL,
 ARRAY[]::text[],
 NULL),

-- 4. 샘플링펌프
('sampling-pump', '샘플링펌프', 'equipment',
 '/images/products/sampling_2ch.gif',
 ARRAY['/images/products/sampling_2ch.gif', '/images/products/sampling_2ch-2.gif'],
 '각종 시험에서의 공기 포집 최고의 솔루션',
 '디지털 유량계를 채용하여 설정 값의 ±3% 이내로 정밀한 유량 조절이 가능합니다. 적산 유량 제어 기능이 있어 유량을 정확하게 관리할 수 있으며, 타이머를 통한 유량 제어와 무인 가동이 가능하여 효율적이고 편리하게 사용할 수 있습니다',
 ARRAY['채널수 : 2ch(요청에 따라 채널 변경 가능)'],
 '[
   {"label": "디지털 유량계 채용", "value": "설정치 ± 3 %이내 정밀 유량조절"},
   {"label": "적산유량 제어", "value": "무인 가동 가능"},
   {"label": "타이머 유량 제어", "value": "무인 가동 가능"}
 ]'::jsonb,
 NULL, NULL, '2ch',
 ARRAY[]::text[],
 '/downloads/Sampling-pump2ch.pdf'),

-- 5. 토양해양생분해 챔버시스템
('biodegradation', '토양해양생분해 챔버시스템', 'testing',
 '/images/products/equipment_ochang.webp',
 ARRAY['/images/products/equipment_ochang.webp', '/images/products/installations5-2.jpg'],
 '',
 '',
 ARRAY['채널수 : 요청에 따라 채널 변경 가능'],
 '[]'::jsonb,
 NULL, NULL, NULL,
 ARRAY[]::text[],
 NULL),

-- 6. 멸균기(Auto Clave)
('autoclave', '멸균기(Auto Clave)', 'equipment',
 '/images/products/ALP_CLM40l.png',
 ARRAY['/images/products/ALP_CLM40l.png', '/images/products/ALP_CLM40l-4.png'],
 '대형 건축 내장재, 가구, 가전제품 등 대형 시험체의 VOC 및 포름알데히드 분석 솔루션',
 '멸균기(AUTOCLAVE) 시리즈',
 ARRAY['ONE TOUCH LOCK', '덮개 - INTER LOCK 시스템', '진행상황을 한눈에 알 수 있는 프로세스 디스플레이', '공기 탈취 TIMED - FREE STEAMING', '끓어 넘침 방지를 위한 자동 배기 제어 기능', '배양기 보온/배양기 용해기능'],
 '[
   {"label": "형식", "value": "CLS-40S"},
   {"label": "온도범위", "value": "멸균 : 100 ~ 137 ℃"},
   {"label": "용적", "value": "MM60L"}
 ]'::jsonb,
 '100 ~ 137 ℃', NULL, 'MM60L',
 ARRAY[]::text[],
 NULL);