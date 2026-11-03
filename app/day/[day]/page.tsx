import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayHeader } from "@/components/day/DayHeader";
import { TimelineItem } from "@/components/day/TimelineItem";
import { MealInfo } from "@/components/day/MealInfo";
import { days, getDay } from "@/lib/itinerary";
import { pageMetadata } from "@/lib/seo";

const imageExists = (imagePath?: string) =>
  !!imagePath && existsSync(path.join(process.cwd(), "public", imagePath));

export function generateStaticParams() {
  return days.map((d) => ({ day: String(d.dayNumber) }));
}

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }): Promise<Metadata> {
  const { day } = await params;
  const data = getDay(parseInt(day, 10));
  if (!data) return {};
  const title = `${data.dayNumber}일차 ${data.weekday} · ${data.region}`;
  const description = data.summary.join(" → ");
  return pageMetadata({ title, description, path: `/day/${data.dayNumber}` });
}

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const data = getDay(parseInt(dayParam, 10));

  if (!data) notFound();

  const prev = getDay(data.dayNumber - 1);
  const next = getDay(data.dayNumber + 1);

  return (
    <div className="space-y-8 px-4 py-6">
      <DayHeader
        dayNumber={data.dayNumber}
        weekday={data.weekday}
        region={data.region}
        transport={data.transport}
        summary={data.summary}
      />

      <section>
        {data.spots.map((spot, i) => (
          <TimelineItem
            key={i}
            spot={spot}
            hasImage={imageExists(spot.imagePath)}
            isLast={i === data.spots.length - 1}
          />
        ))}
      </section>

      <MealInfo
        breakfast={data.breakfast}
        lunch={data.lunch}
        dinner={data.dinner}
        accommodation={data.accommodation}
        hotelMapsUrl={data.hotelMapsUrl}
      />

      <nav className="no-print grid grid-cols-2 gap-3">
        {prev ? (
          <Link href={`/day/${prev.dayNumber}`} className="flex items-center gap-2 rounded-2xl border border-line bg-card p-3 active:scale-[0.98] transition">
            <ChevronLeft className="h-4 w-4 text-ink-faint" />
            <span>
              <span className="block text-xs text-ink-faint">이전</span>
              <span className="text-sm font-bold">{prev.dayNumber}일차</span>
            </span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/day/${next.dayNumber}`} className="flex items-center justify-end gap-2 rounded-2xl border border-line bg-card p-3 text-right active:scale-[0.98] transition">
            <span>
              <span className="block text-xs text-ink-faint">다음</span>
              <span className="text-sm font-bold">{next.dayNumber}일차</span>
            </span>
            <ChevronRight className="h-4 w-4 text-ink-faint" />
          </Link>
        )}
      </nav>
    </div>
  );
}
