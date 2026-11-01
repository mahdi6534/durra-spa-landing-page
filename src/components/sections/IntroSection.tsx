import Reveal from "../Reveal";
import { StonesMark } from "../Logo";

const worlds = [
  { href: "#hammam", n: "١", label: "الحمام المغربي", hint: "طقوس ملكية" },
  { href: "#nails", n: "٢", label: "الأظافر", hint: "تفاصيل الأناقة" },
  { href: "#packages", n: "٣", label: "باقات الجمال", hint: "دلال متكامل" },
  { href: "#massage", n: "٤", label: "المساج", hint: "ملاذ السكينة" },
  { href: "#hair", n: "٥", label: "الشعر", hint: "بريق التاج" },
];

const promises = [
  {
    title: "خصوصية تامة",
    text: "مكان للسيدات فقط، بغرف خاصة وستائر تحفظ راحتكِ من لحظة الدخول.",
  },
  {
    title: "أيادٍ خبيرة",
    text: "خبيرات متخصصات في كل قسم، يستمعن لكِ أولاً… ثم يُبدعن.",
  },
  {
    title: "منتجات فاخرة أصيلة",
    text: "صابون بلدي وطين مغربي أصلي، ومعالجات شعر عالمية موثوقة.",
  },
  {
    title: "أجواء تُنسيكِ الوقت",
    text: "إضاءة دافئة، عطر الورد، وموسيقى هادئة… فقط لتعودي إلى نفسكِ.",
  },
];

export default function IntroSection() {
  return (
    <section className="relative -mt-px bg-cream-100 pb-6 pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <StonesMark className="mx-auto h-12 w-12" />
          <h2 className="font-display mt-4 text-3xl font-bold text-cocoa-900 sm:text-4xl">
            خمسة عوالم من الدلال… في مكان واحد
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-cocoa-600">
            اختاري من أين تبدئين رحلتكِ، أو دعي الفضول يقودكِ من قسم إلى آخر.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {worlds.map((w) => (
              <a
                key={w.href}
                href={w.href}
                className="group flex shrink-0 items-center gap-3 rounded-full border border-cream-300 bg-white/80 py-2 pe-5 ps-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blush-300 hover:shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blush-500 to-blush-700 font-display text-base font-bold text-cream-50">
                  {w.n}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-cocoa-900 group-hover:text-blush-700">{w.label}</span>
                  <span className="block text-[11px] text-cocoa-500">{w.hint}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-[1.5rem] border border-cream-300/80 bg-white/60 p-5 text-start">
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-l from-gold-400 to-blush-400" />
                <h3 className="font-bold text-cocoa-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cocoa-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
