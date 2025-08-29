import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../../lib/supabase'
import productsData from '../../../data/products.json'

export async function GET() {
  try {
    // 데모 모드인 경우 실제 제품 데이터 반환
    if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
      // JSON 데이터를 데이터베이스 스키마에 맞게 변환
      const transformedProducts = productsData.products.map((product, index) => ({
        id: index + 1,
        created_at: new Date().toISOString(),
        product_id: product.id,
        name: product.name,
        category: product.category,
        main_image: product.main_image,
        images: product.images,
        index_description: product.index_description,
        description: product.description,
        details: product.details,
        specifications: product.specifications,
        temperature_range: product.temperature_range,
        humidity_range: product.humidity_range,
        capacity: product.capacity,
        standards: product.standards,
        download_url: product.download_url,
        is_active: product.is_active
      }))
      
      return NextResponse.json({ 
        success: true, 
        data: transformedProducts,
        categories: productsData.productCategories
      })
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

    return NextResponse.json({ 
      success: true, 
      data,
      categories: productsData.productCategories 
    })

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