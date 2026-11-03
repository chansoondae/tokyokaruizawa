import { Check, X } from "lucide-react";

const included = ["숙박 3박", "전용차량 이용", "미술관 입장료", "식사 (1~3일차 중식 제외)", "여행자보험", "TAX 포함"];
const excluded = ["국제 항공권", "일본 내 개인 교통비", "매너팁", "개인 쇼핑비"];

function Section({ title, items, included }: { title: string; items: string[]; included: boolean }) {
  const Icon = included ? Check : X;
  return (
    <div>
      <h3 className={`text-sm font-bold mb-2 ${included ? "text-moss" : "text-accent"}`}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-1.5 text-sm text-ink-sub">
            <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${included ? "text-moss" : "text-accent/70"}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InclusionAccordion() {
  return (
    <section className="bg-card rounded-2xl border border-line p-4">
      <h2 className="font-serif font-bold text-lg mb-4">포함 · 불포함</h2>
      <div className="grid grid-cols-2 gap-4">
        <Section title="포함" items={included} included />
        <Section title="불포함" items={excluded} included={false} />
      </div>
    </section>
  );
}
