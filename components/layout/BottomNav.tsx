"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlaneLanding, Trees, Landmark, PlaneTakeoff, Info } from "lucide-react";

const tabs = [
  { href: "/day/1", icon: PlaneLanding, label: "1일차" },
  { href: "/day/2", icon: Trees, label: "2일차" },
  { href: "/day/3", icon: Landmark, label: "3일차" },
  { href: "/day/4", icon: PlaneTakeoff, label: "4일차" },
  { href: "/info", icon: Info, label: "정보" },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-line"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="max-w-lg mx-auto flex">
        {tabs.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`relative flex-1 flex flex-col items-center justify-center min-h-[60px] gap-1 text-xs transition-colors
                ${active ? "text-accent font-bold" : "text-ink-faint font-medium"}`}
            >
              {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-accent" />}
              <Icon className="h-5 w-5" strokeWidth={active ? 2.2 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
