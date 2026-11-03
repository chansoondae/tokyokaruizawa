import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  day: number;
  weekday: string;
  region: string;
  spots: string[];
}

export function DayHighlightCard({ day, weekday, region, spots }: Props) {
  return (
    <Link
      href={`/day/${day}`}
      className="flex items-center gap-4 bg-card rounded-2xl border border-line p-4 active:scale-[0.98] transition-transform"
    >
      <div className="w-12 shrink-0 text-center">
        <p className="text-xs font-bold tracking-[0.15em] text-accent">DAY</p>
        <p className="font-serif font-bold text-3xl leading-none mt-0.5">{day}</p>
      </div>
      <div className="flex-1 min-w-0 border-l border-line pl-4">
        <p className="text-xs text-ink-faint">{weekday} · {region}</p>
        <p className="flex flex-wrap gap-x-1 text-sm font-bold mt-1 leading-snug">
          {spots.map((s, i) => (
            <span key={s} className="whitespace-nowrap">{s}{i < spots.length - 1 && " ·"}</span>
          ))}
        </p>
      </div>
      <ChevronRight className="h-4 w-4 text-ink-faint shrink-0" />
    </Link>
  );
}
