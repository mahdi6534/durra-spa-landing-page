import { useEffect, useRef, useState } from "react";
import { AlarmClock, CalendarHeart, Phone, Sparkles } from "lucide-react";
import { WhatsAppIcon, Sparkle } from "./Icons";
import { PHONE_TEL, WA_DEFAULT } from "../data";
import Reveal from "./Reveal";

function SlotsMeter() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass mx-auto mt-10 w-full max-w-xl rounded-[1.8rem] px-6 py-6 sm:px-9">
      <div className="flex items-center justify-between gap-3 text-white">
        <span className="flex items-center gap-2 text-sm font-bold sm:text-base">
          <CalendarHeart className="h-5 w-5" />
          مواعيد هذا الأسبوع
        </span>
        <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-black tabular-nums ring-1 ring-white/40 sm:text-sm" dir="ltr">
          82%
        </span>
      </div>

      <div className="mt-4 h-3.5 overflow-hidden rounded-full bg-white/25 ring-1 ring-white/30">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#fff7ed,#ffe4e6_55%,#ffffff)] shadow-[0_0_18px_rgb(255_255_255/0.8)] transition-[width] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: on ? "82%" : "8%" }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5" aria-label="حالة المقاعد">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgb(255_255_255/0.9)]" />
          ))}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-white bg-transparent" />
          </span>
        </div>
        <p className="text-xs font-bold text-white/95 sm:text-sm">
          متبقّي مقعدان فقط.. وجدولنا يمتلئ بسرعة
        </p>
      </div>
    </div>
  );
}

export default function Urgency() {
  return (
    <section className="relative px-3 py-8 sm:px-6 sm:py-12">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#8a4752_0%,#b76e79_32%,#cd8378_58%,#dda08d_80%,#c9838b_100%)] bg-[length:200%_200%] px-6 py-16 shadow-[0_50px_110px_-40px_rgb(127_66_77/0.65)] animate-shimmer sm:px-12 sm:py-20">
        {/* decor */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[rgb(255_228_230/0.18)] blur-2xl" />
          <Sparkle className="absolute right-[12%] top-14 h-6 w-6 animate-pulse-soft text-white/70" />
          <Sparkle className="absolute left-[10%] top-1/3 h-4 w-4 animate-pulse-soft text-white/50" style={{ animationDelay: "1.4s" }} />
          <Sparkle className="absolute bottom-16 right-[22%] h-5 w-5 animate-pulse-soft text-white/60" style={{ animationDelay: "2.4s" }} />
          <Sparkle className="absolute left-[28%] bottom-24 h-3 w-3 animate-pulse-soft text-white/40" style={{ animationDelay: "0.8s" }} />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-xs font-bold tracking-wide text-white ring-1 ring-white/35 backdrop-blur-sm sm:text-sm">
              <AlarmClock className="h-4 w-4" />
              لحظة القرار
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-snug text-white drop-shadow-[0_4px_18px_rgb(90_35_45/0.35)] sm:text-5xl sm:leading-[1.5]">
              وقتكِ في الصالون محسوب..
              <br />
              ومقاعدنا <span className="text-[#ffe9d6]">محدودة!</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/95 sm:text-lg sm:leading-9">
              نعلم أن وقتكِ ضيق، لذا نضمن لكِ تجربةً مريحة ومنظمة. ولأننا نستخدم مواد حصرية
              مستوردة بكمياتٍ دقيقة، ولأننا نمنح كل عميلةٍ وقتها الكامل.. فإن جدول المواعيد
              يمتلئ بسرعة فائقة.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <SlotsMeter />
          </Reveal>

          <Reveal delay={260}>
            <p className="mx-auto mt-9 max-w-xl font-display text-lg font-semibold leading-8 text-white sm:text-xl sm:leading-9">
              لا تترددي — قرارٌ واحد الآن سيغيّر روتين يومكِ،
              <br className="hidden sm:block" />
              ويمنحكِ شعراً كالحرير بأقل مجهود.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="btn-shine group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1faa5c] px-9 py-4 text-lg font-black text-white shadow-[0_20px_45px_-14px_rgb(0_0_0/0.45)] ring-2 ring-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[#23c368] sm:w-auto"
              >
                <WhatsAppIcon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                احجزي مقعدكِ الآن عبر واتساب
              </a>
              <a
                href={PHONE_TEL}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-rosegold-600 sm:w-auto"
              >
                <Phone className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                <span dir="ltr" className="font-latin tracking-widest">0539687912</span>
              </a>
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-white/85 sm:text-sm">
              <Sparkles className="h-4 w-4" />
              موعدكِ يُحجز فوراً — بدون قوائم انتظار طويلة
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
