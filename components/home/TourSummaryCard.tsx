import { Calendar, User, Bus, Hotel, PlaneLanding, PlaneTakeoff } from "lucide-react";

const items = [
  { icon: Calendar, label: "기간", value: "2026년 11월 · 목~일 (3박 4일)" },
  { icon: PlaneLanding, label: "도착", value: "나리타 공항 · 1일차(목) T1 미팅 · 12:15 출발" },
  { icon: PlaneTakeoff, label: "출발", value: "나리타 공항 · 4일차(일) 18:45" },
  { icon: User, label: "인솔자", value: "차가운순대(서찬수)" },
  { icon: Bus, label: "교통편", value: "전용차량" },
  { icon: Hotel, label: "숙소", value: "호텔 인디고 카루이자와 1박 · 호텔 메트로폴리탄 이케부쿠로 2박" },
];

export function TourSummaryCard() {
  return (
    <section className="bg-card rounded-2xl border border-line p-4">
      <h2 className="font-serif font-bold text-lg mb-3">투어 요약</h2>
      <dl className="divide-y divide-line">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3 py-2.5">
            <Icon className="h-4 w-4 text-accent shrink-0" />
            <dt className="text-sm text-ink-faint w-14 shrink-0">{label}</dt>
            <dd className="text-sm font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
