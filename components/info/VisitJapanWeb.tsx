"use client";
import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

const fields = [
  { label: "우편번호", value: "171-8505" },
  { label: "도도부현", value: "TOKYO" },
  { label: "시구정촌명", value: "TOSHIMA-KU" },
  { label: "이후의 주소", value: "1-6-1 NISHIIKEBUKURO" },
  { label: "호텔명", value: "HOTEL METROPOLITAN TOKYO IKEBUKURO" },
  { label: "전화번호", value: "81339801111" },
];

const steps = [
  "비짓재팬웹에 회원가입 후 로그인합니다.",
  "본인 정보(여권)를 등록합니다.",
  "입국·귀국 예정을 등록합니다. 도착 항공편과 일본 내 연락처를 입력합니다.",
  "입국심사 · 세관신고 정보를 입력하면 QR코드가 발급됩니다.",
  "나리타 공항 입국심사와 세관에서 QR코드를 보여 주세요.",
];

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="w-full flex items-center gap-3 px-3 py-2.5 min-h-12 text-left active:bg-paper transition"
    >
      <span className="text-xs text-ink-faint w-20 shrink-0">{label}</span>
      <span className="flex-1 min-w-0 text-sm font-bold break-words">{value}</span>
      {copied ? (
        <span className="flex items-center gap-1 text-xs font-bold text-moss shrink-0">
          <Check className="h-3.5 w-3.5" />
          복사됨
        </span>
      ) : (
        <Copy className="h-4 w-4 text-ink-faint shrink-0" aria-label="복사" />
      )}
    </button>
  );
}

export function VisitJapanWeb() {
  return (
    <section className="bg-card rounded-2xl border border-line p-4 space-y-4">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] text-accent">출발 전 필수</p>
        <h2 className="font-serif font-bold text-lg mt-1">비짓재팬웹 (Visit Japan Web)</h2>
        <p className="text-sm text-ink-sub leading-relaxed mt-2">
          일본 정부가 운영하는 입국 준비 사이트입니다. 출발 전에 입국심사와 세관신고 정보를 미리 등록하면
          QR코드가 발급되어, 종이 신고서 없이 빠르게 입국할 수 있습니다.
        </p>
      </div>

      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-2.5 text-sm">
            <span className="w-5 h-5 rounded-full bg-accent-soft text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="leading-relaxed">{s}</span>
          </li>
        ))}
      </ol>

      <div>
        <h3 className="text-sm font-bold">일본 내 연락처 입력값</h3>
        <p className="text-xs text-ink-faint mt-0.5">호텔 메트로폴리탄 이케부쿠로 기준 · 누르면 복사됩니다</p>
        <div className="mt-2 rounded-xl border border-line divide-y divide-line overflow-hidden">
          {fields.map((f) => (
            <CopyRow key={f.label} {...f} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <a
          href="https://www.vjw.digital.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl bg-ink text-paper font-bold text-sm active:scale-[0.98] transition"
        >
          비짓재팬웹 바로가기
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href="https://cafe.naver.com/amateurmagician/95497"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl border border-ink/15 bg-card text-ink font-bold text-sm active:scale-[0.98] transition"
        >
          등록 방법 자세히 보기 (네이버 카페)
          <ExternalLink className="h-4 w-4 text-ink-faint" />
        </a>
      </div>
    </section>
  );
}
