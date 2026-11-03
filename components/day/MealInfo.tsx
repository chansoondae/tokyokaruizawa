import { BedDouble } from "lucide-react";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";

interface Props {
  breakfast: string;
  lunch: string;
  dinner: string;
  accommodation: string;
  hotelMapsUrl: string;
}

export function MealInfo({ breakfast, lunch, dinner, accommodation, hotelMapsUrl }: Props) {
  const meals = [
    { label: "조식", value: breakfast },
    { label: "중식", value: lunch },
    { label: "석식", value: dinner },
  ];
  const returning = accommodation === "귀국";

  return (
    <section className="bg-card rounded-2xl border border-line overflow-hidden">
      <h2 className="font-serif font-bold text-base px-4 pt-4">오늘의 식사 · 숙소</h2>
      <dl className="grid grid-cols-3 divide-x divide-line mt-3 border-y border-line">
        {meals.map(({ label, value }) => (
          <div key={label} className="px-2 py-3 text-center">
            <dt className="text-xs text-ink-faint">{label}</dt>
            <dd className={`text-sm font-bold mt-1 ${value === "미정" ? "text-ink-faint font-medium" : ""}`}>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="p-4 flex items-center gap-3">
        <BedDouble className="h-5 w-5 text-moss shrink-0" />
        <div className="flex-1">
          <p className="text-xs text-ink-faint">{returning ? "숙박" : "숙소"}</p>
          <p className={`text-sm font-bold ${accommodation === "미정" ? "text-ink-faint font-medium" : ""}`}>
            {returning ? "없음 · 귀국일" : accommodation}
          </p>
        </div>
        {!returning && hotelMapsUrl && <GoogleMapsButton url={hotelMapsUrl} label="위치" />}
      </div>
    </section>
  );
}
