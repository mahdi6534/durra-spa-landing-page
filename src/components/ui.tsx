import { useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Service, ServiceGroup } from "@/data/services";
import { FRESHA_LINK, PHONE_DISPLAY, PHONE_TEL, serviceWhatsappLink, whatsappLink } from "@/lib/links";
import { trackContact } from "@/lib/track";
import { CalendarIcon, ChevronDown, ClockIcon, PhoneIcon, SparkleIcon, WhatsAppIcon } from "./Icons";

/* ────────────────── helpers ────────────────── */
export const savings = (price?: string, oldPrice?: string) => {
  if (!price || !oldPrice) return null;
  const p = parseFloat(price);
  const o = parseFloat(oldPrice);
  if (!isFinite(p) || !isFinite(o) || o <= p) return null;
  return Math.round(((o - p) / o) * 100);
};

export function Price({
  price,
  oldPrice,
  from,
  size = "md",
  light = false,
  className,
}: {
  price: string;
  oldPrice?: string;
  from?: boolean;
  size?: "sm" | "md" | "lg";
  light?: boolean;
  className?: string;
}) {
  const pct = savings(price, oldPrice);
  // Show the currency unless the price string already contains Arabic words (e.g. "130 عادي / 150 جل")
  const isNumeric = !/[\u0600-\u06FF]/.test(price);
  return (
    <div className={cn("flex flex-col items-end gap-0.5 shrink-0", className)} dir="rtl">
      <div className="flex items-baseline gap-1">
        {from && <span className={cn("text-[11px]", light ? "text-cream-100/70" : "text-cocoa-500")}>يبدأ من</span>}
        <span
          className={cn(
            "font-display font-bold leading-none",
            size === "lg" ? "text-4xl" : size === "md" ? "text-2xl" : "text-xl",
            light ? "text-cream-50" : "text-blush-700",
          )}
        >
          {price}
        </span>
        <span className={cn("text-xs font-medium", light ? "text-cream-100/80" : "text-cocoa-500")}>
          {isNumeric ? "ر.س" : ""}
        </span>
      </div>
      {oldPrice && (
        <div className="flex items-center gap-1.5">
          <span className={cn("text-xs line-through", light ? "text-cream-100/60" : "text-cocoa-500/70")}>
            {oldPrice} ر.س
          </span>
          {pct && (
            <span
              className={cn(
                "rounded-full px-1.5 py-[1px] text-[10px] font-bold",
                light ? "bg-cream-50/20 text-cream-50" : "bg-blush-100 text-blush-700",
              )}
            >
              وفري {pct}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/* ────────────────── section header ────────────────── */
export function SectionHeader({
  number,
  eyebrow,
  title,
  subtitle,
  copy,
  align = "center",
  light = false,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  copy?: string;
  align?: "center" | "start";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-start")}>
      <div
        className={cn(
          "ornament text-sm font-medium tracking-wide",
          light ? "text-gold-300" : "text-blush-600",
          align === "center" ? "justify-center" : "",
        )}
      >
        {number && <span className="font-latin text-base">{number}</span>}
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "font-display mt-4 text-4xl font-bold leading-[1.25] text-balance sm:text-5xl",
          light ? "text-cream-50" : "text-cocoa-900",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-display mt-3 text-xl italic", light ? "text-gold-200" : "text-blush-600")}>{subtitle}</p>
      )}
      {copy && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-balance sm:text-xl",
            light ? "text-cream-100/85" : "text-cocoa-600",
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

/* ────────────────── shared sizing for contact buttons ────────────────── */
export type ContactSize = "xs" | "sm" | "md" | "lg";

const contactSize: Record<ContactSize, { btn: string; icon: string; badge: string }> = {
  xs: { btn: "px-3 py-1.5 text-[11px] gap-1.5", icon: "h-3.5 w-3.5", badge: "px-1.5 py-[1px] text-[9px]" },
  sm: { btn: "px-3.5 py-2 text-xs gap-1.5", icon: "h-4 w-4", badge: "px-1.5 py-[2px] text-[9px]" },
  md: { btn: "px-5 py-2.5 text-sm gap-2", icon: "h-4 w-4", badge: "px-2 py-[2px] text-[10px]" },
  lg: { btn: "px-7 py-3.5 text-base gap-2", icon: "h-5 w-5", badge: "px-2.5 py-[3px] text-[11px]" },
};

const baseBtn =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-all hover:-translate-y-0.5";

type TrackMeta = { service?: string; section?: string; price?: string; placement?: string };

/* ────────────────── Fresha booking button ────────────────── */
type FreshaVariant = "primary" | "dark" | "light" | "outline";

const freshaVariantClasses: Record<FreshaVariant, { btn: string; badge: string }> = {
  primary: {
    btn: "bg-gradient-to-l from-blush-700 via-blush-600 to-blush-500 text-cream-50 shadow-glow hover:shadow-[0_14px_40px_-10px_rgba(183,110,121,0.65)]",
    badge: "bg-cream-50 text-blush-700",
  },
  dark: {
    btn: "bg-cocoa-900 text-cream-50 hover:bg-blush-700",
    badge: "bg-cream-50/15 text-gold-200 ring-1 ring-cream-50/20",
  },
  light: {
    btn: "bg-cream-50 text-blush-700 shadow-lg hover:bg-white",
    badge: "bg-blush-600 text-cream-50",
  },
  outline: {
    btn: "border border-blush-300 bg-white/70 text-blush-700 hover:border-blush-500 hover:bg-blush-50",
    badge: "bg-blush-600 text-cream-50",
  },
};

/** "احجزي دلالكِ" + a Fresha wordmark so the guest knows it opens the Fresha booking page. */
export function FreshaButton({
  label = "احجزي دلالكِ",
  variant = "primary",
  size = "md",
  className,
  onClick,
  service,
  section,
  price,
  placement,
}: {
  label?: string;
  variant?: FreshaVariant;
  size?: ContactSize;
  className?: string;
  onClick?: () => void;
} & TrackMeta) {
  const v = freshaVariantClasses[variant];
  const s = contactSize[size];
  return (
    <a
      href={FRESHA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackContact("fresha", { service, section, price, placement });
        onClick?.();
      }}
      data-channel="fresha"
      data-service={service}
      aria-label={`${label} عبر Fresha${service ? ` – ${service}` : ""}`}
      className={cn(baseBtn, v.btn, s.btn, className)}
    >
      <CalendarIcon className={cn("shrink-0", s.icon)} />
      <span>{label}</span>
      <span className={cn("font-latin font-semibold tracking-wide rounded-full leading-none", v.badge, s.badge)} dir="ltr">
        Fresha
      </span>
    </a>
  );
}

/* ────────────────── WhatsApp button ────────────────── */
export function WhatsAppButton({
  label = "واتساب",
  size = "md",
  tone = "solid",
  className,
  message,
  onClick,
  service,
  section,
  price,
  placement,
}: {
  label?: string;
  size?: ContactSize;
  tone?: "solid" | "soft";
  className?: string;
  message?: string;
  onClick?: () => void;
} & TrackMeta) {
  const s = contactSize[size];
  const href = message
    ? whatsappLink(message)
    : service
      ? serviceWhatsappLink(service, price, section)
      : whatsappLink();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackContact("whatsapp", { service, section, price, placement });
        onClick?.();
      }}
      data-channel="whatsapp"
      data-service={service}
      aria-label={`تواصلي عبر واتساب${service ? ` بخصوص ${service}` : ""}`}
      className={cn(
        baseBtn,
        tone === "solid"
          ? "bg-whatsapp text-white shadow-[0_8px_24px_-10px_rgba(37,211,102,0.8)] hover:bg-whatsapp-dark"
          : "border border-whatsapp/30 bg-whatsapp/10 text-whatsapp-dark hover:bg-whatsapp hover:text-white",
        s.btn,
        className,
      )}
    >
      <WhatsAppIcon className={cn("shrink-0", s.icon)} />
      <span>{label}</span>
    </a>
  );
}

/* ────────────────── Phone button ────────────────── */
export function PhoneButton({
  label = "اتصال",
  size = "md",
  onDark = false,
  showNumber = false,
  className,
  onClick,
  service,
  section,
  price,
  placement,
}: {
  label?: string;
  size?: ContactSize;
  onDark?: boolean;
  showNumber?: boolean;
  className?: string;
  onClick?: () => void;
} & TrackMeta) {
  const s = contactSize[size];
  return (
    <a
      href={PHONE_TEL}
      onClick={() => {
        trackContact("phone", { service, section, price, placement });
        onClick?.();
      }}
      data-channel="phone"
      data-service={service}
      aria-label={`اتصلي بنا${service ? ` بخصوص ${service}` : ""} ${PHONE_DISPLAY}`}
      className={cn(
        baseBtn,
        onDark
          ? "border border-cream-50/30 bg-cream-50/10 text-cream-50 hover:border-cream-50 hover:bg-cream-50 hover:text-blush-700"
          : "border border-gold-400/70 bg-white text-cocoa-800 hover:border-blush-500 hover:text-blush-700",
        s.btn,
        className,
      )}
    >
      <PhoneIcon className={cn("shrink-0", s.icon)} />
      <span>{label}</span>
      {showNumber && (
        <span className="font-latin tracking-wider" dir="ltr">
          {PHONE_DISPLAY}
        </span>
      )}
    </a>
  );
}

/* ────────────────── Fresha + WhatsApp + Phone for ONE service / package ────────────────── */
export function ServiceActions({
  service,
  price,
  section,
  onDark = false,
  size = "sm",
  layout = "stack",
  freshaVariant,
  className,
}: {
  service: string;
  price?: string;
  section?: string;
  onDark?: boolean;
  size?: "sm" | "md";
  layout?: "stack" | "row";
  freshaVariant?: FreshaVariant;
  className?: string;
}) {
  const meta = { service, price, section };
  const fv = freshaVariant ?? (onDark ? "light" : "primary");

  if (layout === "row") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)} data-service-actions={service}>
        <FreshaButton variant={fv} size={size} className="min-w-[11rem] flex-[2]" {...meta} />
        <WhatsAppButton size={size} className="flex-1" {...meta} />
        <PhoneButton size={size} onDark={onDark} className="flex-1" {...meta} />
      </div>
    );
  }

  return (
    <div className={cn("grid gap-2", className)} data-service-actions={service}>
      <FreshaButton variant={fv} size={size} className="w-full" {...meta} />
      <div className="grid grid-cols-2 gap-2">
        <WhatsAppButton size={size} className="w-full" {...meta} />
        <PhoneButton size={size} onDark={onDark} className="w-full" {...meta} />
      </div>
    </div>
  );
}

/* ────────────────── section-level CTA group ────────────────── */
export function CtaGroup({
  topic,
  className,
  compact = false,
}: {
  topic: string;
  className?: string;
  compact?: boolean;
}) {
  const size: ContactSize = compact ? "md" : "lg";
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <FreshaButton variant="primary" size={size} section={topic} />
      <WhatsAppButton
        size={size}
        tone="soft"
        label="استشيري خبيرة الجمال"
        section={topic}
        message={`مرحباً درة سبا 🌸، أرغب بالاستفسار عن ${topic} وحجز موعد.`}
      />
      <PhoneButton size={size} section={topic} />
    </div>
  );
}

/* ────────────────── service row (inside accordions / lists) ────────────────── */
export function ServiceRow({ item, section, className }: { item: Service; section?: string; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-cream-300/70 bg-cream-50/80 px-4 py-3.5 transition-colors hover:border-blush-200 hover:bg-white",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h4 className="font-bold text-cocoa-900">{item.name}</h4>
            {item.tag && (
              <span className="rounded-full bg-gold-200 px-2 py-[2px] text-[10px] font-bold text-gold-600">{item.tag}</span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cocoa-500">
            {item.duration && (
              <span className="inline-flex items-center gap-1">
                <ClockIcon className="h-3.5 w-3.5" />
                {item.duration}
              </span>
            )}
            {item.desc && <span className="text-cocoa-600">{item.desc}</span>}
          </div>
        </div>
        <Price price={item.price} oldPrice={item.oldPrice} from={item.from} size="sm" />
      </div>

      {/* Per-service contact buttons */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-dashed border-cream-300/80 pt-3">
        <FreshaButton variant="dark" size="xs" service={item.name} price={item.price} section={section} />
        <WhatsAppButton size="xs" service={item.name} price={item.price} section={section} />
        <PhoneButton size="xs" service={item.name} price={item.price} section={section} />
      </div>
    </div>
  );
}

/* ────────────────── jewel card (highlighted service) ────────────────── */
export function JewelCard({ item, section, delay = 0 }: { item: Service; section?: string; delay?: number }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gold-300/60 bg-gradient-to-b from-white to-cream-100 p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute -end-10 -top-10 h-32 w-32 rounded-full bg-blush-100/70 blur-2xl" />
      {item.tag && (
        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-blush-600 px-3 py-1 text-xs font-bold text-cream-50">
          <SparkleIcon className="h-3.5 w-3.5" />
          {item.tag}
        </span>
      )}
      <h4 className="font-display mt-4 text-2xl font-bold text-cocoa-900">{item.name}</h4>
      {item.duration && (
        <div className="mt-1 inline-flex items-center gap-1 text-xs text-cocoa-500">
          <ClockIcon className="h-3.5 w-3.5" />
          {item.duration}
        </div>
      )}
      {item.desc && <p className="mt-3 text-sm leading-relaxed text-cocoa-600">{item.desc}</p>}
      <div className="mt-auto border-t border-cream-300/80 pt-4">
        <div className="flex items-end justify-between gap-3">
          <Price price={item.price} oldPrice={item.oldPrice} from={item.from} size="md" className="items-start" />
          <span className="text-[11px] text-cocoa-500">احجزي أو استفسري ↓</span>
        </div>
        <ServiceActions service={item.name} price={item.price} section={section} size="sm" className="mt-4" />
      </div>
    </div>
  );
}

/* ────────────────── accordion ────────────────── */
export function ServiceAccordion({
  groups,
  topic,
  defaultOpen = 0,
}: {
  groups: ServiceGroup[];
  topic: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {groups.map((g, i) => {
        const isOpen = open === i;
        return (
          <div
            key={g.title}
            className={cn(
              "overflow-hidden rounded-3xl border bg-white/70 backdrop-blur transition-colors",
              isOpen ? "border-blush-200 shadow-soft" : "border-cream-300/80",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-latin text-lg font-semibold transition-colors",
                    isOpen ? "bg-blush-600 text-cream-50" : "bg-cream-200 text-blush-700",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-xl font-bold text-cocoa-900 sm:text-2xl">{g.title}</h4>
                  <p className="text-xs text-cocoa-500">
                    {g.hint && <span>{g.hint} · </span>}
                    {g.items.length} خدمات
                  </p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-blush-600 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div className="acc-panel" data-open={isOpen}>
              <div>
                <div className="grid gap-2.5 px-4 pb-4 sm:grid-cols-2 sm:px-5 sm:pb-5">
                  {g.items.map((item) => (
                    <ServiceRow key={item.name + item.price} item={item} section={`${topic} – ${g.title}`} />
                  ))}
                </div>
                <div className="border-t border-cream-300/70 px-5 py-4">
                  <CtaGroup topic={`${topic} – ${g.title}`} compact />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ────────────────── framed image ────────────────── */
export function FramedImage({
  src,
  alt,
  caption,
  badge,
  className,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: string;
  badge?: ReactNode;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blush-100 via-cream-200 to-gold-200 opacity-80 blur-sm" />
      <div className={cn("overflow-hidden rounded-[2rem] shadow-soft", aspect)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105"
        />
      </div>
      {badge && <div className="absolute -bottom-5 start-5">{badge}</div>}
      {caption && <figcaption className="mt-3 text-center text-xs text-cocoa-500">{caption}</figcaption>}
    </figure>
  );
}

export function FloatingBadge({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gold-300/60 bg-white/90 px-4 py-3 shadow-soft backdrop-blur animate-float">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-blush-700">{icon}</div>
      <div>
        <div className="text-sm font-bold text-cocoa-900">{title}</div>
        <div className="text-xs text-cocoa-500">{text}</div>
      </div>
    </div>
  );
}
