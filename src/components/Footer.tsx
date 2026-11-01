import Logo from "./Logo";
import { MapPinIcon } from "./Icons";
import { ADDRESS_SHORT, FRESHA_LINK, LANDMARK, MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/links";

const links = [
  { href: "#hammam", label: "الحمام المغربي" },
  { href: "#nails", label: "الأظافر" },
  { href: "#packages", label: "الباقات" },
  { href: "#massage", label: "المساج" },
  { href: "#hair", label: "الشعر" },
  { href: "#location", label: "موقعنا" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 pb-32 pt-14 text-cream-100 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
              ملاذٌ أنثويّ في الرياض، صُمم ليُعيد إليكِ بريقكِ: حمام مغربي أصيل، فن الأظافر، معالجات الشعر
              العالمية، ومساج يُعيد التوازن لروحكِ.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-gold-300">أقسام الدلال</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-cream-100/80">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-gold-300">تواصلي معنا</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-100/80">
              <li>
                <a href={PHONE_TEL} className="transition-colors hover:text-gold-300">
                  هاتف: <span className="font-latin tracking-wider" dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                  واتساب: <span className="font-latin tracking-wider" dir="ltr">+966 53 968 7912</span>
                </a>
              </li>
              <li>
                <a href={FRESHA_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                  احجزي دلالكِ عبر Fresha
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 transition-colors hover:text-gold-300"
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blush-400" />
                  <span>
                    {ADDRESS_SHORT}
                    <br />
                    <span className="text-cream-100/60">{LANDMARK} · اضغطي لعرض الخريطة</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-100/50 sm:flex-row">
          <span>© {new Date().getFullYear()} درة سبا – DORH SPA. جميع الحقوق محفوظة.</span>
          <span>صالون نسائي · الرياض · للسيدات فقط</span>
        </div>
      </div>
    </footer>
  );
}
