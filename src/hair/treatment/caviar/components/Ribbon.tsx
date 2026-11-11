import { Sparkle } from "./Icons";

const phrases = [
  "لمعان زجاجي",
  "خيوط من الحرير",
  "انسيابية تتحدى الرطوبة",
  "فوليوم يدوم",
  "نعومة الكافيار",
  "دلال يُلامس الروح",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {phrases.map((p) => (
        <span key={p} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-lg font-bold text-white sm:text-xl">
            {p}
          </span>
          <Sparkle className="h-4 w-4 shrink-0 text-[#ffe9d6]" />
        </span>
      ))}
    </div>
  );
}

export default function Ribbon() {
  return (
    <div className="relative -mx-4 rotate-[-1.4deg] overflow-hidden bg-[linear-gradient(90deg,#b76e79,#cd8378_35%,#dda08d_65%,#b76e79)] bg-[length:200%_100%] py-4 shadow-[0_18px_44px_-18px_rgb(183_110_121/0.55)] animate-shimmer sm:py-5">
      <div className="flex w-max animate-marquee" style={{ direction: "ltr" }}>
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
