import React from 'react';
import { PRODUCT_POINTS, RECIPES, REVIEWS } from '../constants';
import { Check, Star, Truck, ShieldCheck, Utensils, Gift, Download } from 'lucide-react';

const DetailSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white flex flex-col items-center pb-20">
      
      {/* 1. Main Hero Banner - Magazine Style */}
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

      {/* 2. Benefit Coupon - Sales Trigger */}
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

      {/* 3. Key Points Summary - Concise & Visual */}
      <div className="w-full py-16 px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
          <h3 className="text-3xl font-bold text-gray-900">왜 '더신선' 생굴인가요?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Truck className="w-8 h-8 text-blue-500" />, title: "산지 직송", desc: "중간 유통 없는\n다이렉트 배송" },
            { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: "엄격 선별", desc: "상위 1% 프리미엄\n통통한 굴만 엄선" },
            { icon: <Utensils className="w-8 h-8 text-blue-500" />, title: "세척 완료", desc: "받아서 바로 먹는\n간편한 손질 굴" }
          ].map((item, i) => (
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

      {/* 4. Size Guide - Visual Confirmation */}
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
                 <div className="absolute -top-6 -right-6 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
                   MD 강력 추천
                 </div>
                 <img src="https://picsum.photos/200/200?random=302" className="w-32 h-32 object-cover rounded-full shadow-xl mb-3 border-4 border-white" alt="Premium Size" />
                 <span className="text-lg font-black text-blue-900">더신선 프리미엄</span>
                 <p className="text-xs text-blue-600 font-bold mt-1">숟가락을 꽉 채우는 크기!</p>
              </div>
           </div>
        </div>
      </div>

      {/* 5. Special Gift - Buying Impulse */}
      <div className="w-full py-16 px-4">
         <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="relative z-10">
              <Gift className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-black mb-2 drop-shadow-md">2세트 이상 구매 시</h3>
              <p className="text-xl font-bold mb-6 drop-shadow-md">새콤달콤 <span className="text-yellow-100 bg-red-600 px-2 py-1 rounded">특제 초장</span> 100% 무료 증정!</p>
              <div className="inline-block bg-white/20 backdrop-blur-md border border-white/50 rounded-lg p-4">
                 <p className="text-sm">굴 1kg + 굴 1kg = <span className="font-bold text-yellow-100">초장 1팩 증정</span></p>
              </div>
            </div>
         </div>
      </div>

      {/* 6. Product Detail Points - Storytelling */}
      <div className="w-full space-y-24 py-12">
         {PRODUCT_POINTS.map((point, index) => (
            <div key={point.id} className="w-full px-4 md:px-0 max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
               <div className={`w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img src={point.image} alt={point.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-4">
                  <span className="text-blue-600 font-bold text-sm tracking-widest mb-2">{point.label}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight whitespace-pre-line">{point.title}</h3>
                  <div className="w-10 h-1 bg-gray-200 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-lg keep-all">
                     {point.description}
                  </p>
               </div>
            </div>
         ))}
      </div>

      {/* 7. Real Reviews - Social Proof */}
      <div className="w-full bg-slate-900 text-white py-20 px-4 mt-12">
         <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-8">
               <div>
                  <span className="text-yellow-400 font-bold tracking-widest text-sm mb-2 block">REAL REVIEW</span>
                  <h3 className="text-3xl font-bold">고객님이 증명하는<br/>압도적 재구매율</h3>
               </div>
               <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <span className="text-5xl font-black text-yellow-400">4.9</span>
                  <div className="flex flex-col">
                     <div className="flex text-yellow-400 mb-1">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                     </div>
                     <span className="text-sm text-gray-400">8,734개의 리뷰</span>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {REVIEWS.map(review => (
                  <div key={review.id} className="bg-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                     <div className="flex items-center gap-3 mb-4">
                        <img src={review.image} alt="Reviewer" className="w-10 h-10 rounded-full object-cover ring-2 ring-yellow-400" />
                        <div>
                           <div className="text-sm font-bold">{review.user}</div>
                           <div className="flex text-yellow-400">
                              {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">"{review.content}"</p>
                     <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 8. Recipes - Inspiration */}
      <div className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <h3 className="text-3xl font-bold text-gray-900">다양하게 즐기는 <span className="text-blue-600">통통생굴</span></h3>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              {RECIPES.map((recipe, idx) => (
                <div key={recipe.id} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg aspect-[4/3]">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <span className="text-yellow-400 text-xs font-bold mb-2">RECIPE 0{idx + 1}</span>
                    <h4 className="text-white text-xl font-bold mb-1">{recipe.title}</h4>
                    <p className="text-gray-300 text-sm">{recipe.description}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* 9. Final Assurance */}
      <div className="w-full py-16 px-4 text-center">
         <ShieldCheck className="w-16 h-16 text-gray-300 mx-auto mb-6" />
         <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            위즐은 신선식품 품질보장제를 실시하고 있습니다.<br/>
            상품 수령 후 품질에 불만족 시 100% 교환/환불해 드립니다.<br/>
            믿고 구매하세요.
         </p>
      </div>

    </div>
  );
};

export default DetailSection;