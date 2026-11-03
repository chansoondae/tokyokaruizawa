import { HeroBanner } from "@/components/home/HeroBanner";
import { DayHighlightCard } from "@/components/home/DayHighlightCard";
import { TourSummaryCard } from "@/components/home/TourSummaryCard";
import { InclusionAccordion } from "@/components/home/InclusionAccordion";
import { ContactCTA } from "@/components/home/ContactCTA";
import { days } from "@/lib/itinerary";

export default function HomePage() {
  return (
    <div className="space-y-6 px-4 py-6">
      <HeroBanner />

      <section className="space-y-2.5">
        <h2 className="font-serif font-bold text-lg px-1">일정 한눈에 보기</h2>
        {days.map((d) => (
          <DayHighlightCard
            key={d.dayNumber}
            day={d.dayNumber}
            weekday={d.weekday}
            region={d.region}
            spots={d.summary}
          />
        ))}
      </section>

      <TourSummaryCard />
      <InclusionAccordion />
      <ContactCTA />
    </div>
  );
}
