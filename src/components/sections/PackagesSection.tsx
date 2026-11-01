import packagesImg from "@/assets/images/packages.jpg";
import Reveal from "../Reveal";
import { Price, SectionHeader, ServiceActions } from "../ui";
import { CheckIcon, ClockIcon, SparkleIcon } from "../Icons";
import { packages } from "@/data/services";

export default function PackagesSection() {
  const featured = packages.find((p) => p.featured)!;
  const rest = packages.filter((p) => !p.featured);

  return (
    <section
      id="packages"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-cocoa-900 via-cocoa-800 to-cocoa-900 py-20 text-cream-50 sm:py-28"
    >
      <div className="pointer-events-none absolute -start-40 top-0 h-[28rem] w-[28rem] rounded-full bg-blush-700/25 blur-3xl" />
      <div className="pointer-events-none absolute -end-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            light
            number="03"
            eyebrow="عالم الدلال المتكامل"
            title="باقات الجمال… لأنكِ تستحقين أكثر من خدمة واحدة"
            subtitle="من قمة رأسكِ حتى أطراف قدميكِ"
            copy="جمعنا لكِ أرقى خدماتنا في باقات صُممت خصيصاً لتدليلكِ من قمة رأسكِ حتى أطراف قدميكِ، لتعيشي تجربة استرخاء لا تُنسى وبقيمة استثنائية."
          />
        </Reveal>

        {/* Featured bride package */}
        <Reveal className="mt-14">
          <article className="grid overflow-hidden rounded-[2.25rem] border border-gold-400/40 bg-gradient-to-br from-cream-50 to-cream-200 text-cocoa-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-full">
              <img
                src={packagesImg}
                alt="تجهيزات باقة العروس: مناشف، ورود، أحجار ساخنة وزيوت"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/45 via-transparent to-transparent" />
              <span className="absolute start-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3.5 py-1.5 text-xs font-bold text-cocoa-900 shadow-lg">
                <SparkleIcon className="h-4 w-4" />
                {featured.tag}
              </span>
            </div>
            <div className="flex flex-col p-7 sm:p-10">
              <p className="text-sm font-bold text-blush-600">الباقة الأكثر فخامة</p>
              <h3 className="font-display mt-2 text-4xl font-bold">{featured.name}</h3>
              <p className="mt-3 leading-relaxed text-cocoa-600">
                يومٌ واحد في العمر يستحق أن تكوني فيه الأجمل على الإطلاق… نُحضّركِ على مهل، بلا استعجال، حتى تخرجي
                وكأنكِ تتوهجين من الداخل.
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-cream-200 px-3 py-1 text-xs font-medium text-cocoa-700">
                <ClockIcon className="h-4 w-4" />
                {featured.duration}
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {featured.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2 text-sm font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-cream-300 pt-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <Price price={featured.price} oldPrice={featured.oldPrice} size="lg" className="items-start" />
                  <span className="text-xs text-cocoa-500">احجزي يومكِ الكبير أو استفسري ↓</span>
                </div>
                <ServiceActions
                  service={featured.name}
                  price={featured.price}
                  section="باقات الجمال"
                  size="md"
                  layout="row"
                  className="mt-5"
                />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other packages */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-cream-50/10 bg-cream-50/5 p-6 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-cream-50/10">
                <span className="w-fit rounded-full bg-gold-400/15 px-3 py-1 text-[11px] font-bold text-gold-300">{p.tag}</span>
                <h3 className="font-display mt-4 text-2xl font-bold text-cream-50">{p.name}</h3>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-cream-100/60">
                  <ClockIcon className="h-3.5 w-3.5" />
                  {p.duration}
                </div>
                <ul className="mt-4 space-y-2">
                  {p.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2 text-sm text-cream-100/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-blush-400" />
                      {inc}
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-3 text-xs italic text-gold-200/80">{p.note}</p>}
                <div className="mt-auto border-t border-cream-50/10 pt-5">
                  <div className="flex items-end justify-between gap-3">
                    <Price price={p.price} oldPrice={p.oldPrice} size="md" light className="items-start" />
                    <span className="text-[11px] text-cream-100/60">احجزي أو استفسري ↓</span>
                  </div>
                  <ServiceActions service={p.name} price={p.price} section="باقات الجمال" onDark size="sm" className="mt-4" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="font-display text-xl italic text-gold-200">
            همسة: الباقات تُحجز بسرعة في نهاية الأسبوع… احجزي موعدكِ مبكراً لتضمني الوقت الذي يناسبكِ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
