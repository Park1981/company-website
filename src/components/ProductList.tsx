'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

interface Product {
  id: number
  product_id: string
  name: string
  category: string
  main_image: string
  images: string[]
  index_description: string
  description: string
  details: string[]
  specifications: { label: string; value: string }[]
  temperature_range?: string | null
  humidity_range?: string | null
  capacity?: string | null
  standards: string[]
  download_url?: string | null
  is_active: boolean
  created_at: string
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const result = await response.json()

      if (result.success) {
        setProducts(result.data)
      } else {
        setError(result.error || '제품 데이터를 불러올 수 없습니다.')
        toast.error('제품 목록 조회에 실패했습니다.')
      }
    } catch (error) {
      console.error('제품 조회 에러:', error)
      setError('네트워크 오류가 발생했습니다.')
      toast.error('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }


  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'chamber':
        return 'from-blue-100 to-blue-200 text-blue-900'
      case 'equipment':
        return 'from-green-100 to-green-200 text-green-700'
      case 'testing':
        return 'from-purple-100 to-purple-200 text-purple-700'
      case 'analysis':
        return 'from-orange-100 to-orange-200 text-orange-700'
      default:
        return 'from-gray-100 to-gray-200 text-gray-700'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'chamber':
        return '🏠'
      case 'equipment':
        return '⚙️'
      case 'testing':
        return '🔬'
      case 'analysis':
        return '📊'
      default:
        return '📦'
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'chamber':
        return '챔버 시스템'
      case 'equipment':
        return '시험 장비'
      case 'testing':
        return '시험 솔루션'
      case 'analysis':
        return '분석 장비'
      default:
        return category
    }
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={fetchProducts}
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          다시 시도
        </button>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
          <div className={`h-48 bg-gradient-to-br ${getCategoryColor(product.category)} rounded-lg mb-4 flex items-center justify-center`}>
            <span className="text-4xl">{getCategoryIcon(product.category)}</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.index_description}</p>
            <div className="pt-2">
              <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                {getCategoryName(product.category)}
              </span>
            </div>
          </div>
        </div>
      ))}
      
      {products.length === 0 && (
        <div className="col-span-full text-center py-8 text-gray-500">
          등록된 제품이 없습니다.
        </div>
      )}
    </div>
  )
}