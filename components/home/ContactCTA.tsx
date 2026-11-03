import { PhoneButton } from "@/components/common/PhoneButton";
import { ExternalLinkButton } from "@/components/common/ExternalLinkButton";

export function ContactCTA() {
  return (
    <section className="bg-card rounded-2xl border border-line p-4 space-y-3">
      <div>
        <h2 className="font-serif font-bold text-lg">인솔자 연락처</h2>
        <p className="text-sm text-ink-sub mt-1">궁금하신 사항은 언제든 연락해 주세요.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        <PhoneButton phone="010-5663-5153" label="서찬수(차순) 010-5663-5153" />
        <ExternalLinkButton href="http://pf.kakao.com/_gIxlNb/chat" label="카카오채널 아트프렌즈" />
      </div>
    </section>
  );
}
