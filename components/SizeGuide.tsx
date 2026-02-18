import React from 'react';

const SizeGuide: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <span className="bg-slate-800 text-white px-3 py-1 rounded text-xs font-bold mb-2">SIZE GUIDE</span>
          <h3 className="text-2xl font-bold text-center">압도적인 크기를 확인하세요</h3>
          <p className="text-gray-500 text-sm mt-2">일반 굴과는 비교를 거부합니다.</p>
        </div>
        <div className="flex items-end justify-center gap-4 md:gap-12 relative">
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center bg-gray-100 mb-3">
              <span className="text-xs font-bold text-gray-500">100원 동전</span>
            </div>
            <span className="text-sm font-medium">일반 사이즈</span>
          </div>
          <div className="text-slate-300 pb-10">VS</div>
          <div className="flex flex-col items-center relative z-10">
            <div className="absolute -top-6 -right-6 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              MD 강력 추천
            </div>
            <img src="https://picsum.photos/200/200?random=302" className="w-32 h-32 object-cover rounded-full shadow-xl mb-3 border-4 border-white" alt="Premium Size" />
            <span className="text-lg font-black text-blue-900">더신선 프리미엄</span>
            <p className="text-xs text-blue-600 font-bold mt-1">숟가락을 꽉 채우는 크기!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
