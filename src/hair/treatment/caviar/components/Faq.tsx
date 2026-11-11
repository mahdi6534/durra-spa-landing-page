import { useState } from "react";
import { CalendarClock, Droplets, Feather, Leaf, Plus, ShieldCheck, Gem } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Droplets,
    q: "الفيديو يجنّن.. بس كيف بيكون شعري بعد الغسيل في البيت؟",
    a: "الفيديو يوضّح شكل الشعر بعد انتهاء الجلسة والتصفيف. لكن السحر الحقيقي ستشعرين به في البيت؛ ستلاحظين كيف قلّت النفشة بشكلٍ هائل، وأصبح تسريح شعركِ للدوام أو الخروج يأخذ دقائق بسيطة — دون الحاجة للحرارة العالية يومياً.",
  },
  {
    icon: ShieldCheck,
    q: "هل بيضرّ شعري أو تطلع له ريحة مزعجة وقت الجلسة؟",
    a: "جلسة الكافيار هي تجربة سبا ودلال بالدرجة الأولى. لا نستخدم مواد تسبب اختناقاً أو روائح مزعجة أبداً. وخبيراتنا يقيّمن حالة شعركِ (إن كان مسحوب اللون أو مصبوغاً) للتأكد من ملاءمة الجلسة التامة له قبل البدء.",
  },
  {
    icon: Leaf,
    q: "أستخدم حنّاء وسِدر وزيوت.. هل لازم أوقفها؟",
    a: "نحن لا نلغي روتينكِ الذي تحبينه! فقط أخبرينا بما تستخدمينه ومتى كانت آخر مرة، وسنضع لكِ الخطة الأنسب لتوافق الجلسة مع روتين عنايتكِ — راحتكِ وروتينكِ أولويتنا.",
  },
  {
    icon: Feather,
    q: "شعري خفيف وفروتي تدهن بسرعة.. أخاف يبين أقل ومدهّن!",
    a: "نأخذ خفّة شعركِ وطبيعة فروتكِ في الاعتبار، لأن النتيجة المنسدلة جداً قد لا تناسب الشكل الذي تبغينه. والجلسة لا نعرضها عليكِ كعلاج لدهون الفروة. نحدّد أولاً: هل هدفكِ تحسين الملمس، أم تخفيف النفشة، أم الحفاظ على الامتلاء — ثم نراجع ملاءمتها لكِ معاً قبل أي قرار.",
  },
  {
    icon: CalendarClock,
    q: "طيّب لو انشغلت؟ لها صلاحية؟ وألقى مواعيد تناسبني؟",
    a: "قبل الدفع تستلمين شروط الباقة مكتوبةً بوضوح كامل: مدة صلاحيتها، طريقة حجز الجلسات، سياسة التأجيل والإلغاء، وأي شروط تخص استخدامها. وإذا كان لديكِ سفر أو جدول مزدحم، نراجع معكِ إمكانية الاستفادة منها قبل الشراء. لا تشيلين همّاً أبداً.. سنضبط معكِ كل شيء.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(250_231_236/0.9),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <Gem className="h-3.5 w-3.5" />
            بشفافية تامة
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-snug text-ink sm:text-4xl sm:leading-snug">
            الشفافية هي سر ثقة عميلاتنا بنا..
            <br />
            <span className="text-rose-gradient">إليكِ الحقيقة كاملة</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {items.map(({ icon: Icon, q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 110}>
                <div
                  className={`group overflow-hidden rounded-[1.8rem] transition-all duration-500 ${
                    isOpen
                      ? "bg-white shadow-[0_28px_64px_-28px_rgb(183_110_121/0.45)] ring-2 ring-rosegold-300/70"
                      : "glass shadow-[0_10px_34px_-22px_rgb(183_110_121/0.4)] ring-1 ring-blush-200 hover:ring-rosegold-300/60"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-start sm:px-7 sm:py-6"
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-all duration-500 ${
                        isOpen
                          ? "bg-gradient-to-b from-rosegold-400 to-rosegold-500 text-white shadow-charm"
                          : "bg-blush-100 text-rosegold-500 ring-1 ring-rosegold-200/60"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-display text-base font-bold leading-8 text-ink sm:text-lg sm:leading-8">
                      {q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-rosegold-400 bg-rosegold-500 text-white"
                          : "border-rosegold-300/60 bg-white text-rosegold-500"
                      }`}
                    >
                      <Plus className="h-4.5 w-4.5" />
                    </span>
                  </button>
                  <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                    <div className="acc-inner">
                      <p className="px-5 pb-6 ps-[4.75rem] text-sm leading-8 text-ink-soft sm:px-7 sm:ps-[5.25rem] sm:text-[15px] sm:leading-8">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
