import { BadgePercent, Check, Crown, Gem, Phone, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { PHONE_TEL, WA_PACKAGE, WA_SINGLE } from "../data";
import Reveal from "./Reveal";

const singlePerks = [
  "جلسة كاملة بمستخلص الكافيار النادر",
  "الغسيل والتصفيف الاحترافي",
  "شاملة الضريبة — لا مفاجآت",
  "نوضّح كل خطوة قبل البدء",
];

const packagePerks = [
  "4 جلسات كاملة بمستخلص الكافيار",
  "توفير فوري بقيمة 300 ريال",
  "روتين عناية ممتد يثبّت النتيجة",
  "أولوية في حجز المواعيد",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-blush-100/80 to-transparent" />
        <div className="absolute right-[-8%] top-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(233_213_179/0.5),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <Gem className="h-3.5 w-3.5" />
            استثمار.. لا مجرّد إنفاق
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-snug text-ink sm:text-4xl sm:leading-snug">
            استثماركِ في جمالكِ.. <span className="text-rose-gradient">أسعار واضحة بدون مفاجآت!</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2 lg:gap-10">
          {/* single session */}
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-white/85 p-7 shadow-card ring-1 ring-blush-200 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_80px_-30px_rgb(183_110_121/0.45)] sm:p-9">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-100 text-rosegold-500 ring-1 ring-rosegold-200/70">
                  <Gem className="h-5.5 w-5.5" />
                </span>
                <span className="rounded-full bg-pearl px-4 py-1.5 text-xs font-bold text-ink-muted ring-1 ring-blush-200">
                  البداية المثالية
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-ink">جلسة الدلال الفردية</h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-rose-gradient font-display text-6xl font-bold leading-none">400</span>
                <span className="pb-1.5 text-sm font-bold text-ink-muted">ريال سعودي</span>
              </div>

              <ul className="mt-7 space-y-3.5">
                {singlePerks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-7 text-ink-soft sm:text-[15px]">
                    <span className="mt-1 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-blush-100 text-rosegold-500 ring-1 ring-rosegold-200/70">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-2xl bg-pearl px-5 py-4 text-sm leading-8 text-ink-soft ring-1 ring-blush-200/70">
                نوضّح لكِ كل شيء قبل البدء؛ لتعرفي تماماً ما الذي يقابل هذا المبلغ، والنتيجة
                الرائعة التي ستحصلين عليها.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={WA_SINGLE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-l from-[#1faa5c] to-[#2bcf73] px-7 py-3.5 font-bold text-white shadow-[0_16px_36px_-14px_rgb(31_170_92/0.6)] transition-all duration-300 hover:-translate-y-1"
                >
                  <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  احجزي الجلسة الفردية
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-rosegold-300/70 bg-white/70 py-3 text-sm font-bold text-rosegold-600 transition-all hover:bg-blush-50"
                >
                  <Phone className="h-4 w-4" />
                  استفسار هاتفي سريع
                </a>
              </div>
            </article>
          </Reveal>

          {/* package — featured */}
          <Reveal delay={160} className="h-full">
            <article className="grain relative flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-[linear-gradient(150deg,#8a4752,#b76e79_45%,#cd8378_80%,#dda08d)] p-7 text-white shadow-[0_44px_90px_-30px_rgb(127_66_77/0.6)] transition-all duration-500 hover:-translate-y-2 sm:p-9">
              <span className="btn-shine absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-black text-rosegold-600 shadow-lg">
                <BadgePercent className="h-4 w-4" />
                وفّري 300 ريال
              </span>

              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/40 backdrop-blur-sm">
                  <Crown className="h-5.5 w-5.5 text-[#ffe9d6]" />
                </span>
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold ring-1 ring-white/35 backdrop-blur-sm">
                  الأكثر ذكاءً
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold drop-shadow-sm">
                باقة التجديد الشامل — 4 جلسات
              </h3>

              <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="font-display text-6xl font-bold leading-none text-white drop-shadow">1300</span>
                <span className="pb-1.5 text-sm font-bold text-white/85">ريال سعودي</span>
                <span className="pb-1.5 text-sm text-white/70">
                  بدلاً من <s className="font-bold">1600</s>
                </span>
              </div>
              <p className="mt-1.5 text-xs font-bold text-white/80" dir="rtl">
                أي 325 ريالاً فقط للجلسة الواحدة
              </p>

              <ul className="mt-7 space-y-3.5">
                {packagePerks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-7 text-white/95 sm:text-[15px]">
                    <span className="mt-1 grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-white/95 text-rosegold-600 shadow">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-2xl bg-white/12 px-5 py-4 text-sm leading-8 text-white/95 ring-1 ring-white/25 backdrop-blur-sm">
                تودّين الاطمئنان أولاً؟ جرّبي الجلسة الفردية، وإن أحببتِ النتيجة فهذه الباقة خياركِ
                الذكي لاستمرار الدلال — لا نلزمكِ بها أبداً.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={WA_PACKAGE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-black text-[#1faa5c] shadow-[0_20px_45px_-16px_rgb(0_0_0/0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                  احجزي الباقة ووفّري
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-rosegold-600"
                >
                  <Phone className="h-4 w-4" />
                  اسألينا عن التفاصيل
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={220} className="mx-auto mt-10 flex w-fit items-center gap-2.5 text-center">
          <ShieldCheck className="h-5 w-5 shrink-0 text-rosegold-500" />
          <p className="text-sm font-bold text-ink-soft sm:text-base">
            لا التزامات ولا إلزام.. القرار — دائماً — لكِ أنتِ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
