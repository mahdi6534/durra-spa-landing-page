export const PHONE_DISPLAY = "0539687912";
export const PHONE_TEL = "tel:0539687912";
export const WA_NUMBER = "966539687912";

export const MAPS_SHARE = "https://maps.app.goo.gl/W8tGLpJkMNf3BczJ7";
export const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3345325882215!2d46.7844646!3d24.8182308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff0079c33afb%3A0xff59d5d94178e943!2zRG9yaCBzcGEg2K_YsdmHINiz2KjYpyDYp9mE2YbYs9in2KbZig!5e0!3m2!1sar!2ssa!4v1794296741582!5m2!1sar!2ssa";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink("مرحباً درة سبا، أرغب بحجز جلسة إكسير الكافيار النادر ✨");
export const WA_SINGLE = waLink("مرحباً، أرغب بحجز جلسة الدلال الفردية (400 ريال)");
export const WA_PACKAGE = waLink("مرحباً، أرغب بحجز باقة التجديد الشامل — 4 جلسات (1300 ريال)");
