import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { PHONE_TEL, WA_DEFAULT } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_10px_40px_-18px_rgb(183_110_121/0.35)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo compact className="h-9 w-auto sm:h-11" />
          <span className="flex flex-col leading-none">
            <span className="font-latin text-lg tracking-[0.32em] text-gold-500">DORH</span>
            <span className="font-latin text-[10px] tracking-[0.6em] text-gold-400">SPA</span>
          </span>
        </a>

        <div className="flex items-center gap-2.5">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-full border border-rosegold-300/60 bg-white/70 px-4 py-2 text-sm font-bold text-rosegold-600 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-blush-50 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span dir="ltr" className="font-latin tracking-wider">
              053 968 7912
            </span>
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-rosegold-500 to-rosegold-400 px-4 py-2 text-sm font-bold text-white shadow-charm transition-all hover:-translate-y-0.5 sm:px-5 sm:py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            احجزي الآن
          </a>
        </div>
      </div>
    </header>
  );
}
