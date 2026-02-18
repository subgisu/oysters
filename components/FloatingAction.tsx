import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const FloatingAction: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50 md:hidden pb-safe">
      <div className="flex gap-2 items-center">
        <button className="p-3 border border-gray-300 rounded-md text-gray-500">
          <Heart size={20} />
        </button>
        <button className="flex-1 bg-black text-white py-3 rounded-md font-bold text-sm">
          장바구니
        </button>
        <button className="flex-1 bg-blue-500 text-white py-3 rounded-md font-bold text-sm">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default FloatingAction;