import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const WhatsAppIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.5 14.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.9 9.88m8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const CalendarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M16 3v4M8 3v4M3 10h18" />
    <path d="m9.5 15.5 1.8 1.8 3.4-3.6" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const SparkleIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2c.5 4.6 2.9 7 7.5 7.5-4.6.5-7 2.9-7.5 7.5-.5-4.6-2.9-7-7.5-7.5C9.1 9 11.5 6.6 12 2Z" />
    <path d="M5 14c.3 2.3 1.5 3.5 3.8 3.8C6.5 18.1 5.3 19.3 5 21.6c-.3-2.3-1.5-3.5-3.8-3.8C3.5 17.5 4.7 16.3 5 14Z" opacity=".7" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MapPinIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/** A soft rose flower in rose-gold tones for the booking bar. */
export const RoseFlower = (p: P) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...p}>
    <defs>
      <radialGradient id="rosePetal" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor="#F3C9C2" />
        <stop offset="55%" stopColor="#D98C8C" />
        <stop offset="100%" stopColor="#B76E79" />
      </radialGradient>
      <radialGradient id="roseCore" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F7DCD5" />
        <stop offset="100%" stopColor="#C27C7A" />
      </radialGradient>
    </defs>
    {/* leaves */}
    <path d="M14 48c6-10 16-12 24-9-8 2-14 8-17 16-4 0-6-3-7-7Z" fill="#9CB58E" />
    <path d="M50 48c-6-10-16-12-24-9 8 2 14 8 17 16 4 0 6-3 7-7Z" fill="#8FA882" />
    {/* outer petals */}
    <g fill="url(#rosePetal)">
      <ellipse cx="20" cy="30" rx="11" ry="14" transform="rotate(-40 20 30)" />
      <ellipse cx="44" cy="30" rx="11" ry="14" transform="rotate(40 44 30)" />
      <ellipse cx="32" cy="18" rx="12" ry="13" />
      <ellipse cx="24" cy="42" rx="12" ry="11" transform="rotate(20 24 42)" />
      <ellipse cx="40" cy="42" rx="12" ry="11" transform="rotate(-20 40 42)" />
    </g>
    {/* inner petals */}
    <g fill="url(#roseCore)" opacity="0.95">
      <ellipse cx="32" cy="30" rx="10" ry="11" />
      <path d="M32 21c5 2 8 7 6 12-2 4-7 5-10 2 4 0 6-3 5-6-1-3-4-4-7-3 1-3 3-5 6-5Z" fill="#B76E79" opacity="0.8" />
      <circle cx="32" cy="31" r="3.2" fill="#A85F6A" />
    </g>
  </svg>
);
