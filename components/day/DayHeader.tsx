import { ArrowRight } from "lucide-react";

interface Props {
  dayNumber: number;
  weekday: string;
  region: string;
  transport: string;
  summary: string[];
}

export function DayHeader({ dayNumber, weekday, region, transport, summary }: Props) {
  return (
    <header className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-accent">DAY {dayNumber}</p>
          <h1 className="font-serif font-bold text-3xl mt-1">{weekday}</h1>
          <p className="text-sm text-ink-sub mt-1">2026년 11월 · {region}</p>
        </div>
        <span className="font-serif font-bold text-6xl leading-none text-line select-none" aria-hidden>
          {String(dayNumber).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-ink border-y border-line py-3">
        {summary.map((s, i) => (
          <span key={s} className="flex items-center gap-1.5">
            {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-ink-faint" />}
            <span className="font-medium">{s}</span>
          </span>
        ))}
      </div>

      <p className="inline-flex items-center rounded-full bg-moss-soft text-moss text-sm font-semibold px-3 py-1.5">
        {transport}
      </p>
    </header>
  );
}
