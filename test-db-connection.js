// Supabase 연결 테스트 및 데이터 입력
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// 환경 변수 로드
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('API Key exists:', !!supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)

// 1. 연결 테스트
async function testConnection() {
  console.log('\n🔗 Supabase 연결 테스트...')
  
  try {
    const { data, error } = await supabase
      .from('products')
      .select('count', { count: 'exact', head: true })
    
    if (error) {
      console.error('❌ 연결 실패:', error.message)
      return false
    }
    
    console.log('✅ 연결 성공! 현재 제품 수:', data.length)
    return true
  } catch (err) {
    console.error('❌ 연결 오류:', err.message)
    return false
  }
}

// 2. 기존 데이터 삭제
async function clearData() {
  console.log('\n🗑️ 기존 데이터 삭제...')
  
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .neq('id', 0) // 모든 행 삭제
    
    if (error) {
      console.error('❌ 삭제 실패:', error.message)
      return false
    }
    
    console.log('✅ 기존 데이터 삭제 완료')
    return true
  } catch (err) {
    console.error('❌ 삭제 오류:', err.message)
    return false
  }
}

// 3. 제품 데이터 입력
async function insertProducts() {
  console.log('\n📦 제품 데이터 입력...')
  
  const products = [
    {
      product_id: 'large-chamber',
      name: '대형 챔버 시스템',
      category: 'chamber',
      main_image: '/images/products/large-chamber-1.webp',
      images: ['/images/products/large-chamber-1.webp', '/images/products/large-chamber-2.webp'],
      index_description: '대형 건축 내장재, 가구, 가전제품 등 대형 시험체의 VOC 및 포름알데히드 분석 솔루션',
      description: '내부 챔버와 외부 챔버 사이에 공조를 통해 온도와 습도를 이상적으로 관리합니다.',
      details: ['용량 : 26 m³ (요청에 따라 맞춤형 챔버 제공)', '온도 범위 : 15 ~ 40 °C', '습도 범위 : 30 ~ 80 % RH', 'ISO/IEC 28360, KS I 2007 등 규격 대응'],
      specifications: [
        {"label": "내부 크기", "value": "4,000 x 3,500 x 2,800 mm(요청에 따라 변경 가능)"},
        {"label": "온도 정밀도", "value": "± 0.5 °C"},
        {"label": "습도 정밀도", "value": "± 3 %RH"},
        {"label": "Back Ground 농도", "value": "TVOC : 20㎍/m3 미만, HCHO : 6㎍/m3 미만"}
      ],
      temperature_range: '15 ~ 40 °C',
      humidity_range: '30 ~ 80 % RH',
      capacity: '26 m³',
      standards: ['ISO/IEC 28360', 'KS I 2007'],
      download_url: '/downloads/large-chamber-catalog.pdf'
    },
    {
      product_id: 'small-chamber',
      name: '소형 챔버 시스템',
      category: 'chamber',
      main_image: '/images/products/small-chamber-1.webp',
      images: ['/images/products/small-chamber-1.webp', '/images/products/small-chamber-2.webp'],
      index_description: '건축자재 및 가구 VOC/포름알데히드 포집장치',
      description: '각 유닛간 유기적 연결을 통해 온도차로 인한 결로를 방지하며 설치가 용이합니다.',
      details: ['챔버수 : 9ch (요청에 따라 맞춤형 제공)', 'KS M 1988-2 / ISO 16000-9 대응'],
      specifications: [
        {"label": "항온조 크기", "value": "1,200 x 1,400 x 500 mm(요청에 따라 변경 가능)"},
        {"label": "온도 범위", "value": "15 ~ 30 °C(주기동온도 25°C) ± 1 °C"},
        {"label": "온도 정밀도", "value": "± 0.2 °C"},
        {"label": "Back Ground 농도", "value": "TVOC : 20㎍/m3 미만, HCHO : 6㎍/m3 미만"}
      ],
      temperature_range: '15 ~ 30 °C',
      humidity_range: null,
      capacity: '9ch',
      standards: ['KS M 1988-2', 'ISO 16000-9'],
      download_url: '/downloads/small-chamber-catalog.pdf'
    },
    {
      product_id: 'sampling-pump',
      name: '샘플링펌프',
      category: 'equipment',
      main_image: '/images/products/sampling_2ch.gif',
      images: ['/images/products/sampling_2ch.gif', '/images/products/sampling_2ch-2.gif'],
      index_description: '각종 시험에서의 공기 포집 최고의 솔루션',
      description: '디지털 유량계를 채용하여 설정 값의 ±3% 이내로 정밀한 유량 조절이 가능합니다.',
      details: ['채널수 : 2ch(요청에 따라 채널 변경 가능)'],
      specifications: [
        {"label": "디지털 유량계 채용", "value": "설정치 ± 3 %이내 정밀 유량조절"},
        {"label": "적산유량 제어", "value": "무인 가동 가능"},
        {"label": "타이머 유량 제어", "value": "무인 가동 가능"}
      ],
      temperature_range: null,
      humidity_range: null,
      capacity: '2ch',
      standards: [],
      download_url: '/downloads/Sampling-pump2ch.pdf'
    }
  ]
  
  try {
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select()
    
    if (error) {
      console.error('❌ 입력 실패:', error.message)
      return false
    }
    
    console.log('✅ 제품 데이터 입력 완료:', data.length, '개')
    return true
  } catch (err) {
    console.error('❌ 입력 오류:', err.message)
    return false
  }
}

// 실행
async function main() {
  console.log('🚀 Supabase 데이터베이스 설정 시작...')
  
  const connected = await testConnection()
  if (!connected) return
  
  const cleared = await clearData()
  if (!cleared) return
  
  const inserted = await insertProducts()
  if (!inserted) return
  
  console.log('\n🎉 모든 작업 완료!')
}

main().catch(console.error)