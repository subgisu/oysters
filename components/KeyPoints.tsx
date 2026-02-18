import React from 'react';
import { Truck, ShieldCheck, Utensils } from 'lucide-react';

const KeyPoints: React.FC = () => {
  const points = [
    { icon: <Truck className="w-8 h-8 text-blue-500" />, title: "산지 직송", desc: "중간 유통 없는\n다이렉트 배송" },
    { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: "엄격 선별", desc: "상위 1% 프리미엄\n통통한 굴만 엄선" },
    { icon: <Utensils className="w-8 h-8 text-blue-500" />, title: "세척 완료", desc: "받아서 바로 먹는\n간편한 손질 굴" },
  ];

  return (
    <div className="w-full py-16 px-6">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
        <h3 className="text-3xl font-bold text-gray-900">왜 '더신선' 생굴인가요?</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {points.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-500 whitespace-pre-line leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyPoints;
