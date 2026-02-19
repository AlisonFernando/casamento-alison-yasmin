import { QRCodeCanvas } from "qrcode.react";
import { WEDDING } from "../../app/config";
import { buildWhatsAppLink } from "../../app/links";

export default function RSVPWhatsApp() {
  const msg = `Olá! Confirmo minha presença no casamento ${WEDDING.couple} em ${WEDDING.dateLabel} às ${WEDDING.timeLabel}.`;
  const link = buildWhatsAppLink(msg);

  return (
    <section id="rsvp" data-animate className="text-center">
      <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
        Confirmação de presença
      </h2>
      <p className="mt-3 text-ink2">Sua presença é muito importante para nós.</p>

      <div className="mt-6">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full px-8 py-3 bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
        >
          Confirmar pelo WhatsApp
        </a>
      </div>

      <div className="mt-8 inline-block rounded-xl2 bg-white/55 backdrop-blur border border-white/40 p-4">
        <QRCodeCanvas value={link} size={170} />
      </div>

      <p className="mt-3 text-xs text-ink2">Ou escaneie o QR Code para confirmar.</p>
    </section>
  );
}
