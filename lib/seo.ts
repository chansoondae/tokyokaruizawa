import type { Metadata } from "next";

export const siteName = "도쿄 · 가루이자와 아트 투어";

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 843,
  alt: "오르세 미술관전 · 터너전 포스터 — 도쿄 · 가루이자와 아트 투어",
};

// Child pages that set openGraph/twitter replace the parent's object entirely,
// so every page builds its tags through this helper to keep the shared image.
export function pageMetadata({ title, description, path }: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const shareTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName,
      title: shareTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [ogImage],
    },
  };
}
