import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-900">
                UNITECH
              </Link>
              <span className="ml-2 text-sm text-gray-500">㈜유니텍</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-900 transition">회사소개</Link>
              <Link href="#products" className="text-gray-700 hover:text-blue-900 transition">제품/서비스</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-900 transition">연락처</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            혁신적인 기술로 미래를 만들어갑니다
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            ㈜유니텍은 최첨단 기술력과 품질로 고객의 성공을 함께 만들어갑니다
          </p>
          <div className="space-x-4">
            <Link 
              href="#products"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              제품 보기
            </Link>
            <Link 
              href="#contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">회사소개</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ㈜유니텍은 고품질의 기술 솔루션을 제공하는 전문 기업으로, 
              지속적인 연구개발을 통해 고객만족을 실현하고 있습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">혁신 기술</h3>
              <p className="text-gray-600">최신 기술 트렌드를 반영한 혁신적인 솔루션 제공</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">품질 보증</h3>
              <p className="text-gray-600">엄격한 품질 관리를 통한 신뢰성 있는 제품 공급</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-900">♦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">고객 만족</h3>
              <p className="text-gray-600">고객의 요구사항을 최우선으로 하는 맞춤형 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">제품 & 서비스</h2>
            <p className="text-lg text-gray-600">다양한 분야의 전문 솔루션을 제공합니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl text-blue-900">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">제조 솔루션</h3>
              <p className="text-gray-600">고품질 제조 장비 및 자동화 시스템</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl text-green-700">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">IT 솔루션</h3>
              <p className="text-gray-600">맞춤형 소프트웨어 개발 및 시스템 통합</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl text-purple-700">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">컨설팅</h3>
              <p className="text-gray-600">전문적인 기술 컨설팅 및 프로세스 최적화</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">연락처</h2>
            <p className="text-lg text-gray-600">언제든지 문의해 주세요</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">본사 주소</h3>
                  <p className="text-gray-600">서울특별시 강남구 테헤란로<br />상세 주소는 별도 문의</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">전화</h3>
                  <p className="text-gray-600">02-XXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">이메일</h3>
                  <p className="text-gray-600">info@unitechco.co.kr</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">문의 양식</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">메시지</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="메시지를 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition font-medium"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">UNITECH</div>
            <p className="text-gray-400 mb-4">㈜유니텍 - 혁신적인 기술 파트너</p>
            <p className="text-sm text-gray-500">
              © 2025 UNITECH Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}