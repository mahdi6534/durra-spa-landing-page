import { ChevronDown, Flower2, Gem, MapPin, Navigation, Phone, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { WhatsAppIcon, Sparkle, Petal } from "./Icons";
import { MAPS_SHARE, PHONE_TEL, WA_DEFAULT } from "../data";
import Logo from "./Logo";
import VideoEmbed from "./VideoEmbed";

const petals = [
  { left: "6%", size: 14, delay: "0s", dur: "13s", color: "#eebfca" },
  { left: "16%", size: 10, delay: "3s", dur: "16s", color: "#dda08d" },
  { left: "28%", size: 16, delay: "6s", dur: "14s", color: "#f5d6de" },
  { left: "42%", size: 9, delay: "1.5s", dur: "18s", color: "#e9d5b3" },
  { left: "58%", size: 13, delay: "4.5s", dur: "15s", color: "#ecc0b4" },
  { left: "70%", size: 11, delay: "8s", dur: "17s", color: "#eebfca" },
  { left: "82%", size: 15, delay: "2.2s", dur: "14.5s", color: "#f0d9de" },
  { left: "92%", size: 9, delay: "7s", dur: "19s", color: "#d9bf93" },
];

function RingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-28 w-28 sm:h-36 sm:w-36 ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slower">
        <defs>
          <path id="ringPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-rosegold-500" fontSize="10.5" letterSpacing="3.5" fontFamily="Tajawal, sans-serif" fontWeight="700">
          <textPath href="#ringPath">إكسير الكافيار النادر ✦ درة سبا ✦ DORH SPA ✦</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <Sparkle className="h-6 w-6 animate-pulse-soft text-gold-400" />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-10 sm:pt-32 lg:pt-36">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blush-100 via-pearl to-pearl" />
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(238_191_202/0.55),transparent_65%)] blur-2xl" />
        <div className="absolute top-1/3 left-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(233_213_179/0.5),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-14%] right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(221_160_141/0.35),transparent_65%)] blur-2xl" />
        {petals.map((p, i) => (
          <Petal
            key={i}
            className="absolute -top-6 animate-petal"
            style={{ left: p.left, width: p.size, height: p.size, color: p.color, animationDelay: p.delay, animationDuration: p.dur, opacity: 0.75 }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        {/* ---- the hook copy ---- */}
        <div className="relative text-center lg:text-start">
          <div className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-rosegold-300/50 bg-white/70 px-5 py-2 shadow-[0_10px_30px_-16px_rgb(183_110_121/0.5)] backdrop-blur-md" style={{ animationDelay: "80ms" }}>
            <Logo compact className="h-6 w-auto" />
            <span className="text-sm font-bold text-rosegold-600">درة سبا تُقدّم طقسها الأشهر</span>
            <Sparkles className="h-4 w-4 text-gold-400" />
          </div>

          <h1
            className="animate-rise mt-6 font-display text-4xl font-bold leading-[1.32] text-ink sm:text-5xl sm:leading-[1.28] lg:text-[3.3rem] lg:leading-[1.26]"
            style={{ animationDelay: "180ms" }}
          >
            السر الذي تخفيه <span className="text-rose-gradient">النجمات</span>
            <br />
            وراء كواليس الكاميرات..
            <br />
            <span className="relative inline-block">
              الآن <span className="text-rose-gradient">بين يديكِ!</span>
              <svg viewBox="0 0 220 14" className="absolute -bottom-2 right-0 h-3.5 w-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 10 C 60 2, 150 2, 216 8" fill="none" stroke="#dda08d" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
              </svg>
            </span>
          </h1>

          <p className="animate-rise mx-auto mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9 lg:mx-0" style={{ animationDelay: "300ms" }}>
            اكتشفي <span className="font-bold text-rosegold-600">«إكسير الكافيار النادر»</span>.. جلسة الدلال التي تُعيد
            شعركِ سنواتٍ إلى الوراء بلمعانٍ زجاجي وانسيابيةٍ تتحدى أصعب الظروف —{" "}
            <span className="font-bold text-ink">وشاهدي السحر بنفسكِ في الفيديو بجانبكِ.</span>
          </p>

          <div className="animate-rise mt-8 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center" style={{ animationDelay: "420ms" }}>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-l from-rosegold-500 via-rosegold-400 to-rosegold-300 px-9 py-4 text-lg font-bold text-white shadow-charm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_-16px_rgb(183_110_121/0.6)] sm:w-auto"
            >
              <WhatsAppIcon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              اكتشفي السر الآن
            </a>
            <a
              href={PHONE_TEL}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-rosegold-300/70 bg-white/75 px-8 py-4 text-base font-bold text-rosegold-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-blush-50 sm:w-auto"
            >
              <Phone className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
              تحدثي معنا
            </a>
          </div>

          <ul className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start" style={{ animationDelay: "540ms" }}>
            {[
              { icon: Gem, label: "مواد مستوردة حصرية" },
              { icon: Flower2, label: "بلا روائح مزعجة" },
              { icon: ShieldCheck, label: "تقييم حالة شعركِ قبل البدء" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blush-100 text-rosegold-500 ring-1 ring-rosegold-200/70">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <a
            href={MAPS_SHARE}
            target="_blank"
            rel="noreferrer"
            className="animate-rise group mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-gold-300/60 bg-white/70 px-5 py-2.5 text-sm font-bold text-ink-soft shadow-[0_12px_34px_-18px_rgb(199_169_117/0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:bg-cream lg:mx-0"
            style={{ animationDelay: "660ms" }}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-b from-gold-300 to-gold-400 text-white shadow">
              <MapPin className="h-4 w-4" />
            </span>
            موقعنا سهل الوصول جداً — دقائق وتكونين بيننا
            <span className="inline-flex items-center gap-1.5 font-black text-rosegold-600 underline decoration-rosegold-300 decoration-2 underline-offset-4 transition-colors group-hover:text-rosegold-500">
              اضغطي للاتجاهات
              <Navigation className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* ---- the live proof: session video --- */}
        <div className="animate-rise relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]" style={{ animationDelay: "240ms" }}>
          <div className="conic-glow absolute -inset-5 rounded-[2.9rem] opacity-30 blur-2xl" aria-hidden="true" />
          <div className="absolute -inset-2.5 rounded-[2.6rem] border border-rosegold-300/50" aria-hidden="true" />

          <VideoEmbed className="rounded-[2.2rem]" />

          <span className="glass absolute -top-4 right-1/2 flex translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-black text-rosegold-700 shadow-card sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rosegold-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rosegold-500" />
            </span>
            جلسة حقيقية موثّقة — درة سبا
          </span>

          <span className="glass animate-float absolute top-16 -right-3 z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-ink shadow-card sm:-right-8">
            <Sparkles className="h-4 w-4 text-rosegold-500" />
            لمعان زجاجي
          </span>
          <span className="glass animate-float-slow absolute bottom-24 -left-3 z-10 flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-ink shadow-card sm:-left-8" style={{ animationDelay: "1.2s" }}>
            <Wind className="h-4 w-4 text-gold-500" />
            فوليوم وحيوية
          </span>

          <RingBadge className="absolute -bottom-10 -left-2 z-10 sm:-left-6" />
        </div>
      </div>

      <a href="#pricing" className="mx-auto mt-14 flex w-fit flex-col items-center gap-1 text-rosegold-400 transition-colors hover:text-rosegold-600" aria-label="انزلي للأسعار">
        <span className="text-xs font-bold tracking-wide">الأسعار والباقات أسفل الفيديو مباشرة</span>
        <ChevronDown className="h-5 w-5 animate-bounce-soft" />
      </a>
    </section>
  );
}
