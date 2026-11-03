import { MessageCircle } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

export function ExternalLinkButton({ href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl
                 bg-[#fee500] text-[#191919] font-bold text-sm active:scale-[0.98] transition"
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
