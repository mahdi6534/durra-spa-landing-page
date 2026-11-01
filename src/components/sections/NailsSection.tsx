import pedicure from "@/assets/images/pedicure.jpg";
import manicure from "@/assets/images/manicure.jpg";
import Reveal from "../Reveal";
import { CtaGroup, FloatingBadge, JewelCard, SectionHeader, ServiceAccordion } from "../ui";
import { SparkleIcon } from "../Icons";
import { nailsGroups, nailsJewels } from "@/data/services";

export default function NailsSection() {
  return (
    <section id="nails" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-cream-100 via-blush-50 to-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            number="02"
            eyebrow="تفاصيل الأناقة"
            title="أظافركِ… لوحةٌ فنية صغيرة تحكي عنكِ قبل أن تتكلمي"
            subtitle="لأن أنوثتكِ تكتمل بأدق التفاصيل"
            copy="نقدم لكِ عناية فائقة بأظافركِ لتكون لوحة فنية تعكس رقتكِ، مع جلسات سبا تمنح يديكِ وقدميكِ نعومة لا تُقاوم."
          />
        </Reveal>

        {/* Gallery */}
        <div className="mt-14 grid gap-6 md:grid-cols-5">
          <Reveal className="relative md:col-span-3">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-200 to-gold-200 opacity-80 blur-sm" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[16/10]">
              <img
                src={pedicure}
                alt="صالة البديكير الفاخرة بكراسي مريحة وستائر ناعمة"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 start-5">
              <FloatingBadge
                icon={<SparkleIcon className="h-5 w-5" />}
                title="ركن البديكير"
                text="كراسي تحتضنكِ وستائر تحفظ خصوصيتكِ"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="relative md:col-span-2">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-200 via-cream-200 to-blush-100 opacity-80 blur-sm" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[16/10] md:aspect-auto md:h-full">
              <img
                src={manicure}
                alt="ركن المانيكير مع جدار ألوان الطلاء والإضاءة الاحترافية"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Jewels */}
        <Reveal className="mt-20">
          <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-blush-600">الأكثر طلباً هذا الموسم</p>
              <h3 className="font-display text-3xl font-bold text-cocoa-900">جواهر قسم الأظافر</h3>
            </div>
            <p className="max-w-md text-sm text-cocoa-500">
              اختارت لكِ خبيراتنا ثلاث تجارب تُحدث الفرق من أول نظرة… ابدئي بها إن كنتِ محتارة.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {nailsJewels.map((j, i) => (
              <JewelCard key={j.name} item={j} delay={i * 80} section="الأظافر" />
            ))}
          </div>
        </Reveal>

        {/* Full menu */}
        <Reveal className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-display text-2xl font-bold text-cocoa-900">القائمة الكاملة للأظافر</h3>
            <span className="h-px flex-1 bg-gradient-to-l from-blush-200 to-transparent" />
            <span className="text-xs text-cocoa-500">افتحي القسم الذي يهمّكِ</span>
          </div>
          <ServiceAccordion groups={nailsGroups} topic="خدمات الأظافر" defaultOpen={0} />
        </Reveal>

        <Reveal delay={100} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl italic text-cocoa-700">
            محتارة بين الجل والبياب والأكريليك؟ أرسلي صورة أظافركِ وستُرشدكِ خبيرتنا للخيار الأنسب.
          </p>
          <CtaGroup topic="خدمات الأظافر" className="justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
