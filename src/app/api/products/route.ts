import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function GET() {
  try {
    // 데모 모드인 경우 샘플 데이터 반환
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      const sampleProducts = [
        {
          id: 1,
          name: 'MFC-1000 시리즈',
          description: '고정밀 질량 유량 제어기로 반도체 공정에 최적화된 제품입니다.',
          category: '제조 솔루션',
          price: 5000000,
          image_url: null,
          is_active: true,
          created_at: new Date().toISOString()
        },
        {
          id: 2,
          name: '스마트 팩토리 솔루션',
          description: 'AI 기반 생산 최적화 및 실시간 모니터링 시스템입니다.',
          category: 'IT 솔루션',
          price: 15000000,
          image_url: null,
          is_active: true,
          created_at: new Date().toISOString()
        },
        {
          id: 3,
          name: '프로세스 컨설팅',
          description: '제조 공정 분석 및 효율성 개선을 위한 전문 컨설팅 서비스입니다.',
          category: '컨설팅',
          price: null,
          image_url: null,
          is_active: true,
          created_at: new Date().toISOString()
        },
        {
          id: 4,
          name: 'IoT 센서 시스템',
          description: '실시간 데이터 수집 및 분석을 위한 통합 센서 솔루션입니다.',
          category: 'IT 솔루션',
          price: 8000000,
          image_url: null,
          is_active: true,
          created_at: new Date().toISOString()
        }
      ]
      return NextResponse.json({ success: true, data: sampleProducts })
    }

    // 실제 Supabase에서 데이터 조회
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase 에러:', error)
      return NextResponse.json(
        { error: '제품 데이터 조회 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })

  } catch (error) {
    console.error('API 에러:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, category, price, image_url } = await request.json()

    // 입력값 검증
    if (!name || !description || !category) {
      return NextResponse.json(
        { error: '필수 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 데모 모드인 경우
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      const newProduct = {
        id: Math.floor(Math.random() * 1000) + 100,
        name,
        description,
        category,
        price: price || null,
        image_url: image_url || null,
        is_active: true,
        created_at: new Date().toISOString()
      }
      
      console.log('데모 모드: 새 제품 추가', newProduct)
      return NextResponse.json({
        success: true,
        message: '제품이 성공적으로 추가되었습니다! (데모 모드)',
        data: newProduct
      })
    }

    // 실제 Supabase에 저장
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name,
          description,
          category,
          price: price || null,
          image_url: image_url || null,
          is_active: true
        }
      ])
      .select()

    if (error) {
      console.error('Supabase 에러:', error)
      return NextResponse.json(
        { error: '제품 저장 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '제품이 성공적으로 추가되었습니다!',
      data: data[0]
    })

  } catch (error) {
    console.error('API 에러:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}