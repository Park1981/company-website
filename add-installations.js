// 설치사례 데이터 입력
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

async function insertInstallations() {
  console.log('🏗️ 설치사례 데이터 입력 중...')
  
  const installations = [
    {
      client_name: '연구기관',
      project_title: '건축자재 방출량 측정용 대형챔버 구축',
      location: '서울/경기 지역',
      installation_date: '2024-10-01',
      products_used: ['large-chamber'],
      description: '대형(24m³) 챔버 시스템을 활용한 건축자재 방출량 측정 시설 구축',
      images: ['/images/installations/installations1.webp'],
      is_featured: true,
      is_active: true
    },
    {
      client_name: '환경연구기관',
      project_title: '토양해양생분해 챔버 시스템 구축',
      location: '충북 오창',
      installation_date: '2024-05-01',
      products_used: ['biodegradation'],
      description: '토양해양생분해 챔버시스템(48ch) 구축으로 환경친화적 소재의 생분해 특성 평가 시설 완성',
      images: ['/images/installations/installations5.jpg', '/images/installations/installations5-2.jpg'],
      is_featured: true,
      is_active: true
    },
    {
      client_name: '시험인증기관',
      project_title: '건축자재 방출량 측정용 대형챔버 구축',
      location: '경기 동탄',
      installation_date: '2023-05-01',
      products_used: ['large-chamber'],
      description: '대형(26m³) 챔버 시스템을 통한 종합적인 건축자재 시험 환경 구축',
      images: ['/images/installations/installations4.jpg'],
      is_featured: true,
      is_active: true
    },
    {
      client_name: '연구기관',
      project_title: '건축자재 소형 시료 방출량 측정 시설 구축',
      location: '서울',
      installation_date: '2022-11-01',
      products_used: ['small-chamber'],
      description: '소형 챔버 시스템(9ch)을 활용한 건축자재 및 기타 소형 시료의 방출량 측정 시설',
      images: ['/images/installations/installations8.jpg'],
      is_featured: false,
      is_active: true
    }
  ]
  
  try {
    // 기존 설치사례 데이터 삭제
    const { error: deleteError } = await supabase
      .from('installations')
      .delete()
      .neq('id', 0)
    
    if (deleteError) {
      console.log('⚠️ 기존 설치사례 삭제:', deleteError.message)
    }
    
    // 새 설치사례 데이터 입력
    const { data, error } = await supabase
      .from('installations')
      .insert(installations)
      .select()
    
    if (error) {
      console.error('❌ 설치사례 입력 실패:', error.message)
      return false
    }
    
    console.log('✅ 설치사례 데이터 입력 완료:', data.length, '개')
    data.forEach(installation => {
      console.log('  -', installation.project_title, `(${installation.location})`)
    })
    return true
  } catch (err) {
    console.error('❌ 설치사례 입력 오류:', err.message)
    return false
  }
}

// 실행
async function main() {
  console.log('🚀 설치사례 데이터 입력 시작...\n')
  
  const success = await insertInstallations()
  if (success) {
    console.log('\n🎉 설치사례 데이터 입력 완료!')
  }
}

main().catch(console.error)