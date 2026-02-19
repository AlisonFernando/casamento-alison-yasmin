import { WEDDING } from "./config";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WEDDING.whatsappPhoneE164}?text=${encodeURIComponent(
    message
  )}`;
}

export function buildMapsLink() {
  const q = encodeURIComponent(`${WEDDING.venue}, ${WEDDING.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
