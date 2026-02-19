import { ProductPoint, Recipe, Review } from './types';

export const PRODUCT_POINTS: ProductPoint[] = [
  {
    id: 1,
    label: "POINT. 01",
    title: "새벽 이슬 맞으며 조업한\n당일 산지직송 햇생굴",
    subtitle: "바다에서 식탁까지 단 하루",
    description: "통영 앞바다의 신선함을 그대로 담았습니다. 매일 새벽, 어부의 거친 손으로 건져 올린 생굴을 당일 손질하여 바로 보내드립니다. 뚜껑을 여는 순간 퍼지는 바다 내음을 경험해보세요.",
    <img src="/oysters/images/oyster_17.jpg"
  },
  {
    id: 2,
    label: "POINT. 02",
    title: "입안 가득 터지는\n탱글탱글 우윳빛 속살",
    subtitle: "비교불가! 압도적인 신선함",
    description: "흐물거리는 굴은 취급하지 않습니다. 조수간만의 차를 견뎌내며 단련된 통영 굴은 육질이 탄탄하고 쫄깃합니다. 씹을수록 배어 나오는 고소하고 달큰한 감칠맛이 일품입니다.",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    label: "POINT. 03",
    title: "3단계 해수 세척으로\n뜯어서 바로 드세요",
    subtitle: "번거로운 손질 걱정 NO",
    description: "차가운 해수로 3번 꼼꼼하게 씻어냈습니다. 껍질이나 이물질 걱정 없이, 수령 즉시 흐르는 물에 가볍게 헹궈 바로 드셔도 됩니다. 요리 준비 시간이 절반으로 줄어듭니다.",
    image: "https://picsum.photos/800/600?random=6"
  },
  {
    id: 4,
    label: "POINT. 04",
    title: "미국 FDA가 인정한\n청정 해역 통영",
    subtitle: "믿고 먹는 안전한 먹거리",
    description: "플랑크톤이 풍부한 황금어장, 통영. 까다로운 미국 FDA 수질 검사를 통과한 청정 해역에서 자라납니다. 우리 가족이 먹는다는 마음으로 위생 관리에 만전을 기했습니다.",
    image: "https://picsum.photos/800/600?random=3"
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "바다향 가득! 영양 굴 돌솥밥",
    description: "따끈한 밥 위에 통통한 굴",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: 2,
    title: "속까지 시원한 매생이 굴국",
    description: "탱글한 식감이 살아있는",
    image: "https://picsum.photos/600/400?random=11"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    user: "mat_zip**",
    date: "2024.10.10",
    rating: 5,
    content: "와.. 진짜 역대급 신선함이에요! 😲 비린내 하나도 안 나고 우유처럼 고소해요. 초장에 찍어 먹으니 소주가 술술 들어갑니다. 재구매 의사 200%!",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    id: 2,
    user: "cook_king",
    date: "2024.11.21",
    rating: 5,
    content: "알이 진짜 굵어요! 숟가락보다 큰 듯? 굴전 해먹었는데 물도 많이 안 나오고 탱글탱글 식감이 미쳤습니다. 부모님 댁에도 보내드렸어요.",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    id: 3,
    user: "daily_food",
    date: "2024.12.18",
    rating: 5,
    content: "배송이 하루 만에 왔어요 🚀 얼음 팩 빵빵하게 넣어주셔서 엄청 차갑게 잘 도착했습니다. 손질 다 되어 있어서 씻기만 하면 되니까 너무 편해요.",
    image: "https://picsum.photos/100/100?random=22"
  }
];
