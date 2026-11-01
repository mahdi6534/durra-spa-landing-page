import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import Logo from "./Logo";
import { CalendarIcon, CloseIcon, MapPinIcon, MenuIcon } from "./Icons";
import { DISTRICT, FRESHA_LINK, MAPS_LINK } from "@/lib/links";

const links = [
  { href: "#hammam", label: "الحمام المغربي" },
  { href: "#nails", label: "الأظافر" },
  { href: "#packages", label: "الباقات" },
  { href: "#massage", label: "المساج" },
  { href: "#hair", label: "الشعر" },
  { href: "#location", label: "موقعنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "bg-cream-100/90 shadow-[0_8px_30px_-18px_rgba(63,46,42,0.35)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" aria-label="درة سبا">
          <Logo tone={scrolled || open ? "gold" : "light"} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-cocoa-700 hover:text-blush-700" : "text-cream-50/90 hover:text-cream-50",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden items-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-medium transition-colors xl:inline-flex",
              scrolled ? "text-cocoa-700 hover:text-blush-700" : "text-cream-50/90 hover:text-cream-50",
            )}
          >
            <MapPinIcon className="h-4 w-4 text-blush-500" />
            {DISTRICT}، طريق الدمام
          </a>
          <a
            href={FRESHA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="احجزي دلالكِ عبر Fresha"
            className={cn(
              "hidden items-center gap-2 rounded-full py-2 pe-2 ps-4 text-sm font-bold transition-all hover:-translate-y-0.5 sm:inline-flex",
              scrolled
                ? "bg-blush-600 text-cream-50 shadow-glow hover:bg-blush-700"
                : "border border-cream-50/40 bg-cream-50/10 text-cream-50 backdrop-blur-md hover:bg-cream-50/20",
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            احجزي دلالكِ
            <span
              className={cn(
                "rounded-full px-2 py-[3px] font-latin text-[10px] font-semibold leading-none tracking-wide",
                scrolled ? "bg-cream-50 text-blush-700" : "bg-cream-50/90 text-blush-700",
              )}
              dir="ltr"
            >
              Fresha
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled || open ? "bg-cream-200 text-cocoa-800" : "bg-cream-50/15 text-cream-50 backdrop-blur-md",
            )}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-400 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-5 pb-5 pt-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-cocoa-800 transition-colors hover:bg-blush-50 hover:text-blush-700"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
