import React from 'react';
import { ShoppingCart, Search, Home, ArrowLeft } from 'lucide-react';
import DetailSection from './components/DetailSection';
import FloatingAction from './components/FloatingAction';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Header - Simple Mobile Style */}
      <header className="sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
            <Home className="w-6 h-6 text-gray-800" />
          </div>
          <h1 className="text-lg font-bold truncate mx-4">위즐</h1>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-800" />
            <ShoppingCart className="w-6 h-6 text-gray-800" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto bg-white shadow-xl min-h-screen">
        
        {/* Main Detail Content */}
        <DetailSection />

        {/* Footer Area inside Main container */}
        <div className="bg-gray-100 p-8 border-t text-xs text-gray-500">
             <div className="flex flex-wrap gap-4 mb-4">
                 <span>이용약관</span>
                 <span className="font-bold">개인정보처리방침</span>
                 <span>지식재산권보호센터</span>
                 <span>안전거래센터</span>
             </div>
             <p className="mb-2">(주)위즐 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
             <p className="mb-2">통신판매업신고: 2024-서울강남-00000 | 주소: 서울특별시 강남구 테헤란로 123</p>
             <p className="mt-4 opacity-50">본 상품의 정보 및 거래에 관한 의무와 책임은 판매자에게 있습니다.</p>
        </div>

      </main>

      <FloatingAction />
    </div>
  );
}

export default App;