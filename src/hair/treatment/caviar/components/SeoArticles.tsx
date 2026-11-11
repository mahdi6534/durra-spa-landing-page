import { BookOpenText, Sparkles, Sprout, Waves } from "lucide-react";
import Reveal from "./Reveal";
import { Sparkle } from "./Icons";

const articles = [
  {
    no: "01",
    icon: Sparkles,
    tag: "الترميم العميق",
    h: "سر الحيوية المتجددة: كيف يعيد معالج الكافيار للشعر شباب خصلاتك؟",
    p: "أثبتت الدراسات المخبرية الحديثة أن الكافيار مصدر غني جداً بأحماض أوميغا 3، وفيتامينات A و D، والبروتينات الأساسية التي تشابه التكوين الطبيعي للشعرة. يعمل هذا العلاج كدرع واقٍ يغلف خصلاتك ليحميها من العوامل البيئية القاسية وتأثير المياه المحلاة. يساهم في منع التقصف، ويعيد بناء الروابط المتضررة من كثرة استخدام أدوات التصفيف الحرارية والصبغات، ليمنحك شعراً مرناً وسهل التسريح ينبض بالحياة من جديد.",
  },
  {
    no: "02",
    icon: Waves,
    tag: "الترطيب الفائق",
    h: "ذهب البحر النباتي: تجربة الترطيب الفائقة مع معالج الكافيار الأخضر",
    p: 'هل تبحثين عن حل نهائي لجفاف الشعر وتطايره؟ يُعد هذا المكون النادر، المستخلص من طحالب بحرية دقيقة تُعرف باسم "عنب البحر"، ثورة حقيقية في عالم العناية. يتميز بقدرة استثنائية على سحب الرطوبة والاحتفاظ بها داخل الخلايا. يمنح شعرك دفعة ترطيب عميقة ومكثفة تمتد لفترات طويلة، ليتركه بملمس حريري وانسيابية تامة تليق بإطلالتك اليومية دون أن يثقل خصلاتك.',
    offset: true,
  },
  {
    no: "03",
    icon: Sprout,
    tag: "قوة الجذور",
    h: "تألقي بجذور قوية وكثافة مضاعفة عبر جلسات معالج القرين كافيار",
    p: 'لا يقتصر سحر العناية على المظهر الخارجي فحسب، بل يبدأ من الجذور. تتميز هذه التركيبة المتقدمة باحتوائها على تركيز عالٍ من المعادن ومضادات الأكسدة التي تحارب ما يُعرف بـ "شيخوخة الشعر" وضعف البصيلات. تطبيق هذه التركيبة يساهم في تنقية فروة الرأس وتهدئتها، وتعزيز إنتاج الكولاجين الطبيعي، مما يوفر بيئة مثالية لنمو شعر أكثر قوة وكثافة. بفضل المكونات النشطة في معالج الكافيار، ستلاحظين زيادة ملحوظة في قوة شعرك ولمعاناً لا مثيل له، مما يمنحك ثقة مطلقة وتألقاً يخطف الأنظار في تجمعاتك العائلية ومناسباتك السعيدة. زيارتك لنا في دره سبا وتجربة معالج الكافيار هي استثمار حقيقي في جمالك، لتتوجي إطلالتك بتاج من الحرير.',
  },
];

export default function SeoArticles() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(245_214_222/0.55),transparent_65%)] blur-2xl" />
        <div className="absolute right-[-8%] bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(233_213_179/0.5),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <BookOpenText className="h-3.5 w-3.5" />
            مكتبة درة للجمال
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-snug text-ink sm:text-4xl sm:leading-snug">
            ثلاث حكايات.. <span className="text-rose-gradient">يكتبها الكافيار على خصلاتكِ</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-ink-muted sm:text-base">
            لأن جمالكِ يستحق أن يُروى بعلمٍ وشغف — طالعي كنوز المعالج الذي اخترناه لكِ بعناية.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {articles.map(({ no, icon: Icon, tag, h, p, offset }, i) => (
            <Reveal key={no} delay={i * 150} className={offset ? "lg:translate-y-10" : ""}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] bg-white/85 p-7 shadow-card ring-1 ring-blush-200/90 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_84px_-34px_rgb(183_110_121/0.5)] sm:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-5 left-4 select-none font-latin text-[6.5rem] leading-none text-blush-200/80 transition-colors duration-500 group-hover:text-rosegold-200"
                >
                  {no}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-rosegold-400 to-rosegold-500 text-white shadow-charm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <span className="rounded-full bg-blush-100 px-3.5 py-1.5 text-xs font-bold text-rosegold-600 ring-1 ring-rosegold-200/70">
                      {tag}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-xl font-bold leading-[1.8] text-ink sm:text-[1.35rem]">
                    {h}
                  </h2>

                  <span className="mt-4 flex items-center gap-2.5" aria-hidden="true">
                    <span className="h-px w-10 bg-gradient-to-l from-rosegold-300 to-transparent" />
                    <Sparkle className="h-3.5 w-3.5 text-rosegold-400" />
                    <span className="h-px flex-1 bg-gradient-to-r from-blush-200 to-transparent" />
                  </span>

                  <p className="article-drop mt-5 text-justify text-[15px] leading-9 text-ink-soft">
                    {p}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-black tracking-[0.18em] text-gold-500">
                    DORH SPA
                    <span className="h-px w-8 bg-gold-300" />
                    درة سبا
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
