import { CalendarIcon, PhoneIcon, RoseFlower, WhatsAppIcon } from "./Icons";
import { FRESHA_LINK, PHONE_TEL, WHATSAPP_LINK } from "@/lib/links";
import { trackContact } from "@/lib/track";

const PLACEMENT = "الشريط الثابت";

/**
 * Warm rose-cream floating booking bar that follows the guest while she browses.
 * Order (RTL): rose flower + label → Fresha (primary) → WhatsApp → Call.
 */
export default function StickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] sm:px-6"
      role="region"
      aria-label="شريط الحجز السريع"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-[1.6rem] border border-blush-200/80 bg-gradient-to-l from-cream-50 via-blush-50 to-blush-100 p-2 shadow-[0_-4px_40px_-10px_rgba(183,110,121,0.45),0_18px_40px_-20px_rgba(63,46,42,0.35)] backdrop-blur-xl sm:gap-3 sm:p-2.5">
        {/* Rose + label */}
        <div className="flex items-center gap-2 ps-1 pe-1 sm:pe-2">
          <RoseFlower className="h-10 w-10 shrink-0 animate-pulse-soft sm:h-12 sm:w-12" />
          <div className="hidden leading-tight md:block">
            <div className="font-display text-base font-bold text-cocoa-900">احجزي دلالكِ الآن</div>
            <div className="text-[11px] text-cocoa-500">موعدكِ على بُعد لمسة</div>
          </div>
        </div>

        {/* Fresha – primary */}
        <a
          href={FRESHA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="احجزي دلالكِ عبر Fresha"
          onClick={() => trackContact("fresha", { placement: PLACEMENT })}
          data-channel="fresha"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-l from-blush-700 via-blush-600 to-blush-500 py-2.5 pe-2.5 ps-4 text-sm font-bold text-cream-50 shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-105 sm:py-3 sm:text-base"
        >
          <CalendarIcon className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap">احجزي دلالكِ</span>
          <span
            className="rounded-full bg-cream-50 px-2 py-[4px] font-latin text-[11px] font-semibold leading-none tracking-wide text-blush-700 sm:px-2.5 sm:text-xs"
            dir="ltr"
          >
            Fresha
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact("whatsapp", { placement: PLACEMENT })}
          data-channel="whatsapp"
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-3.5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:px-5"
          aria-label="تواصلي عبر واتساب"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="hidden sm:inline">واتساب</span>
        </a>

        {/* Call */}
        <a
          href={PHONE_TEL}
          onClick={() => trackContact("phone", { placement: PLACEMENT })}
          data-channel="phone"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/70 bg-white text-cocoa-800 transition-all hover:-translate-y-0.5 hover:border-blush-500 hover:text-blush-700 sm:h-12 sm:w-12"
          aria-label="اتصال مباشر"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
