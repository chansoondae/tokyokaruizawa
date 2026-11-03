const exhibitions = ["오르세", "루브르", "터너", "신시내티", "알베르 마르케", "고흐 〈해바라기〉"];

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-ink text-paper px-6 pt-8 pb-7">
      <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-accent" aria-hidden />
      <div className="absolute right-8 top-24 w-16 h-16 rounded-full border border-paper/25" aria-hidden />

      <div className="relative">
        <p className="text-[0.7rem] font-bold tracking-[0.25em] text-paper/70">MONG TRAVEL · ART TOUR 2026</p>
        <h1 className="font-serif font-bold text-[2rem] leading-tight mt-4">
          가루이자와에서<br />도쿄까지,<br />미술관 여행
        </h1>
        <p className="tabular mt-4 text-sm text-paper/80">
          2026년 11월 · 목 — 일 <span className="text-paper/40 mx-1">|</span> 3박 4일
        </p>

        <div className="mt-6 pt-4 border-t border-paper/15">
          <p className="text-xs text-paper/60 mb-2">이번 여행의 특별전</p>
          <ul className="flex flex-wrap gap-1.5">
            {exhibitions.map((e) => (
              <li key={e} className="text-xs font-medium px-2.5 py-1 rounded-full bg-paper/10 text-paper">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
