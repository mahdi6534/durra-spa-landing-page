import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  tone?: "gold" | "light";
  showText?: boolean;
  stacked?: boolean;
};

/** Stacked zen stones mark + DORH SPA wordmark (recreated from brand logo). */
export function StonesMark({ className, tone = "gold" }: { className?: string; tone?: "gold" | "light" }) {
  const fill = tone === "light" ? "#F7EADF" : "#E6D2B4";
  return (
    <svg viewBox="0 0 120 110" className={className} fill={fill} aria-hidden="true">
      <path d="M60 4c-5 0-13 12-15 17-2.5 6 3 12 15 12s17.5-6 15-12C73 16 65 4 60 4Z" />
      <path d="M38 40c-12 2-20 10-16 19 3 8 18 11 40 8 17-2 29-7 29-13 0-8-14-13-30-13-9 0-16-1-23-1Z" />
      <path d="M46 70c-6 0-10 5-9 10 1 6 9 10 23 10 13 0 24-5 24-11 0-5-7-9-17-9-8 0-13 0-21 0Z" />
      <path d="M26 90c-8 1-11 6-9 10 2 5 15 8 43 8 27 0 42-4 42-9 0-5-10-10-32-10-18 0-32 0-44 1Z" />
    </svg>
  );
}

export default function Logo({ className, tone = "gold", showText = true, stacked = false }: LogoProps) {
  const textColor = tone === "light" ? "text-cream-50" : "text-gold-500";
  const subColor = tone === "light" ? "text-cream-100/80" : "text-gold-500/80";

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 select-none",
        stacked && "flex-col gap-1",
        className,
      )}
      dir="ltr"
    >
      <StonesMark tone={tone} className={cn(stacked ? "h-16 w-16" : "h-10 w-10")} />
      {showText && (
        <div className={cn("leading-none", stacked && "text-center")}>
          <div
            className={cn(
              "font-latin font-semibold tracking-[0.42em]",
              stacked ? "text-3xl" : "text-xl",
              textColor,
            )}
          >
            DORH
          </div>
          <div
            className={cn(
              "font-latin tracking-[0.55em] mt-1",
              stacked ? "text-sm" : "text-[10px]",
              subColor,
            )}
          >
            SPA
          </div>
        </div>
      )}
    </div>
  );
}
