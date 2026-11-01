import hairImg from "@/assets/images/hair.jpg";
import Reveal from "../Reveal";
import { CtaGroup, FloatingBadge, JewelCard, SectionHeader, ServiceAccordion } from "../ui";
import { SparkleIcon } from "../Icons";
import { hairGroups, hairJewels } from "@/data/services";

export default function HairSection() {
  return (
    <section
      id="hair"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200/70 to-cream-100 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -start-32 bottom-20 h-96 w-96 rounded-full bg-blush-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-200 to-gold-200 opacity-80 blur-sm" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
              <img
                src={hairImg}
                alt="ركن تصفيف الشعر بمرايا دائرية ذهبية وإضاءة دافئة"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 start-5">
              <FloatingBadge
                icon={<SparkleIcon className="h-5 w-5" />}
                title="معالجات عالمية"
                text="كافيار أخضر · ترندي ياباني · فيلر بارد"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeader
              align="start"
              number="05"
              eyebrow="بريق التاج"
              title="شعركِ… سرّ جاذبيتكِ الذي يلفت الأنظار قبل أن تدخلي"
              subtitle="لأنكِ تستحقين التألق"
              copy="شعركِ هو سر جاذبيتكِ، ولأنكِ تستحقين التألق، وفرنا لكِ أحدث المعالجات والقصات والصبغات العالمية ليعود لشعركِ لمعانه الطبيعي وحيويته التي تلفت الأنظار."
            />
          </Reveal>
        </div>

        {/* Jewels */}
        <Reveal className="mt-20">
          <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-blush-600">تجارب تُغيّر علاقتكِ بشعركِ</p>
              <h3 className="font-display text-3xl font-bold text-cocoa-900">جواهر قسم الشعر</h3>
            </div>
            <p className="max-w-md text-sm text-cocoa-500">
              معالجات تُعيد الحياة للشعر المتعب من أول جلسة… والنتيجة تلمسينها بيدكِ قبل أن تريها في المرآة.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {hairJewels.map((j, i) => (
              <JewelCard key={j.name} item={j} delay={i * 80} section="الشعر" />
            ))}
          </div>
        </Reveal>

        {/* Full menu */}
        <Reveal className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-display text-2xl font-bold text-cocoa-900">القائمة الكاملة للشعر</h3>
            <span className="h-px flex-1 bg-gradient-to-l from-blush-200 to-transparent" />
            <span className="text-xs text-cocoa-500">معالجات · قص وتصفيف · صبغات</span>
          </div>
          <ServiceAccordion groups={hairGroups} topic="خدمات الشعر" defaultOpen={0} />
          <p className="mt-4 text-center text-xs text-cocoa-500">
            * تختلف أسعار الصبغات والتصفيف حسب طول الشعر وكثافته — استشيري خبيرتنا لتحديد السعر الدقيق قبل الحجز.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl italic text-cocoa-700">
            أرسلي صورة لشعركِ عبر واتساب… وستقترح عليكِ خبيرتنا المعالجة أو اللون الذي يليق بكِ.
          </p>
          <CtaGroup topic="خدمات الشعر" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
