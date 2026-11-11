import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { PHONE_TEL, WA_DEFAULT } from "../data";

export default function StickyBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="pointer-events-auto animate-rise pb-[env(safe-area-inset-bottom)] sm:pb-4" style={{ animationDelay: "600ms" }}>
        <div className="mx-0 overflow-hidden border-t border-rosegold-200/70 bg-white/85 shadow-[0_-16px_44px_-18px_rgb(183_110_121/0.5)] backdrop-blur-xl sm:mx-auto sm:mb-0 sm:max-w-xl sm:rounded-full sm:border">
          <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-2.5">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-[#1faa5c] to-[#2bcf73] py-3 text-sm font-black text-white shadow-[0_12px_28px_-12px_rgb(31_170_92/0.7)] transition-all hover:brightness-105 sm:rounded-full sm:py-3"
            >
              <span className="relative flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <WhatsAppIcon className="relative h-5 w-5 transition-transform group-hover:rotate-12" />
              </span>
              احجزي عبر واتساب
            </a>
            <a
              href={PHONE_TEL}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-rosegold-500 to-rosegold-400 py-3 text-sm font-black text-white shadow-[0_12px_28px_-12px_rgb(183_110_121/0.7)] transition-all hover:brightness-105 sm:rounded-full sm:py-3"
            >
              <Phone className="h-4.5 w-4.5 transition-transform group-hover:-rotate-12" />
              تحدثي معنا الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
