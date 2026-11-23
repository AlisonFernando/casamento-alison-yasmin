import { WEDDING } from "./config";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WEDDING.whatsappPhoneE164}?text=${encodeURIComponent(
    message
  )}`;
}

export function buildMapsLink() {
  return WEDDING.mapsUrl;
}
