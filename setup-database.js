// Supabase 연결 및 데이터 설정 (CommonJS)
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔗 Supabase URL:', supabaseUrl)
console.log('🔑 API Key exists:', !!supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)

// 1. 연결 테스트
async function testConnection() {
  console.log('\n🧪 연결 테스트...')
  
  try {
    const { data, error } = await supabase
      .from('products')
      .select('id')
      .limit(1)
    
    if (error) {
      console.error('❌ 테이블 접근 실패:', error.message)
      return false
    }
    
    console.log('✅ 연결 성공!')
    return true
  } catch (err) {
    console.error('❌ 연결 오류:', err.message)
    return false
  }
}

// 2. 제품 데이터 입력
async function insertProducts() {
  console.log('\n📦 제품 데이터 입력 중...')
  
  const products = [
    {
      product_id: 'large-chamber',
      name: '대형 챔버 시스템',
      category: 'chamber',
      main_image: '/images/products/large-chamber-1.webp',
      images: ['/images/products/large-chamber-1.webp', '/images/products/large-chamber-2.webp'],
      index_description: '대형 건축 내장재, 가구, 가전제품 등 대형 시험체의 VOC 및 포름알데히드 분석 솔루션',
      description: '내부 챔버와 외부 챔버 사이에 공조를 통해 온도와 습도를 이상적으로 관리합니다.',
      details: ['용량 : 26 m³ (요청에 따라 맞춤형 챔버 제공)', '온도 범위 : 15 ~ 40 °C'],
      specifications: [
        {"label": "내부 크기", "value": "4,000 x 3,500 x 2,800 mm"},
        {"label": "온도 정밀도", "value": "± 0.5 °C"}
      ],
      temperature_range: '15 ~ 40 °C',
      humidity_range: '30 ~ 80 % RH',
      capacity: '26 m³',
      standards: ['ISO/IEC 28360', 'KS I 2007'],
      download_url: '/downloads/large-chamber-catalog.pdf',
      is_active: true
    },
    {
      product_id: 'small-chamber',
      name: '소형 챔버 시스템',
      category: 'chamber',
      main_image: '/images/products/small-chamber-1.webp',
      images: ['/images/products/small-chamber-1.webp'],
      index_description: '건축자재 및 가구 VOC/포름알데히드 포집장치',
      description: '각 유닛간 유기적 연결을 통해 온도차로 인한 결로를 방지하며 설치가 용이합니다.',
      details: ['챔버수 : 9ch (요청에 따라 맞춤형 제공)'],
      specifications: [
        {"label": "항온조 크기", "value": "1,200 x 1,400 x 500 mm"},
        {"label": "온도 정밀도", "value": "± 0.2 °C"}
      ],
      temperature_range: '15 ~ 30 °C',
      humidity_range: null,
      capacity: '9ch',
      standards: ['KS M 1988-2'],
      download_url: '/downloads/small-chamber-catalog.pdf',
      is_active: true
    },
    {
      product_id: 'sampling-pump',
      name: '샘플링펌프',
      category: 'equipment',
      main_image: '/images/products/sampling_2ch.gif',
      images: ['/images/products/sampling_2ch.gif'],
      index_description: '각종 시험에서의 공기 포집 최고의 솔루션',
      description: '디지털 유량계를 채용하여 설정 값의 ±3% 이내로 정밀한 유량 조절이 가능합니다.',
      details: ['채널수 : 2ch(요청에 따라 채널 변경 가능)'],
      specifications: [
        {"label": "디지털 유량계", "value": "설정치 ± 3% 이내"},
        {"label": "적산유량 제어", "value": "무인 가동 가능"}
      ],
      temperature_range: null,
      humidity_range: null,
      capacity: '2ch',
      standards: [],
      download_url: '/downloads/Sampling-pump2ch.pdf',
      is_active: true
    }
  ]
  
  try {
    // 기존 데이터 삭제
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', 0)
    
    if (deleteError) {
      console.log('⚠️ 기존 데이터 삭제:', deleteError.message)
    }
    
    // 새 데이터 입력
    const { data, error } = await supabase
      .from('products')
      .insert(products)
      .select()
    
    if (error) {
      console.error('❌ 입력 실패:', error.message)
      return false
    }
    
    console.log('✅ 제품 데이터 입력 완료:', data.length, '개')
    data.forEach(product => {
      console.log('  -', product.name, `(${product.category})`)
    })
    return true
  } catch (err) {
    console.error('❌ 입력 오류:', err.message)
    return false
  }
}

// 실행
async function main() {
  console.log('🚀 Supabase 데이터베이스 설정 시작...\n')
  
  const connected = await testConnection()
  if (!connected) {
    console.log('\n❌ 연결 실패. 수동으로 SQL을 실행해주세요.')
    return
  }
  
  const success = await insertProducts()
  if (success) {
    console.log('\n🎉 데이터베이스 설정 완료!')
    console.log('💡 이제 DEMO_MODE=false로 실제 DB를 사용합니다.')
  }
}

main().catch(console.error)