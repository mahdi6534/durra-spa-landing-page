import { Phone } from "lucide-react";
import { WhatsAppIcon, Sparkle } from "./Icons";
import { PHONE_TEL, WA_DEFAULT } from "../data";
import Reveal from "./Reveal";

const captions = [
  "جاهزة للدلال؟ نحن بانتظاركِ",
  "خطوتكِ الأولى نحو شعرٍ يشبه الحرير",
  "سؤالكِ يهمّنا.. لا تترددي أبداً",
  "مقعدكِ في درة محفوظ.. حتى الآن",
  "قرارٌ صغير.. أثرٌ يدوم مع كل تسريحة",
];

let cursor = 0;

interface CtaRowProps {
  compact?: boolean;
}

/** signature dual-CTA placed between every section */
export default function CtaRow({ compact = false }: CtaRowProps) {
  const caption = captions[cursor++ % captions.length];

  return (
    <Reveal className={`relative z-10 mx-auto w-full max-w-4xl px-5 ${compact ? "py-7" : "py-10"}`}>
      <div className="flex flex-col items-center gap-5">
        <div className="flex w-full items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-rosegold-300/60 to-rosegold-400/70" />
          <Sparkle className="h-4 w-4 shrink-0 animate-pulse-soft text-rosegold-400" />
          <p className="shrink-0 font-display text-sm font-medium tracking-wide text-rosegold-500 sm:text-base">
            {caption}
          </p>
          <Sparkle className="h-4 w-4 shrink-0 animate-pulse-soft text-gold-400" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-rosegold-300/60 to-rosegold-400/70" />
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-l from-[#1faa5c] to-[#2bcf73] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_36px_-14px_rgb(31_170_92/0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-14px_rgb(31_170_92/0.75)] sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            احجزي موعدكِ عبر واتساب
          </a>
          <a
            href={PHONE_TEL}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-rosegold-300/70 bg-white/75 px-7 py-3.5 text-sm font-bold text-rosegold-600 shadow-[0_10px_30px_-14px_rgb(183_110_121/0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-rosegold-400 hover:bg-blush-50 hover:shadow-[0_20px_40px_-14px_rgb(183_110_121/0.5)] sm:text-base"
          >
            <Phone className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-rotate-12" />
            تحدثي معنا للاستفسار أو الحجز
          </a>
        </div>
      </div>
    </Reveal>
  );
}
