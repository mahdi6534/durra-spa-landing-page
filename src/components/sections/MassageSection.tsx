import massageImg from "@/assets/images/massage.jpg";
import Reveal from "../Reveal";
import { CtaGroup, FloatingBadge, Price, SectionHeader, ServiceActions } from "../ui";
import { ClockIcon, SparkleIcon } from "../Icons";
import { massages } from "@/data/services";
import { cn } from "@/utils/cn";

export default function MassageSection() {
  return (
    <section id="massage" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -end-32 top-10 h-96 w-96 rounded-full bg-gold-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              align="start"
              number="04"
              eyebrow="ملاذ السكينة"
              title="المساج… حيث تذوب التشنجات وتعود الروح إلى جسدها"
              subtitle="بين يدي خبيراتنا"
              copy="بين يدي خبيراتنا، تذوب كل تشنجاتكِ وتستعيدين توازن روحكِ وجسدكِ. لمسات ساحرة تخاطب حواسكِ وتنقلكِ إلى قمة الاسترخاء والهدوء الداخلي."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {["إضاءة خافتة", "زيوت عطرية دافئة", "موسيقى هادئة", "غرفة خاصة لكِ"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-cream-300 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-cocoa-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-200 via-cream-200 to-blush-100 opacity-80 blur-sm" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
              <img
                src={massageImg}
                alt="غرفة المساج الهادئة بإضاءة دافئة وخشب طبيعي"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 end-5">
              <FloatingBadge
                icon={<SparkleIcon className="h-5 w-5" />}
                title="٩ أنواع مساج"
                text="لكل مزاج… لمسة تناسبه"
              />
            </div>
          </Reveal>
        </div>

        {/* Massage menu */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {massages.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 90}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-[1.5rem] border bg-white/80 p-5 transition-all hover:-translate-y-1 hover:shadow-soft",
                  m.tag ? "border-gold-400/60" : "border-cream-300/80",
                )}
              >
                {m.tag && (
                  <span className="absolute -top-3 start-5 rounded-full bg-gold-400 px-3 py-1 text-[10px] font-bold text-cocoa-900 shadow-sm">
                    {m.tag}
                  </span>
                )}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-cocoa-900">{m.name}</h3>
                    <div className="mt-1 inline-flex items-center gap-1 text-xs text-cocoa-500">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {m.duration}
                    </div>
                  </div>
                  <Price price={m.price} oldPrice={m.oldPrice} size="sm" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">{m.desc}</p>
                <ServiceActions service={m.name} price={m.price} section="المساج" size="sm" className="mt-auto pt-4" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl italic text-cocoa-700">
            لا تعرفين أي مساج يناسبكِ؟ صفي لنا تعبكِ بكلمتين… وسنختار لكِ اللمسة الصحيحة.
          </p>
          <CtaGroup topic="خدمات المساج" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
