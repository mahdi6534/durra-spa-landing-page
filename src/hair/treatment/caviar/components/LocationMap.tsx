import { MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { MAPS_EMBED, MAPS_SHARE, PHONE_TEL } from "../data";

export default function LocationMap() {
  return (
    <section id="location" className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(238_191_202/0.4),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <MapPin className="h-3.5 w-3.5" />
            زورينا في عرين الدلال
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-snug text-ink sm:text-4xl sm:leading-snug">
            موقعنا سهل الوصول جداً..
            <br />
            <span className="text-rose-gradient">دقائق تفصلكِ عن الدلال</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-ink-soft sm:text-base sm:leading-9">
            في قلب الرياض بموقع واضح ومريح — حضّري نفسكِ للحضور فقط،
            واتركي لنا إعداد كل شيءٍ آخر.
          </p>
        </Reveal>

        <Reveal delay={160} className="relative mx-auto mt-12 max-w-4xl">
          <div className="conic-glow absolute -inset-4 rounded-[2.6rem] opacity-25 blur-xl" aria-hidden="true" />
          <div className="absolute -inset-1.5 rounded-[2.3rem] border border-rosegold-300/50" aria-hidden="true" />

          <div className="grain relative overflow-hidden rounded-[2rem] bg-white shadow-[0_44px_90px_-34px_rgb(127_66_77/0.45)] ring-1 ring-white/70">
            <iframe
              src={MAPS_EMBED}
              title="موقع درة سبا على خرائط جوجل — Dorh Spa Riyadh"
              width="600"
              height="450"
              className="block h-[380px] w-full border-0 sm:h-[440px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* overlay info card */}
            <div className="glass absolute bottom-4 right-4 left-4 flex flex-col gap-4 rounded-3xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3.5">
                <Logo compact className="h-10 w-auto shrink-0" />
                <div className="leading-snug">
                  <p className="font-display text-base font-bold text-ink">درة سبا — الرياض</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                    <MapPin className="h-3.5 w-3.5 text-rosegold-500" />
                    موقع يسهل الوصول إليه.. ومواقف مريحة بانتظاركِ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={MAPS_SHARE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-l from-rosegold-500 to-rosegold-400 px-5 py-2.5 text-sm font-black text-white shadow-charm transition-all hover:-translate-y-0.5 sm:flex-none sm:px-6"
                >
                  <Navigation className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ابدئي الاتجاهات
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-rosegold-300/70 bg-white/80 px-5 py-2.5 text-sm font-bold text-rosegold-600 backdrop-blur transition-all hover:bg-blush-50"
                >
                  <Phone className="h-4 w-4" />
                  اتصلي بنا
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
