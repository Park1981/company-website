import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // 입력값 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      )
    }

    // 데모 모드인 경우 실제 DB에 저장하지 않고 성공 응답 반환
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      console.log('데모 모드: 문의 내용', { name, email, message })
      return NextResponse.json({
        success: true,
        message: '문의가 성공적으로 접수되었습니다! (데모 모드)',
        data: {
          id: Math.floor(Math.random() * 1000),
          name,
          email,
          message,
          created_at: new Date().toISOString(),
          status: 'new'
        }
      })
    }

    // 실제 Supabase에 저장 (Supabase가 설정된 경우)
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message,
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase 에러:', error)
      return NextResponse.json(
        { error: '데이터베이스 저장 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다!',
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

export async function GET(request: NextRequest) {
  try {
    // 데모 모드인 경우 샘플 데이터 반환
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      const sampleData = [
        {
          id: 1,
          name: '김철수',
          email: 'test@example.com',
          message: '제품에 대해 문의드립니다.',
          created_at: new Date().toISOString(),
          status: 'new'
        },
        {
          id: 2,
          name: '이영희',
          email: 'demo@example.com',
          message: '견적 요청드립니다.',
          created_at: new Date(Date.now() - 86400000).toISOString(),
          status: 'processing'
        }
      ]
      return NextResponse.json({ success: true, data: sampleData })
    }

    // 실제 Supabase에서 데이터 조회
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase 에러:', error)
      return NextResponse.json(
        { error: '데이터 조회 중 오류가 발생했습니다.' },
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