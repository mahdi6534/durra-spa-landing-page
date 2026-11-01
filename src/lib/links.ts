export const PHONE_DISPLAY = "0539687912";
/** Local dialing – no country code (as requested). */
export const PHONE_TEL = "tel:0539687912";
/** WhatsApp requires the international format. */
export const WHATSAPP_NUMBER = "966539687912";

const DEFAULT_WA_MESSAGE =
  "مرحباً درة سبا 🌸، أرغب بالاستفسار عن خدماتكم وحجز موعد.";

export const whatsappLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = whatsappLink();

/**
 * WhatsApp link with a pre-filled message that names the exact service / package
 * (and its price & section) so the salon can see which offer brought the guest in.
 */
export const serviceWhatsappLink = (service: string, price?: string, section?: string) => {
  const priceText = price ? (/[\u0600-\u06FF]/.test(price) ? ` (${price})` : ` (${price} ر.س)`) : "";
  const lines = [
    "مرحباً درة سبا 🌸",
    `أرغب بالحجز / الاستفسار عن: ${service}${priceText}`,
  ];
  if (section) lines.push(`القسم: ${section}`);
  lines.push("متى أقرب موعد متاح؟");
  return whatsappLink(lines.join("\n"));
};

export const FRESHA_LINK =
  "https://www.fresha.com/a/dorh-spa-beauty-salon-slwn-tjmyl-drh-sb-lnsyy-riyadh-dorh-spa-drh-sb-lnsyy-dammam-rd-bhelxhfk";

/* ───────────── Location ───────────── */
export const CITY = "الرياض";
export const DISTRICT = "حي اليرموك";
export const STREET = "طريق الدمام";
export const LANDMARK = "بجوار مطاعم ركن الرافدين";
export const ADDRESS_SHORT = `${STREET}، ${DISTRICT}، ${CITY}`;
export const ADDRESS_FULL = `${ADDRESS_SHORT} – ${LANDMARK}`;

export const MAPS_LINK = "https://maps.app.goo.gl/L9do6VUtok5dxAe98";

/** Exact pin of "Dorh spa درة سبا النسائي" on Google Maps. */
export const MAP_LAT = 24.8182308;
export const MAP_LNG = 46.7844646;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=ar&z=16&output=embed`;
export const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

export const WHATSAPP_LOCATION_LINK = whatsappLink(
  "مرحباً درة سبا 🌸، هل يمكنكم إرسال موقع الصالون على الخريطة؟",
);
