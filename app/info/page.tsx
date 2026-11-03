import type { Metadata } from "next";
import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";
import { VisitJapanWeb } from "@/components/info/VisitJapanWeb";
import { pageMetadata } from "@/lib/seo";

const sections = [
  {
    emoji: "💴",
    title: "환전",
    content: "패키지 여행이라 숙박·교통·입장료·주요 식사가 포함되어 있어, 생각보다 돈 쓸 일이 많지 않습니다. 점심 자유식, 간식·음료, 개인 쇼핑 정도만 준비하시면 됩니다.\n\n일본은 아직 현금을 쓰는 곳이 많으니 엔화를 조금 환전해 가세요. 공항 환전보다 시중 은행이나 환전소가 유리할 수 있습니다.",
  },
  {
    emoji: "📱",
    title: "유심/로밍",
    content: "국내 통신사 데이터 로밍 또는 인천공항 유심 수령을 추천합니다. 일본 전역에서 데이터 사용이 가능한 상품을 선택하세요. 공항 수령 시 당일 출발 2시간 전까지 신청해야 합니다.",
  },
  {
    emoji: "🛡️",
    title: "여행자보험",
    content: "여행자보험은 투어 요금에 포함되어 있습니다. 보장 내용이 궁금하시면 인솔자에게 문의해 주세요.",
  },
  {
    emoji: "🔐",
    title: "귀중품 보관",
    content: "여권은 항상 안전하게 보관하세요. 호텔 룸 세이프(금고)나 프런트에 맡기는 것을 권장합니다. 분실 시 대사관 연락처: 주일 한국대사관 +81-3-3452-7611",
  },
  {
    emoji: "👕",
    title: "옷차림",
    content: "11월 도쿄는 선선한 가을 날씨로, 낮 15°C 안팎에 아침저녁은 10°C 이하로 내려갑니다. 고원 지대인 가루이자와는 훨씬 추워 아침저녁 영하 가까이 떨어질 수 있으니 따뜻한 외투와 겹쳐 입을 옷을 챙기세요. 미술관 관람이 많으므로 편한 신발 필수입니다.",
  },
  {
    emoji: "🍽️",
    title: "식사",
    content: "1~3일차 점심은 미술관 관람 일정으로 바쁘게 움직이게 되어, 포함 식사에서 빼고 자유식으로 진행합니다.\n\n1일차는 공항 미팅 후 바로 가루이자와까지 약 3시간을 이동합니다.\n· 늦게 도착하는 아시아나 탑승객: 기내식이 제공됩니다.\n· 먼저 LCC로 도착하시는 분: 미팅 전 공항에서 가볍게 간식을 미리 드시면 좋습니다.\n\n알레르기나 식이 제한이 있으신 분은 사전에 인솔자에게 알려주세요. 불포함 식사(개인 간식, 음료 등)는 개별 부담입니다.",
  },
  {
    emoji: "📞",
    title: "비상연락처",
    content: "인솔자 서찬수(차순): 010-5663-5153\n주일 한국대사관: +81-3-3452-7611\n일본 긴급: 110(경찰) / 119(소방·구급)",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "여행 정보",
  description: "비짓재팬웹 등록, 환전, 옷차림, 식사 등 출발 전에 꼭 알아야 할 여행 정보입니다.",
  path: "/info",
});

export default function InfoPage() {
  return (
    <div className="space-y-6 px-4 py-6">
      <header>
        <p className="text-xs font-bold tracking-[0.2em] text-accent">TRAVEL INFO</p>
        <h1 className="font-serif font-bold text-3xl mt-1">여행 정보</h1>
      </header>

      <section className="bg-card rounded-2xl border border-line p-4 space-y-3">
        <h2 className="font-serif font-bold text-lg">인솔자 연락처</h2>
        <div className="flex flex-col gap-2.5">
          <PhoneButton phone="010-5663-5153" label="서찬수(차순) 010-5663-5153" />
          <ExternalLinkButton href="http://pf.kakao.com/_gIxlNb/chat" label="카카오채널 아트프렌즈" />
        </div>
      </section>

      <VisitJapanWeb />

      <section className="bg-card rounded-2xl border border-line divide-y divide-line">
        {sections.map((s) => (
          <div key={s.title} className="p-4 space-y-1.5">
            <h3 className="font-bold text-base flex items-center gap-2">
              <span aria-hidden>{s.emoji}</span>
              {s.title}
            </h3>
            <p className="text-sm text-ink-sub leading-relaxed whitespace-pre-line">{s.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
