"use client";
import Link from "next/link";
import { useFontSize } from "@/components/FontSizeProvider";
import { Minus, Plus, Printer } from "lucide-react";

const iconButton =
  "w-10 h-10 rounded-full flex items-center justify-center transition text-ink-sub active:bg-line disabled:text-line";

export function TopBar() {
  const { step, increase, decrease } = useFontSize();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line h-14">
      <div className="max-w-lg mx-auto h-full flex items-center justify-between pl-4 pr-2">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-accent text-white font-serif font-bold text-sm flex items-center justify-center">
            藝
          </span>
          <span className="font-serif font-bold text-base tracking-tight">아트 투어</span>
        </Link>
        <div className="flex items-center">
          <span className="text-xs text-ink-faint mr-1">글자</span>
          <button onClick={decrease} disabled={step === 0} className={iconButton} aria-label="글자 작게">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={increase} disabled={step === 4} className={iconButton} aria-label="글자 크게">
            <Plus className="h-4 w-4" />
          </button>
          <span className="w-px h-5 bg-line mx-1" />
          <button onClick={() => window.print()} className={iconButton} aria-label="인쇄 / PDF 저장">
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
