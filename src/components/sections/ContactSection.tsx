import Reveal from "../Reveal";
import { SectionHeader } from "../ui";
import { CalendarIcon, MapPinIcon, PhoneIcon, RoseFlower, WhatsAppIcon } from "../Icons";
import { ADDRESS_SHORT, FRESHA_LINK, LANDMARK, MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/links";
import { trackContact } from "@/lib/track";

const PLACEMENT = "قسم التواصل";

export default function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-400/60 to-transparent" />
      <div className="pointer-events-none absolute -end-24 top-10 h-80 w-80 rounded-full bg-blush-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="لحظتكِ تبدأ الآن"
            title="ثلاث طرق… وكلّها تنتهي بكِ على سرير الدلال"
            copy="اختاري الطريقة التي تريحكِ. نحن هنا للإجابة على كل أسئلتكِ قبل أن تخطي خطوتكِ الأولى."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={FRESHA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact("fresha", { placement: PLACEMENT })}
              className="group flex h-full flex-col rounded-[1.75rem] bg-gradient-to-br from-blush-700 via-blush-600 to-blush-500 p-7 text-cream-50 shadow-glow transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/20">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-5 flex flex-wrap items-center gap-2 text-2xl font-bold">
                احجزي دلالكِ
                <span className="rounded-full bg-cream-50 px-2.5 py-1 font-latin text-xs font-semibold tracking-wide text-blush-700" dir="ltr">
                  Fresha
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/85">
                لمن تحب الحجز المباشر دون انتظار. اختاري الخدمة والوقت الذي يناسبكِ عبر Fresha خلال دقيقة.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold">
                فتح صفحة الحجز في Fresha
                <span className="transition-transform group-hover:-translate-x-1">←</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact("whatsapp", { placement: PLACEMENT })}
              className="group flex h-full flex-col rounded-[1.75rem] border border-whatsapp/30 bg-white/80 p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp-dark">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold text-cocoa-900">استشيري خبيرة الجمال</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
                مترددة بين لونين؟ تسألين عن معالجة تناسب شعركِ؟ أرسلي صورتكِ وسنرد عليكِ بصدق وبدون التزام.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-whatsapp-dark">
                راسلينا على واتساب
                <span className="transition-transform group-hover:-translate-x-1">←</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={PHONE_TEL}
              onClick={() => trackContact("phone", { placement: PLACEMENT })}
              className="group flex h-full flex-col rounded-[1.75rem] border border-gold-400/50 bg-white/80 p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-200 text-gold-600">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold text-cocoa-900">اتصال مباشر</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
                للعميلات المستعجلات. مكالمة واحدة ونرتّب لكِ أقرب موعد متاح اليوم.
              </p>
              <span className="mt-auto pt-6 font-latin text-2xl font-semibold tracking-wider text-cocoa-900" dir="ltr">
                {PHONE_DISPLAY}
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-[1.75rem] border border-cream-300/80 bg-gradient-to-l from-cream-50 via-blush-50 to-cream-50 px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <RoseFlower className="h-12 w-12" />
              <div>
                <div className="font-display text-xl font-bold text-cocoa-900">درة سبا · DORH SPA</div>
                <div className="flex items-center gap-1 text-sm text-cocoa-600">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-blush-600" />
                  {ADDRESS_SHORT} · {LANDMARK}
                </div>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/70 bg-white px-4 py-2 text-sm font-bold text-cocoa-800 transition-colors hover:border-blush-500 hover:text-blush-700"
            >
              <MapPinIcon className="h-4 w-4 text-blush-600" />
              اعرضي الخريطة
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
