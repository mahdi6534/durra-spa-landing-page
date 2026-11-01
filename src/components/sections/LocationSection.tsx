import Reveal from "../Reveal";
import { SectionHeader } from "../ui";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "../Icons";
import {
  CITY,
  DISTRICT,
  LANDMARK,
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  STREET,
  WHATSAPP_LOCATION_LINK,
} from "@/lib/links";

const hints = [
  { title: "على الطريق مباشرة", text: `واجهتنا مطلّة على ${STREET} – لا أزقة ولا بحث.` },
  { title: "علامة مميزة", text: `${LANDMARK}… وستجديننا بجانبها.` },
  { title: "سهولة الوصول", text: `من أي حي في ${CITY} عبر ${STREET} وصولاً إلى ${DISTRICT}.` },
];

export default function LocationSection() {
  return (
    <section id="location" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-cream-100 via-blush-50 to-cream-100 py-20 sm:py-28">
      <div className="pointer-events-none absolute -start-32 top-10 h-96 w-96 rounded-full bg-gold-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="موقعنا"
            title="على طريق الدمام مباشرة… أقرب مما تتخيلين"
            subtitle={`${DISTRICT}، ${CITY}`}
            copy={`${STREET}، ${DISTRICT}، ${CITY} – ${LANDMARK}. موقع مميز جداً يسهل الوصول إليه، ومن لحظة وصولكِ تبدأ رحلة دلالكِ.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Map */}
          <Reveal className="relative lg:col-span-3">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-200 to-gold-200 opacity-80 blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-cream-300/80 bg-cream-200 shadow-soft aspect-[4/3] sm:aspect-[16/10]">
              <iframe
                title="موقع درة سبا على خرائط Google"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 start-4 inline-flex items-center gap-2 rounded-full bg-cocoa-900/90 px-4 py-2.5 text-sm font-bold text-cream-50 shadow-lg backdrop-blur transition-colors hover:bg-blush-700"
              >
                <MapPinIcon className="h-4 w-4 text-gold-300" />
                افتحي في خرائط Google
              </a>
            </div>
          </Reveal>

          {/* Address card */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[2rem] border border-gold-300/60 bg-white/80 p-7 shadow-soft">
              <div className="flex items-start gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blush-500 to-blush-700 text-cream-50 shadow-glow">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-bold text-blush-600">العنوان</p>
                  <h3 className="font-display text-2xl font-bold leading-snug text-cocoa-900">
                    {STREET}، {DISTRICT}
                  </h3>
                  <p className="text-sm text-cocoa-600">
                    {CITY} · {LANDMARK}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {hints.map((h) => (
                  <li key={h.title} className="flex gap-3 rounded-2xl bg-cream-100/80 p-3.5">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-gold-400 to-blush-500" />
                    <div>
                      <div className="text-sm font-bold text-cocoa-900">{h.title}</div>
                      <div className="text-xs leading-relaxed text-cocoa-600">{h.text}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-2 pt-2">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-blush-700 via-blush-600 to-blush-500 px-5 py-3 text-sm font-bold text-cream-50 shadow-glow transition-all hover:-translate-y-0.5"
                >
                  <MapPinIcon className="h-4 w-4" />
                  ابدئي الاتجاهات إلينا الآن
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={WHATSAPP_LOCATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-3 py-2.5 text-xs font-bold text-whatsapp-dark transition-colors hover:bg-whatsapp hover:text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    أرسلوا لي الموقع
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="flex items-center justify-center gap-1.5 rounded-full border border-gold-400/70 bg-cream-50 px-3 py-2.5 text-xs font-bold text-cocoa-800 transition-colors hover:border-blush-500 hover:text-blush-700"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    <span className="font-latin tracking-wider" dir="ltr">
                      {PHONE_DISPLAY}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
