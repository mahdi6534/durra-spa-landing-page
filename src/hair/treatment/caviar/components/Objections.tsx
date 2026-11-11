import { Fingerprint, HeartHandshake, Wind, MessageCircleHeart } from "lucide-react";
import Reveal from "./Reveal";
import Logo from "./Logo";

const talks = [
  {
    icon: Fingerprint,
    say: "أبي شعري أهدأ.. بس أبيه يظل يشبهني!",
    reply:
      "فاهمينكِ تماماً! أنتِ تحبين تموّجاتكِ (الويفي أو الكيرلي) وتريدين فقط التخلص من النفشة المزعجة وسهولة الترتيب. جلستنا تُصمَّم حسب هدفكِ، وسنناقش معكِ النتيجة المتوقعة قبل نقطة البدء — لنحافظ على هوية شعركِ التي تحبينها.",
    tag: "هويتكِ محفوظة",
  },
  {
    icon: Wind,
    say: "أخاف يلصق بشعري وتختفي الحيوية (الفوليوم)!",
    reply:
      "نعومة الشعر لا تعني أبداً أن يلتصق بالفروة! إكسير الكافيار يرمّم الشعرة ويغذيها من الداخل، ليمنحكِ انسيابيةً مع الحفاظ على حركة الشعر الطبيعية والفوليوم الذي يبرز أنوثتكِ.",
    tag: "فوليوم حيّ ونابض",
  },
];

export default function Objections() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blush-100/70 to-transparent" />
        <div className="absolute left-[-10%] top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgb(238_191_202/0.4),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold tracking-wide text-rosegold-600 ring-1 ring-rosegold-200/70">
            <MessageCircleHeart className="h-3.5 w-3.5" />
            نحن نسمعكِ.. ونفهمكِ
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-snug text-ink sm:text-4xl sm:leading-snug">
            قبل أن تقرري.. <span className="text-rose-gradient">كيف تحبين أن يكون شكل شعركِ؟</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
            نعلم أنكِ لا تبحثين عن مجرد «فرد» يفقد شعركِ هويته وحيويته.
            نحن في درة سبا نسمعكِ جيداً:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {talks.map(({ icon: Icon, say, reply, tag }, i) => (
            <Reveal key={tag} delay={i * 160} className="relative">
              <div className="group relative h-full rounded-[2.2rem] bg-white/80 p-6 shadow-card ring-1 ring-blush-200/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_80px_-32px_rgb(183_110_121/0.45)] sm:p-8">
                {/* client bubble */}
                <div className="relative rounded-3xl rounded-tr-md bg-gradient-to-b from-blush-100 to-blush-50 px-6 py-5 ring-1 ring-rosegold-200/50">
                  <span className="absolute -top-4 right-5 grid h-9 w-9 place-items-center rounded-full bg-white text-rosegold-500 shadow-md ring-1 ring-rosegold-200">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="pt-3 font-display text-lg font-semibold leading-8 text-ink sm:text-xl sm:leading-9">
                    “{say}”
                  </p>
                  <span className="mt-2 block text-xs font-bold tracking-wide text-ink-muted">
                    — صوت عميلاتنا الحبيبات
                  </span>
                </div>

                {/* thread connector */}
                <div className="mx-8 my-3 flex items-center gap-2" aria-hidden="true">
                  <span className="h-8 w-px bg-gradient-to-b from-rosegold-300 to-transparent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rosegold-400">ردنا عليكِ</span>
                </div>

                {/* spa reply */}
                <div className="relative rounded-3xl rounded-tl-md bg-gradient-to-b from-white to-pearl px-6 py-5 ring-1 ring-gold-300/60">
                  <div className="absolute -top-4 left-5 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md ring-1 ring-gold-300/70">
                    <Logo compact className="h-4 w-auto" />
                    <span className="text-[11px] font-black tracking-wide text-gold-500">درة سبا</span>
                    <HeartHandshake className="h-3.5 w-3.5 text-rosegold-500" />
                  </div>
                  <p className="pt-4 text-sm leading-8 text-ink-soft sm:text-[15px] sm:leading-8">
                    {reply}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-blush-100 px-3.5 py-1.5 text-xs font-bold text-rosegold-600">
                    <Icon className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
