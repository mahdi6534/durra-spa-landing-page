import { useCallback, useEffect, useState } from "react";
import { CloseIcon, MapPinIcon, RoseFlower, SparkleIcon } from "./Icons";
import { FreshaButton, PhoneButton, WhatsAppButton } from "./ui";
import { ADDRESS_SHORT, LANDMARK, MAPS_LINK } from "@/lib/links";
import { trackContact } from "@/lib/track";

const PLACEMENT = "النافذة المنبثقة";

const DELAY_MS = 60_000; // one minute after landing
const STORAGE_KEY = "dorh-booking-popup-shown";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* private mode – just show it */
    }
    const t = window.setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-popup-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="إغلاق"
        onClick={close}
        className="absolute inset-0 bg-cocoa-900/55 backdrop-blur-sm animate-fade-in"
      />

      {/* Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-blush-200/80 bg-gradient-to-b from-cream-50 via-blush-50 to-cream-100 shadow-[0_40px_90px_-30px_rgba(63,46,42,0.6)] animate-pop-in">
        <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-blush-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-gold-200/70 blur-3xl" />

        <button
          type="button"
          onClick={close}
          aria-label="إغلاق النافذة"
          className="absolute end-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-cocoa-700 shadow-sm transition-colors hover:bg-blush-100 hover:text-blush-700"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <div className="relative px-6 pb-6 pt-7 text-center sm:px-8">
          <RoseFlower className="mx-auto h-16 w-16 animate-float" />
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold text-blush-700">
            <SparkleIcon className="h-3.5 w-3.5" />
            لحظة من فضلكِ
          </span>
          <h3 id="booking-popup-title" className="font-display mt-3 text-3xl font-bold leading-tight text-cocoa-900">
            هل شعرتِ بالفضول؟
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
            موعدكِ على بُعد لمسة واحدة… اختاري الطريقة الأقرب لقلبكِ وسنتولى نحن الباقي.
          </p>

          <div className="mt-6 space-y-2.5">
            <FreshaButton variant="primary" size="lg" className="w-full" onClick={close} placement={PLACEMENT} />
            <WhatsAppButton
              size="lg"
              label="استشيري خبيرة الجمال – واتساب"
              className="w-full"
              onClick={close}
              placement={PLACEMENT}
              message="مرحباً درة سبا 🌸، شاهدتُ صفحتكم وأرغب بالاستفسار وحجز موعد."
            />
            <PhoneButton size="lg" label="اتصلي الآن" showNumber className="w-full" onClick={close} placement={PLACEMENT} />
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact("maps", { placement: PLACEMENT })}
            className="mt-5 inline-flex max-w-full items-center gap-1.5 text-xs text-cocoa-600 transition-colors hover:text-blush-700"
          >
            <MapPinIcon className="h-4 w-4 shrink-0 text-blush-600" />
            <span className="truncate">
              {ADDRESS_SHORT} · {LANDMARK}
            </span>
          </a>

          <button
            type="button"
            onClick={close}
            className="mt-3 block w-full text-xs text-cocoa-500 underline-offset-4 hover:underline"
          >
            ربما لاحقاً… سأكمل التصفح
          </button>
        </div>
      </div>
    </div>
  );
}
