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
  spots: Spot[];
}

const NARITA_MAPS = "https://www.google.com/maps/search/?api=1&query=成田国際空港";

export const days: Day[] = [
  {
    dayNumber: 1,
    weekday: "목요일",
    region: "나리타 · 가루이자와",
    transport: "✈️ 나리타 T1 미팅 12:30",
    summary: ["나리타 공항", "가루이자와", "자유시간"],
    breakfast: "불포함",
    lunch: "자유식",
    dinner: "호텔 만찬",
    accommodation: "호텔 인디고 카루이자와 (IHG)",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Indigo+Karuizawa",
    spots: [
      {
        kind: "airport",
        time: "12:30",
        name: "나리타 공항 T1 미팅",
        description: "11:30까지 나리타 공항에 도착하는 비행기로 입국합니다.\n\n12:30 나리타 공항 제1터미널(T1)에서 하나투어 현지 가이드 및 차가운순대와 미팅합니다.",
        address: "成田国際空港 第1ターミナル, Chiba",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=成田国際空港+第1ターミナル",
      },
      {
        kind: "move",
        time: "13:00",
        name: "가루이자와로 이동",
        description: "약 3시간",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "free",
        time: "16:00",
        name: "가루이자와 시내 자유시간",
        description: "취향에 맞춰 방문해 보세요.",
        options: ["안도 뮤지엄", "가루이자와 뉴아트 뮤지엄"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=軽井沢",
      },
      { kind: "meal", time: "저녁", name: "호텔 만찬" },
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
    dinner: "폴 보퀴즈 프렌치 디너",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    spots: [
      {
        kind: "museum",
        time: "09:30",
        name: "히로시 센주 미술관",
        description: "가루이자와의 히로시 센주 미술관을 관람합니다.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=軽井沢千住博美術館",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "museum",
        time: "13:00",
        name: "하라 뮤지엄 ARC",
        description: "하라 뮤지엄 ARC를 관람합니다.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=ハラ+ミュージアム+アーク",
      },
      { kind: "meal", time: "저녁", name: "폴 보퀴즈 프렌치 디너" },
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
    dinner: "스키야키",
    accommodation: "호텔 메트로폴리탄 이케부쿠로",
    hotelMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Tokyo+Ikebukuro",
    spots: [
      {
        kind: "museum",
        time: "10:00",
        name: "도쿄도 미술관",
        exhibition: "오르세 특별전",
        description: "우에노 공원 내 도쿄도 미술관에서 오르세 특별전을 관람합니다.",
        address: "8-36 Uenokoen, Taito City, Tokyo 110-0007",
        mapsUrl: "https://maps.app.goo.gl/eGVQ4mZYER1mi7E6A",
      },
      { kind: "meal", time: "점심", name: "자유식" },
      {
        kind: "museum",
        time: "13:30",
        name: "우에노모리 미술관",
        exhibition: "신시내티 특별전",
        description: "우에노 공원 내 우에노모리 미술관에서 신시내티 특별전을 관람합니다.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=上野の森美術館",
      },
      {
        kind: "museum",
        time: "15:30",
        name: "국립신미술관",
        exhibition: "루브르 특별전",
        description: "롯폰기의 국립신미술관에서 루브르 특별전을 관람합니다.",
        address: "7 Chome-22-2 Roppongi, Minato City, Tokyo 106-8558",
        imagePath: "/images/spot-1-6.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Chome-22-2+Roppongi,+Minato+City,+Tokyo+106-8558",
      },
      { kind: "meal", time: "저녁", name: "스키야키" },
    ],
  },
  {
    dayNumber: 4,
    weekday: "일요일",
    region: "도쿄 · 귀국",
    transport: "✈️ 나리타 출발 18:30",
    summary: ["솜포 미술관", "국립서양미술관", "나리타 공항"],
    breakfast: "호텔식",
    lunch: "스시정식",
    dinner: "기내식",
    accommodation: "귀국",
    hotelMapsUrl: "",
    spots: [
      {
        kind: "museum",
        time: "10:00",
        name: "솜포 미술관",
        exhibition: "알베르 마르케 특별전",
        description: "신주쿠의 솜포 미술관에서 알베르 마르케 특별전을 관람합니다.\n\n🌻 상설 전시 · 반 고흐 <해바라기>도 함께 관람합니다.",
        address: "1 Chome-26-1 Nishishinjuku, Shinjuku City, Tokyo 160-0023",
        mapsUrl: "https://maps.app.goo.gl/o9QZba5NUw8gpxsb8",
      },
      { kind: "meal", time: "점심", name: "스시정식" },
      {
        kind: "museum",
        time: "13:30",
        name: "국립서양미술관",
        exhibition: "터너 특별전",
        description: "우에노의 국립서양미술관에서 터너 특별전을 관람합니다.",
        address: "7-7 Uenokoen, Taito City, Tokyo 110-0007",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7-7+Uenokoen,+Taito+City,+Tokyo+110-0007",
      },
      {
        kind: "move",
        time: "15:30",
        name: "나리타 공항으로 이동",
        description: "약 1시간 30분",
      },
      {
        kind: "airport",
        time: "18:30",
        name: "나리타 공항 출발 · 귀국",
        description: "나리타 공항에 도착해 출국 수속을 진행합니다. 3박 4일의 아트 투어를 마칩니다.",
        address: "成田国際空港, Chiba",
        mapsUrl: NARITA_MAPS,
      },
    ],
  },
];

export const getDay = (n: number) => days.find((d) => d.dayNumber === n);
