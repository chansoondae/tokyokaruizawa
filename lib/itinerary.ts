export type SpotKind = "airport" | "museum" | "free" | "meal" | "move";

export interface Spot {
  kind: SpotKind;
  time: string;
  name: string;
  exhibition?: string;
  description?: string;
  options?: string[];
  address?: string;
  imagePath?: string;
  mapsUrl?: string;
}

export interface Day {
  dayNumber: number;
  weekday: string;
  region: string;
  transport: string;
  summary: string[];
  breakfast: string;
  lunch: string;
  dinner: string;
  accommodation: string;
  hotelMapsUrl: string;
  hotelImagePath?: string;
  spots: Spot[];
}

const NARITA_MAPS = "https://www.google.com/maps/search/?api=1&query=成田国際空港";

export const days: Day[] = [
  {
    dayNumber: 1,
    weekday: "목요일",
    region: "나리타 · 가루이자와",
    transport: "✈️ 나리타 T1 미팅 12:00",
    summary: ["나리타 공항", "가루이자와", "안도 / 뉴아트 뮤지엄"],
    breakfast: "불포함",
    lunch: "자유식",
    dinner: "호텔 만찬",
    accommodation: "호텔 인디고 카루이자와 (IHG)",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Indigo+Karuizawa",
    hotelImagePath: "/images/IHGhotelindigo.JPG",
    spots: [
      {
        kind: "airport",
        time: "12:00",
        name: "나리타 공항 T1 미팅 · 출발",
        description: "12:00 나리타 공항 제1터미널(T1)에서 하나투어 현지 가이드 및 차가운순대와 미팅 후 바로 가루이자와로 출발합니다.",
        address: "成田国際空港 第1ターミナル, Chiba",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=成田国際空港+第1ターミナル",
      },
      {
        kind: "move",
        time: "",
        name: "가루이자와로 이동",
        description: "약 3시간 30분",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "free",
        time: "15:30",
        name: "미술관 선택 관람",
        description: "아래 두 미술관 중 취향에 맞는 곳을 골라 관람하세요.\n\n두 곳 모두 17:00에 문을 닫고, 입장은 16:30까지입니다. 17:00 호텔 이동 시간에 늦지 않게 모여 주세요.",
        options: ["A. 안도 뮤지엄 · 후지타 쓰구하루", "B. 뉴아트 뮤지엄 · 중국 현대미술"],
      },
      {
        kind: "museum",
        time: "택 A",
        name: "가루이자와 안도 뮤지엄",
        exhibition: "뉴욕의 후지타 쓰구하루",
        description: "레오나르 후지타(藤田嗣治)의 작품만 모아 놓은 미술관입니다.\n\n탄생 140주년 기념 기획전으로, 1949년 파리로 건너가기 전 약 10개월 동안 머문 뉴욕 시절을 조명합니다. 그가 즐겨 그린 고양이 그림 특집 전시도 함께 열립니다.\n\n전시 기간 2026.7.11 ~ 2027.1.11\n💴 입장료(일반) 현장 2,600엔 · 온라인 전자티켓 2,400엔",
        address: "長野県北佐久郡軽井沢町軽井沢東43-10",
        imagePath: "/images/andomuseumkaruizawa.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=軽井沢安東美術館",
      },
      {
        kind: "museum",
        time: "택 B",
        name: "가루이자와 뉴아트 뮤지엄",
        exhibition: "신 차이나 펄스 ― 신세대 아트를 체감하라!",
        description: "2층 6개 전시실에서 중국 신세대 작가들의 현대미술을 소개합니다. 전통 산수와 서예를 디지털 기술로 재해석한 작품, 어둠 속에 떠오르는 붉은 기하학 등 실험적인 작품을 만날 수 있습니다.\n\n1층 갤러리와 뮤지엄숍은 무료로 둘러볼 수 있습니다.\n\n전시 기간 2026.6.20 ~ 2027.1.11\n💴 입장료(일반) 2,000엔",
        address: "長野県北佐久郡軽井沢町軽井沢1151-5",
        imagePath: "/images/karuizawanewartmuseum.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=軽井沢ニューアートミュージアム",
      },
      {
        kind: "move",
        time: "17:00",
        name: "호텔로 이동",
        description: "약 30분",
      },
      {
        kind: "meal",
        time: "17:30",
        name: "호텔 만찬 (코스요리)",
        imagePath: "/images/hotelindigo-dinner.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Indigo+Karuizawa",
      },
    ],
  },
  {
    dayNumber: 2,
    weekday: "금요일",
    region: "가루이자와 · 군마",
    transport: "🚌 전용차량 이동",
    summary: ["히로시 센주 미술관", "하라 뮤지엄 ARC"],
    breakfast: "호텔식",
    lunch: "자유식",
    dinner: "모모파라다이스 스키야키",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    hotelImagePath: "/images/metropolitanikebukuro.jpg",
    spots: [
      {
        kind: "museum",
        time: "09:30",
        name: "히로시 센주 미술관",
        exhibition: "신 워터폴 ― 센주 히로시가 산수로 그린 시공의 기억, 미래와 희망",
        description: "'폭포' 연작으로 잘 알려진 일본화가 센주 히로시의 개인 미술관입니다. 건축가 니시자와 류에가 설계한, 유리벽 사이로 숲이 들어오는 건물도 볼거리입니다.\n\n개관 15주년 기념전으로, 가루이자와의 시라이토 폭포를 그린 신작 〈워터폴 온 컬러즈 시라이토 폭포〉를 중심으로 '폭포'·'절벽'·'숲' 연작을 소개합니다.\n\n전시 기간 2026.3.1 ~ 12.25",
        address: "長野県北佐久郡軽井沢町長倉815",
        imagePath: "/images/hiroshisenju.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=軽井沢千住博美術館",
      },
      {
        kind: "free",
        time: "10:50",
        name: "가루이자와 긴자 상점거리",
        description: "옛 나카센도 길을 따라 이어지는 가루이자와의 대표 거리입니다. 상점거리를 둘러보며 점심은 자유롭게 드세요.\n\n🏨 만페이 호텔 (万平ホテル)\n1894년 문을 연 가루이자와의 대표 클래식 호텔입니다. 존 레논과 오노 요코가 1970년대 여름마다 머물던 곳으로 유명합니다. 호텔 '카페테라스'에서는 약 50년 전 손님의 요청으로 만든 레시피를 이어온 로열 밀크티(존 레논이 전한 레시피라는 이야기로 유명해요)와 전통 애플파이를 맛볼 수 있습니다. 긴자 거리 북쪽 끝에서 걸어서 10분 남짓입니다.\n\n🥖 베이커리\n· 프랑스 베이커리 (フランスベーカリー): 존 레논이 머무는 동안 자전거를 타고 바게트를 사러 왔다는 빵집입니다. 08:00~17:00\n· 브랑제 아사노야 구도 본점 (浅野屋): 스페인산 돌가마에 구운 빵으로 유명한 노포입니다. 10:00부터, 빵이 다 팔리면 문을 닫아요.\n\n⏰ 12:00에 하라 뮤지엄으로 출발하니 시간에 맞춰 모여 주세요.",
        imagePath: "/images/karuizawaginzastreet.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=旧軽井沢銀座通り",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "move",
        time: "12:00",
        name: "하라 뮤지엄 ARC로 이동",
        description: "약 1시간 30분",
      },
      {
        kind: "museum",
        time: "13:30",
        name: "하라 뮤지엄 ARC",
        exhibition: "Fly to the Moon ― 달을 둘러싼 5가지 이야기",
        description: "도쿄 시나가와의 원미술관(하라 미술관)을 잇는 군마현의 현대미술관으로, 이소자키 아라타가 설계했습니다.\n\n'달'을 주제로 다섯 작품을 중심에 놓고 현대미술과 고미술을 함께 보여주는 전시입니다. 라우센버그·워홀 등 팝아트, 구라마타 시로의 가구 〈How High the Moon〉, 무로마치 시대 〈달과 원숭이 그림〉까지 이어집니다.\n\n쿠사마 야요이, 올라퍼 엘리아슨, 이우환 등의 상설·야외 작품도 함께 둘러볼 수 있습니다.\n\n전시 기간 2026.9.12 ~ 2027.1.11",
        address: "群馬県渋川市金井2855-1",
        imagePath: "/images/haramuseumarc.jpeg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=ハラ+ミュージアム+アーク",
      },
      {
        kind: "move",
        time: "15:00",
        name: "도쿄 호텔로 이동",
        description: "약 3시간 30분 · 체크인 후 도보로 저녁 식사",
      },
      {
        kind: "meal",
        time: "20:30",
        name: "모모파라다이스 스키야키",
        imagePath: "/images/momoparadise-ikebukuro.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=モーモーパラダイス+池袋サンシャイン通り店",
      },
    ],
  },
  {
    dayNumber: 3,
    weekday: "토요일",
    region: "도쿄",
    transport: "🚌 전용차량 이동",
    summary: ["도쿄도 미술관", "우에노모리 미술관", "국립신미술관"],
    breakfast: "호텔식",
    lunch: "자유식",
    dinner: "폴 보퀴즈 프렌치 디너",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    hotelImagePath: "/images/metropolitanikebukuro.jpg",
    spots: [
      {
        kind: "museum",
        time: "09:30",
        name: "도쿄도 미술관",
        exhibition: "오르세 미술관 소장 ― 지금을 사는 기쁨",
        description: "도쿄도 미술관 개관 100주년 기념전으로, '인상파의 전당' 오르세 미술관 소장품 약 110점(회화·조각·공예·사진)이 '지금을 사는 기쁨'을 주제로 모였습니다.\n\n밀레 〈이삭 줍는 사람들〉, 고흐 〈론강의 별이 빛나는 밤〉, 르누아르 〈목욕하는 여인들〉, 고갱 〈아레아레아〉 등 미술사의 명작을 만날 수 있습니다.\n\n✨ 우리가 방문하는 11월 14일이 바로 개막일이에요. 붐빌 수 있으니 대표작부터 먼저 보시길 추천해요.\n\n전시 기간 2026.11.14 ~ 2027.3.28",
        address: "8-36 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/tobikan-orsay.png",
        mapsUrl: "https://maps.app.goo.gl/eGVQ4mZYER1mi7E6A",
      },
      {
        kind: "museum",
        time: "11:30",
        name: "우에노모리 미술관",
        exhibition: "신시내티 미술관전 ― 미국으로 건너간 유럽의 보물",
        description: "미국 신시내티 미술관의 서양 근대미술 84점이 일본에 왔으며, 그중 81점이 일본 첫 공개입니다. 신고전주의부터 입체주의까지 4개 장으로 구성됩니다.\n\n코로, 쿠르베, 마네, 세잔, 모네, 르누아르, 고흐, 고갱, 피카소, 모딜리아니, 샤갈 등의 작품이 나오며, 고흐 최만년의 〈포플러 숲 속의 두 사람〉(1890), 마네 〈경마장의 여인들〉, 르누아르 〈건지섬의 안개〉가 대표작입니다.\n\n전시 기간 2026.10.10 ~ 2027.1.10",
        imagePath: "/images/uenomori-cincinnati.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=上野の森美術館",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "museum",
        time: "14:30",
        name: "국립신미술관",
        exhibition: "루브르 미술관전 ― 르네상스",
        description: "루브르 미술관 소장 르네상스 작품 50여 점을 소개하는 전시입니다.\n\n최대 화제작은 레오나르도 다빈치의 〈여인의 초상〉(일명 '아름다운 페로니에르')입니다. 다빈치 작품이 일본에서 공개되는 것은 1974년 〈모나리자〉 이후 처음이라고 합니다. 보티첼리, 티치아노, 뒤러 등 르네상스 거장들의 작품도 함께 볼 수 있습니다.\n\n전시 기간 2026.9.9 ~ 12.13",
        address: "7 Chome-22-2 Roppongi, Minato City, Tokyo 106-8558",
        imagePath: "/images/nact-louvre.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Chome-22-2+Roppongi,+Minato+City,+Tokyo+106-8558",
      },
      {
        kind: "meal",
        time: "17:30",
        name: "폴 보퀴즈 프렌치 디너",
        imagePath: "/images/paulbocusedinner.JPG",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=ポール・ボキューズ+大丸東京",
      },
    ],
  },
  {
    dayNumber: 4,
    weekday: "일요일",
    region: "도쿄 · 귀국",
    transport: "✈️ 나리타 출발 18:45",
    summary: ["솜포 미술관", "국립서양미술관", "나리타 공항"],
    breakfast: "호텔식",
    lunch: "스시정식",
    dinner: "기내식",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        kind: "museum",
        time: "09:30",
        name: "솜포 미술관",
        exhibition: "알베르 마르케전",
        description: "프랑스 근대 화가 알베르 마르케(1875~1947) 탄생 150주년 회고전으로, 일본에서는 35년 만에 열리는 대규모 전시입니다. 고향 보르도 미술관 등에서 온 약 90점이 나옵니다.\n\n센강·남프랑스·알제 등 물가 풍경을 즐겨 그린 '물가의 화가'로, '마르케의 회색'이라 불리는 섬세한 색조가 특징입니다. 평생의 친구 마티스는 그를 '우리의 호쿠사이'라고 불렀습니다.\n\n🌻 솜포 미술관 소장품인 고흐 〈해바라기〉와 세잔 〈사과와 냅킨〉도 함께 관람합니다.\n\n전시 기간 2026.9.22 ~ 12.13",
        address: "1 Chome-26-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023",
        imagePath: "/images/sompo-marquet.png",
        mapsUrl: "https://maps.app.goo.gl/o9QZba5NUw8gpxsb8",
      },
      {
        kind: "meal",
        time: "11:30",
        name: "스사비유 스시정식",
        imagePath: "/images/susabiyu-kabukicho.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=すさび湯+歌舞伎町",
      },
      {
        kind: "museum",
        time: "13:00",
        name: "국립서양미술관",
        exhibition: "테이트 미술관 터너전 ― 숭고의 회화, 현대미술과의 대화",
        description: "영국 풍경화의 거장 J.M.W. 터너의 작품을 런던 테이트 미술관 소장품으로 소개합니다. 유화와 수채화 등 80점 이상이 출품됩니다.\n\n자연의 압도적인 힘을 그린 '숭고'의 풍경화(대표작 〈그리종 주의 눈사태〉 등)와 함께, 터너에게서 영향을 받은 현대미술 작품을 나란히 놓아 대화하듯 보여줍니다.\n\n👀 꼭 봐야 할 작품\n· 〈그리종 주의 눈사태〉(1810) ― 2장. 알프스 눈사태의 공포를 그린 '숭고'의 대표작. 옆의 엘리아슨 〈녹는 빙하 시리즈 1999/2019〉와 비교해 보세요.\n· 〈바쿠스와 아리아드네〉(1840) ― 3장. 신화를 그린 역사화\n· 〈베네치아 ― 산타 마리아 델라 살루테 성당〉(1844) ― 4장. 빛에 녹아드는 물의 도시\n· 〈포경선 에레버스호 만세! 또 한 마리 잡았다!〉(1846) ― 5장. 말년의 거친 바다\n· 〈부표가 있는 바다 풍경〉(1840년경) ― 6장. 바다와 하늘의 경계가 사라지는 말년의 터너\n· 〈월광, 밀뱅크에서의 습작〉(1797) ― 서장. 20대 초반 터너의 템스강 밤 풍경\n\n🟥 마크 로스코도 있어요\n마지막 7장 '근원적 숭고'에서 말년의 터너 바다 그림(〈거친 바다와 돌고래〉 등) 곁에 로스코 〈무제〉(1969, 종이에 아크릴)와 바넷 뉴먼의 작품이 함께 걸립니다. 형태가 사라지고 색과 빛만 남은 말년의 터너가 왜 추상표현주의의 선구자로 불리는지 직접 비교해 볼 수 있어요.\n\n전시 기간 2026.10.24 ~ 2027.2.21",
        address: "7-7 Uenokoen, Taito City, Tokyo 110-0007",
        imagePath: "/images/nmwa-turner.png",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7-7+Uenokoen,+Taito+City,+Tokyo+110-0007",
      },
      {
        kind: "move",
        time: "15:00",
        name: "나리타 공항으로 이동",
        description: "약 1시간 30분",
      },
      {
        kind: "airport",
        time: "18:45",
        name: "나리타 공항 출발 · 귀국",
        description: "나리타 공항에 도착해 출국 수속을 진행합니다. 3박 4일의 아트 투어를 마칩니다.",
        address: "成田国際空港, Chiba",
        mapsUrl: NARITA_MAPS,
      },
    ],
  },
];

export const getDay = (n: number) => days.find((d) => d.dayNumber === n);
