import { Droplets, Eye, Sparkles, Wind } from "lucide-react";
import Reveal from "./Reveal";

export default function MiddleHook() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(245_214_222/0.6),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-10%] left-[-6%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(233_213_179/0.5),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <div className="text-center lg:text-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
              <Eye className="h-3.5 w-3.5" />
              لحظة البهجة
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.45] text-ink sm:text-4xl sm:leading-[1.45] lg:text-[2.7rem]">
              افتحي عينيكِ على <span className="text-rose-gradient">أجمل نسخة</span> من شعركِ..
            </h2>
            <p className="mt-6 text-base leading-9 text-ink-soft sm:text-lg sm:leading-9">
              تخلّصي من كل ما يزعجكِ، واستعدّي لتجربة دلالٍ تُعيد بشعركِ سنواتٍ إلى الوراء.
              خيوطٌ من الحرير، لمعانٌ يخطف الأنظار، وانسيابيةٌ تتحدّى الرطوبة العالية.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {[
              {
                icon: Sparkles,
                title: "ترميم عميق",
                desc: "يلحم الأطراف المتعبة ويقوّي الشعر من الداخل — كأنه عاد سنواتٍ للوراء.",
              },
              {
                icon: Droplets,
                title: "وداعاً للنفشة",
                desc: "تحكّم كامل في التطاير والهيشان.. حتى في أصعب الأجواء والرطوبة العالية.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={140 + i * 120}>
                <div className="group flex items-start gap-4 rounded-3xl bg-white/75 p-5 text-start shadow-[0_14px_40px_-22px_rgb(183_110_121/0.4)] ring-1 ring-blush-200/80 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:ring-rosegold-300/70 sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-b from-rosegold-400 to-rosegold-500 text-white shadow-charm transition-transform duration-400 group-hover:rotate-6 group-hover:scale-105">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-ink">{title}</span>
                    <span className="mt-1 block text-sm leading-7 text-ink-soft">{desc}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* media composition */}
        <Reveal delay={180} className="relative mx-auto w-full max-w-md">
          <div className="conic-glow absolute -inset-5 rounded-t-[10rem] rounded-b-[2.6rem] opacity-25 blur-2xl" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-t-[9rem] rounded-b-[2.2rem] shadow-[0_40px_90px_-32px_rgb(183_110_121/0.55)] ring-1 ring-white/60">
            <div className="shine-loop">
              <img
                src="/hair/treatment/caviar/images/black-after.jpg"
                alt="شعر أسود حريري لامع بموجات ممتلئة الحيوية بعد جلسة إكسير الكافيار في درة سبا"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rosegold-600/25 via-transparent to-transparent" aria-hidden="true" />
            <span className="glass absolute right-4 top-5 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-rosegold-700 shadow-card">
              <Sparkles className="h-4 w-4" />
              اللمعان الزجاجي على الشعر الأسود
            </span>
            <span className="glass absolute bottom-5 left-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-ink shadow-card">
              <Wind className="h-4 w-4 text-rosegold-500" />
              انسيابية بلا لصق.. والفوليوم باقٍ
            </span>
          </figure>

          {/* ingredient card */}
          <figure className="glass animate-float absolute -bottom-8 -left-2 w-40 rotate-[-4deg] overflow-hidden rounded-3xl shadow-card sm:-left-10 sm:w-48">
            <img src="/hair/treatment/caviar/images/caviar-elixir.jpg" alt="مستخلص الكافيار النادر" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="px-3.5 py-2.5 text-center text-[11px] font-bold leading-5 text-ink sm:text-xs">
              بطل الجلسة: مستخلص الكافيار النادر
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
