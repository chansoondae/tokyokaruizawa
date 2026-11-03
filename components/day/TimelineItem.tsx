import Image from "next/image";
import { Bus, MapPin, Plane, Utensils } from "lucide-react";
import { GoogleMapsButton } from "@/components/common/GoogleMapsButton";
import type { Spot } from "@/lib/itinerary";

interface Props {
  spot: Spot;
  hasImage: boolean;
  isLast: boolean;
}

const kindLabel = {
  airport: "AIRPORT",
  museum: "MUSEUM",
  free: "FREE TIME",
} as const;

function Rail({ time, dot, isLast, children }: {
  time: string;
  dot: "major" | "minor";
  isLast: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[3rem_0.75rem_1fr] gap-x-2.5">
      <span className={`tabular text-right leading-6 ${dot === "major" ? "font-bold text-ink text-sm" : "text-ink-faint text-xs"}`}>
        {time}
      </span>
      <div className="flex flex-col items-center">
        <span className="h-6 flex items-center">
          <span className={`block rounded-full ${dot === "major" ? "w-3 h-3 bg-accent ring-4 ring-accent-soft" : "w-1.5 h-1.5 bg-ink-faint"}`} />
        </span>
        {!isLast && <span className="flex-1 w-px bg-line" />}
      </div>
      <div className={isLast ? "" : "pb-6"}>{children}</div>
    </div>
  );
}

export function TimelineItem({ spot, hasImage, isLast }: Props) {
  if (spot.kind === "meal") {
    return (
      <Rail time={spot.time} dot="minor" isLast={isLast}>
        <div className="flex items-center gap-2.5 text-sm leading-6">
          <Utensils className="h-4 w-4 text-accent shrink-0" />
          <span className="font-bold">{spot.name}</span>
        </div>
      </Rail>
    );
  }

  if (spot.kind === "move") {
    return (
      <Rail time={spot.time} dot="minor" isLast={isLast}>
        <div className="flex items-start gap-2.5 text-sm rounded-xl border border-dashed border-line px-3 py-2.5">
          <Bus className="h-4 w-4 text-moss shrink-0 mt-0.5" />
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-medium">{spot.name}</span>
            {spot.description && <span className="text-ink-faint text-xs">{spot.description}</span>}
          </span>
        </div>
      </Rail>
    );
  }

  return (
    <Rail time={spot.time} dot="major" isLast={isLast}>
      <article className="bg-card rounded-2xl overflow-hidden border border-line shadow-[0_1px_2px_rgb(31_27_22/0.04)]">
        {hasImage && spot.imagePath && (
          <div className="relative w-full aspect-[16/10]">
            <Image src={spot.imagePath} alt={spot.name} fill sizes="(max-width: 512px) 100vw, 512px" className="object-cover" />
          </div>
        )}
        <div className="p-4 space-y-3">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] text-accent">
              {spot.kind === "airport" && <Plane className="h-3.5 w-3.5" />}
              {kindLabel[spot.kind]}
            </p>
            <h3 className="font-serif font-bold text-xl mt-1 leading-snug">{spot.name}</h3>
            {spot.exhibition && (
              <p className="mt-2 inline-block border-l-2 border-accent pl-2 text-base font-bold text-ink">
                {spot.exhibition}
              </p>
            )}
          </div>

          {spot.description && (
            <p className="text-sm text-ink-sub leading-relaxed whitespace-pre-line">{spot.description}</p>
          )}

          {spot.options && (
            <ul className="space-y-1.5">
              {spot.options.map((o) => (
                <li key={o} className="flex items-center gap-2 text-sm font-medium bg-paper rounded-lg px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          )}

          {spot.address && (
            <p className="flex items-start gap-1.5 text-xs text-ink-faint">
              <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>{spot.address}</span>
            </p>
          )}

          {spot.mapsUrl && <GoogleMapsButton url={spot.mapsUrl} />}
        </div>
      </article>
    </Rail>
  );
}
