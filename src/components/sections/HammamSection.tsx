import hammamRoom from "@/assets/images/hammam-room.jpg";
import hammamBed from "@/assets/images/hammam-bed.jpg";
import Reveal from "../Reveal";
import { CtaGroup, FloatingBadge, Price, SectionHeader, ServiceActions } from "../ui";
import { CheckIcon, ClockIcon, SparkleIcon } from "../Icons";
import { hammamRitual, hammamTiers } from "@/data/services";
import { cn } from "@/utils/cn";

const tierIncludes: Record<string, string[]> = {
  "حمام مغربي كلاسيك": ["صابون مغربي أصيل", "تقشير بالكيس", "غسول الجسم", "جلسة بخار"],
  "حمام مغربي كريستال": ["كل ما في الكلاسيك", "خلطة مغربية خاصة", "ماسك ترطيب عميق"],
  "حمام مغربي ملكي": ["كل ما في الكريستال", "طين مغربي نقي", "زيوت عطرية فاخرة", "ماسك شعر مغذٍّ"],
};

export default function HammamSection() {
  return (
    <section id="hammam" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -start-32 top-20 h-96 w-96 rounded-full bg-blush-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -end-32 bottom-20 h-96 w-96 rounded-full bg-gold-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-gold-400/60 bg-white/70 px-4 py-1.5 text-xs font-bold text-gold-600 shadow-sm">
            <SparkleIcon className="h-4 w-4" />
            الخدمة رقم ١ · الأكثر طلباً في درة سبا
          </div>
          <SectionHeader
            number="01"
            eyebrow="رحلة التجدد"
            title="الحمام المغربي… طقوسٌ ملكية تُعيد لبشرتكِ طفولتها"
            subtitle="اتركي ضغوط الحياة بالخارج"
            copy="ادخلي عالمنا حيث البخار الدافئ والروائح العطرية تأخذكِ في رحلة ملكية. طقوسنا المغربية الأصيلة تزيل عنكِ تعب الأيام، لتشرق بشرتكِ بنعومة الحرير وتتوهج أنوثتكِ من جديد."
          />
        </Reveal>

        {/* Images + ritual */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-200 to-gold-200 opacity-80 blur-sm" />
              <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
                <img
                  src={hammamRoom}
                  alt="غرفة الحمام المغربي الخاصة في درة سبا"
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -start-3 w-[46%] overflow-hidden rounded-[1.5rem] border-4 border-cream-100 shadow-soft sm:-start-8">
                <img
                  src={hammamBed}
                  alt="تفاصيل سرير الحمام المغربي: شموع، ورود، وصابون بلدي"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-5 end-4 sm:end-8">
                <FloatingBadge
                  icon={<ClockIcon className="h-5 w-5" />}
                  title="٦٠ دقيقة"
                  text="من الدلال الخالص لكِ وحدكِ"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-display text-2xl font-bold text-cocoa-900 sm:text-3xl">ماذا يحدث خلف الباب الخشبي؟</p>
            <p className="mt-2 text-cocoa-600">
              خمس لحظات تمرّ كالحلم… وتخرجين بعدها امرأة تلمع من الداخل قبل الخارج.
            </p>
            <ol className="relative mt-7 space-y-5 border-s-2 border-dashed border-blush-200 ps-7">
              {hammamRitual.map((r, i) => (
                <li key={r.step} className="relative">
                  <span
                    className={cn(
                      "absolute -start-[2.95rem] top-0 flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-bold shadow-sm",
                      i === hammamRitual.length - 1
                        ? "bg-gradient-to-br from-blush-600 to-blush-700 text-cream-50"
                        : "bg-white text-blush-700 ring-2 ring-blush-100",
                    )}
                  >
                    {r.step}
                  </span>
                  <h4 className="font-bold text-cocoa-900">{r.title}</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-cocoa-600">{r.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold-300/70 bg-gradient-to-l from-cream-50 to-gold-200/40 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400/40 text-gold-600">
                <SparkleIcon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-relaxed text-cocoa-700">
                <span className="font-bold text-cocoa-900">همسة من خبيرتنا:</span> أغلب السيدات يبدأن بالكلاسيك في
                زيارتهن الأولى… ثم لا يعدن إلا للملكي. ماذا لو بدأتِ من حيث ينتهين؟
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tiers */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {hammamTiers.map((t, i) => {
            const featured = !!t.featured;
            return (
              <Reveal key={t.name} delay={i * 110} className={cn(featured && "lg:-mt-6 lg:mb-[-1.5rem]")}>
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-1",
                    featured
                      ? "bg-gradient-to-br from-blush-700 via-blush-600 to-cocoa-800 text-cream-50 shadow-[0_30px_70px_-30px_rgba(158,90,99,0.75)] ring-1 ring-gold-400/50"
                      : "border border-cream-300/80 bg-white/80 shadow-soft",
                  )}
                >
                  {featured && (
                    <>
                      <div className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-gold-400/25 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-20 -start-10 h-56 w-56 rounded-full bg-blush-300/20 blur-3xl" />
                    </>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold",
                        featured ? "bg-gold-400 text-cocoa-900" : "bg-blush-50 text-blush-700",
                      )}
                    >
                      {featured && <SparkleIcon className="h-3.5 w-3.5" />}
                      {t.tag}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-xs",
                        featured ? "text-cream-100/80" : "text-cocoa-500",
                      )}
                    >
                      <ClockIcon className="h-3.5 w-3.5" />
                      {t.duration}
                    </span>
                  </div>

                  <h3 className={cn("font-display mt-5 text-3xl font-bold", featured ? "text-cream-50" : "text-cocoa-900")}>
                    {t.name}
                  </h3>
                  <p className={cn("mt-3 text-sm leading-relaxed", featured ? "text-cream-100/85" : "text-cocoa-600")}>
                    {t.desc}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {tierIncludes[t.name]?.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-sm">
                        <span
                          className={cn(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            featured ? "bg-gold-400/30 text-gold-200" : "bg-blush-100 text-blush-700",
                          )}
                        >
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className={featured ? "text-cream-50" : "text-cocoa-700"}>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <div
                      className={cn(
                        "border-t pt-5",
                        featured ? "border-cream-50/20" : "border-cream-300/80",
                      )}
                    >
                      <div className="flex items-end justify-between gap-3">
                        <Price price={t.price} oldPrice={t.oldPrice} size="lg" light={featured} className="items-start" />
                        <span className={cn("text-[11px]", featured ? "text-cream-100/75" : "text-cocoa-500")}>
                          احجزي أو استفسري ↓
                        </span>
                      </div>
                      <ServiceActions
                        service={t.name}
                        price={t.price}
                        section="الحمام المغربي"
                        onDark={featured}
                        size="md"
                        className="mt-4"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150} className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="font-display max-w-2xl text-2xl italic text-cocoa-700">
            «الفرق بين الكلاسيك والملكي… لا يُشرح بالكلمات، بل تشعرين به عند أول لمسة لبشرتكِ بعد الجلسة.»
          </p>
          <CtaGroup topic="الحمام المغربي" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
