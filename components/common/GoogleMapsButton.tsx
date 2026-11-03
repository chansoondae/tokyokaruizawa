import { Navigation } from "lucide-react";

interface Props {
  url: string;
  label?: string;
}

export function GoogleMapsButton({ url, label = "구글맵 길찾기" }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-card px-4 py-2.5
                 text-sm font-semibold text-ink active:scale-95 active:bg-paper transition"
    >
      <Navigation className="h-4 w-4 text-accent" />
      {label}
    </a>
  );
}
