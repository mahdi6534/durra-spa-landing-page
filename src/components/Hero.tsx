import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import heroPoster from "@/assets/images/hero-poster.jpg";
import Logo from "./Logo";
import {
  CalendarIcon,
  ChevronDown,
  MapPinIcon,
  SparkleIcon,
  WhatsAppIcon,
} from "./Icons";
import {
  DISTRICT,
  FRESHA_LINK,
  LANDMARK,
  MAPS_LINK,
  STREET,
  whatsappLink,
} from "@/lib/links";
import { trackContact } from "@/lib/track";

const WISTIA_MEDIA_ID = "kfpvnsi5ow";

/**
 * The Wistia web component is injected as raw HTML so that all attributes exist
 * on the element before the (async) player script upgrades it.
 */
const WISTIA_HTML = `<wistia-player media-id="${WISTIA_MEDIA_ID}" aspect="1.7777777777777777" autoplay muted silent-autoplay end-video-behavior="loop" fit-strategy="cover" big-play-button="false" controls-visible-on-load="false" play-bar-control="false" play-pause-control="false" play-pause-notifier="false" fullscreen-control="false" settings-control="false" volume-control="false" quality-control="false" playback-rate-control="false" copy-link-and-thumbnail="false" rounded-player="0" preload="auto"></wistia-player>`;

const VideoEmbed = memo(function VideoEmbed() {
  return (
    <div
      className="absolute inset-0"
      dangerouslySetInnerHTML={{ __html: WISTIA_HTML }}
    />
  );
});

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  hue: string;
};

function Petals() {
  const petals = useMemo<Petal[]>(() => {
    const hues = ["#F3C9C2", "#E8B4B8", "#F7DCD5", "#D9A3A8", "#F0D0CA"];
    return Array.from({ length: 12 }, (_, i) => ({
      left: (i * 8.3 + (i % 3) * 4) % 100,
      delay: -(i * 1.7) % 14,
      duration: 12 + (i % 5) * 2.2,
      size: 10 + (i % 4) * 4,
      drift: (i % 2 === 0 ? 1 : -1) * (30 + (i % 4) * 25),
      hue: hues[i % hues.length],
    }));
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block animate-petal"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.3,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--drift": `${p.drift}px`,
              background: `radial-gradient(circle at 30% 30%, #fff8f5 0%, ${p.hue} 55%, #c27c7a 100%)`,
              borderRadius: "70% 30% 70% 30% / 60% 40% 60% 40%",
              opacity: 0.8,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const RATIO = 16 / 9;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      let w = width;
      let h = width / RATIO;
      if (h < height) {
        h = height;
        w = height * RATIO;
      }
      setBox({ w: Math.ceil(w) + 2, h: Math.ceil(h) + 2 });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const videoStyle: CSSProperties = box
    ? {
        width: box.w,
        height: box.h,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }
    : { inset: 0 };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-cocoa-900 text-center"
    >
      {/* Poster fallback (behind the video) */}
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      {/* Wistia background video */}
      <div
        className="hero-video pointer-events-none absolute"
        style={videoStyle}
      >
        <VideoEmbed />
      </div>
      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cocoa-900/55 via-cocoa-900/25 to-cocoa-900/80" />
      <div className="pointer-events-none absolute inset-0 bg-blush-800/15 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-100 to-transparent" />
      <Petals />
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 pb-48 pt-28 sm:pb-52">
        <div className="reveal is-visible">
          <Logo
            tone="light"
            stacked
            className="drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
          />
        </div>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-cream-50/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cream-50 backdrop-blur-md sm:text-sm">
          <SparkleIcon className="h-4 w-4 text-gold-300" />
          ملاذٌ أنثويّ فاخر للسيدات فقط · {DISTRICT}، الرياض
        </span>

        <h1 className="font-display mt-6 text-5xl font-bold leading-[1.2] text-cream-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] text-balance sm:text-6xl md:text-7xl">
          هنا… تبدأ حكاية{" "}
          <span className="gold-text animate-shimmer">بريقكِ</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/90 text-balance sm:text-xl">
          اتركي العالم خلف الباب. بخارٌ دافئ، أيادٍ خبيرة، عطر الورد المغربي،
          ولمسات تُعيد إليكِ أنوثتكِ الأولى… لأنكِ لا تحجزين خدمة، بل تحجزين
          شعوراً لن تنسيه.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={FRESHA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="احجزي دلالكِ عبر Fresha"
            onClick={() => trackContact("fresha", { placement: "الواجهة" })}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-blush-700 via-blush-600 to-blush-400 py-3.5 pe-3 ps-7 text-base font-bold text-cream-50 shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(183,110,121,0.75)] sm:text-lg"
          >
            <CalendarIcon className="h-5 w-5" />
            احجزي دلالكِ
            <span
              className="rounded-full bg-cream-50 px-3 py-1.5 font-latin text-sm font-semibold leading-none tracking-wide text-blush-700"
              dir="ltr"
            >
              Fresha
            </span>
          </a>
          <a
            href={whatsappLink(
              "مرحباً درة سبا 🌸، أرغب باستشارة خبيرة الجمال قبل الحجز.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact("whatsapp", { placement: "الواجهة" })}
            className="inline-flex items-center gap-2 rounded-full border border-cream-50/40 bg-cream-50/10 px-7 py-4 text-base font-bold text-cream-50 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-cream-50/20 sm:text-lg"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
            استشيري خبيرة الجمال
          </a>
        </div>

        {/* Location card – so every guest knows exactly where we are */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact("maps", { placement: "الواجهة" })}
          className="group mt-10 flex w-full max-w-xl items-center gap-3 rounded-[1.5rem] border border-cream-50/25 bg-cocoa-900/35 p-3 pe-4 text-start backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-gold-300/60 hover:bg-cocoa-900/50"
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blush-500 to-blush-700 text-cream-50 shadow-glow">
            <MapPinIcon className="h-6 w-6" />
            <span className="absolute inset-0 rounded-full border-2 border-blush-300/70 animate-ping [animation-duration:2.4s]" />
          </span>
          <span className="min-w-0 flex-1 leading-snug">
            <span className="block text-[11px] font-medium uppercase tracking-wider text-gold-300">
              موقعنا · على الطريق مباشرة
            </span>
            <span className="block truncate text-sm font-bold text-cream-50 sm:text-base">
              {STREET}، {DISTRICT}، الرياض
            </span>
            <span className="block truncate text-xs text-cream-100/80">
              {LANDMARK} · يسهل الوصول إليه من أي مكان في الرياض
            </span>
          </span>
          <span className="hidden shrink-0 items-center gap-1 rounded-full bg-cream-50/15 px-3 py-1.5 text-xs font-bold text-cream-50 transition-colors group-hover:bg-gold-400 group-hover:text-cocoa-900 sm:inline-flex">
            اعرضي الخريطة
          </span>
        </a>
      </div>

      {/* Scroll cue */}
      <a
        href="#hammam"
        aria-label="اكتشفي الحمام المغربي الملكي"
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-cream-50/80 transition-colors hover:text-cream-50 sm:bottom-28"
      >
        <span className="flex flex-col items-center gap-1 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            اكتشفي التجربة التي تهمس بها سيدات الرياض لبعضهن
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce-soft" />
        </span>
      </a>
    </section>
  );
}
