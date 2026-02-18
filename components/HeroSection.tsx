import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative aspect-[4/5] md:aspect-video overflow-hidden group">
      <img 
        src="https://picsum.photos/1200/1000?random=1" 
        alt="Main Hero" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
        <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 animate-bounce">
          지금 주문하면 내일 도착 🚀
        </div>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-2 tracking-tight">
          통영의 바다를<br/>식탁으로 훔치다.
        </h2>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-6">
          당일 조업, 당일 손질, 당일 발송<br/>
          <span className="font-bold text-white">최상급 프리미엄 통통 햇생굴</span>
        </p>
        <div className="flex items-baseline gap-3 border-t border-white/20 pt-6">
          <span className="text-3xl font-bold text-red-400">24%</span>
          <span className="text-5xl font-black tracking-tighter">21,900<span className="text-2xl font-normal">원</span></span>
          <span className="text-gray-400 line-through text-lg">28,900원</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
