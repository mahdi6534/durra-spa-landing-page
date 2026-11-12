import { Globe, MapPin, Navigation, Phone } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import LocationMap from "./LocationMap";
import { MAPS_SHARE, PHONE_TEL, WA_DEFAULT } from "../data";
import Reveal from "./Reveal";

export default function FinalCta() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden">
      {/* closing call */}
      <div className="relative">
        <img
          src="/hair/treatment/caviar/images/spa-serenity.jpg"
          alt="أجواء درة سبا الهادئة"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-pearl via-pearl/92 to-blush-100/85"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <Logo className="mx-auto h-44 w-auto animate-float-slow drop-shadow-[0_18px_30px_rgb(199_169_117/0.35)] sm:h-56" />
            <h2 className="mt-8 font-display text-3xl font-bold leading-[1.5] text-ink sm:text-5xl sm:leading-[1.4]">
              قرارٌ واحد الآن..
              <br />
              <span className="text-rose-gradient">
                سيغيّر روتين يومكِ إلى الأبد
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
              خطوةٌ واحدة تفصلكِ عن شعرٍ كالحرير: لمعانٌ يخطف الأنظار، وانسيابية
              تتحدّى الرطوبة — وفريق درة بانتظاركِ بحفاوة.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="btn-shine group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#1faa5c] to-[#2bcf73] px-10 py-4.5 text-lg font-black text-white shadow-[0_22px_50px_-16px_rgb(31_170_92/0.65)] transition-all duration-300 hover:-translate-y-1 sm:w-auto"
              >
                <WhatsAppIcon className="h-5.5 w-5.5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                احجزي موعدكِ الآن عبر واتساب
              </a>
              <a
                href={PHONE_TEL}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-rosegold-300 bg-white/80 px-9 py-4 text-base font-bold text-rosegold-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-blush-50 sm:w-auto"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                تحدثي معنا للاستفسار أو الحجز
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* الخريطة — آخر الموقع */}
      <LocationMap />

      {/* footer strip */}
      <div className="relative border-t border-rosegold-200/60 bg-cream pb-32 pt-10 sm:pb-36">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <Logo compact className="h-10 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-latin text-xl tracking-[0.34em] text-gold-500">
                DORH
              </span>
              <span className="font-latin text-[11px] tracking-[0.62em] text-gold-400">
                SPA
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold text-ink-soft">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 transition-colors hover:text-rosegold-600"
            >
              <Phone className="h-4 w-4 text-rosegold-500" />
              <span dir="ltr" className="font-latin tracking-widest">
                053 968 7912
              </span>
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[#1faa5c]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#1faa5c]" />
              واتساب درة سبا
            </a>
            <a
              href="https://dorhspa.sa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-rosegold-600"
            >
              <Globe className="h-4 w-4 text-rosegold-500" />
              <span dir="ltr" className="font-latin tracking-wider">
                dorhspa.sa
              </span>
            </a>
            <a
              href={MAPS_SHARE}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-ink-muted transition-colors hover:text-rosegold-600"
            >
              <MapPin className="h-4 w-4 text-rosegold-400" />
              موقعنا على الخريطة — سهل الوصول
              <Navigation className="h-3.5 w-3.5 text-gold-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="h-px w-48 bg-gradient-to-l from-transparent via-rosegold-300/70 to-transparent" />

          <p className="text-center text-xs font-medium leading-6 text-ink-muted">
            © {currentYear} درة سبا — جميع الحقوق محفوظة
            <span className="mx-2 text-rosegold-300">•</span>
            صُنع بحبٍّ لدلالكِ
          </p>
        </div>
      </div>
    </footer>
  );
}
