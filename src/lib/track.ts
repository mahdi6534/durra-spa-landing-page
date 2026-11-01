/**
 * Lightweight click tracking for every contact button on the page.
 *
 * Every Fresha / WhatsApp / Phone / Maps click fires a `contact_click` event that is
 * delivered to whatever analytics tool is installed on the page:
 *  - Google Tag Manager  → window.dataLayer
 *  - Google Analytics 4  → window.gtag
 *  - Meta (Facebook) Pixel → window.fbq
 *  - Snapchat Pixel → window.snaptr
 *  - TikTok Pixel → window.ttq
 * It also dispatches a DOM CustomEvent ("dorh:contact") for any custom listener.
 */

export type Channel = "fresha" | "whatsapp" | "phone" | "maps";

export type TrackParams = {
  service?: string;
  section?: string;
  price?: string;
  placement?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    snaptr?: (...args: unknown[]) => void;
    ttq?: { track?: (...args: unknown[]) => void };
  }
}

export function trackContact(channel: Channel, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  const clean: Record<string, string> = { channel };
  (Object.keys(params) as (keyof TrackParams)[]).forEach((k) => {
    const v = params[k];
    if (v) clean[k] = String(v);
  });

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "contact_click", ...clean });
    window.gtag?.("event", "contact_click", clean);
    window.fbq?.("trackCustom", "ContactClick", clean);
    window.snaptr?.("track", "CUSTOM_EVENT_1", clean);
    window.ttq?.track?.("ClickButton", clean);
    window.dispatchEvent(new CustomEvent("dorh:contact", { detail: clean }));
  } catch {
    /* analytics must never break the page */
  }
}
