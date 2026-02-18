import React from 'react';
import { Download } from 'lucide-react';

const CouponBanner: React.FC = () => {
  return (
    <div className="w-full px-4 -mt-6 relative z-10">
      <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-red-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-full">
            <Download className="text-red-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-red-600 font-bold text-sm">선착순 한정 혜택</p>
            <h3 className="text-xl font-bold text-gray-900">3,000원 즉시 할인 쿠폰</h3>
          </div>
        </div>
        <button className="w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
          쿠폰 다운받기
        </button>
      </div>
    </div>
  );
};

export default CouponBanner;
