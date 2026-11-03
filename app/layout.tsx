import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { FontSizeProvider } from "@/components/FontSizeProvider";

const notoSans = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  preload: false,
});

const notoSerif = Noto_Serif_KR({
  weight: ["500", "700"],
  variable: "--font-noto-serif",
  preload: false,
});

export const metadata: Metadata = {
  title: "도쿄 · 가루이자와 아트 투어",
  description: "2026년 11월 목~일 3박 4일 · 몽트래블 아트 투어 일정표",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f1e8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <FontSizeProvider>
          <div className="max-w-lg mx-auto w-full relative">
            <TopBar />
            <main className="flex-1 pb-24 pt-14">
              {children}
            </main>
            <BottomNav />
          </div>
        </FontSizeProvider>
      </body>
    </html>
  );
}
