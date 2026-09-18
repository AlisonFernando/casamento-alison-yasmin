import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import type { GiftItem } from "../../app/gifts";
import { WEDDING } from "../../app/config";
import { buildWhatsAppLink } from "../../app/links";
import { buildPixPayload, formatBRL } from "../../app/pix";

type Props = {
  gift: GiftItem;
};

export default function GiftCard({ gift }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customValue, setCustomValue] = useState(
    gift.minPrice ? String(gift.minPrice) : "50",
  );

  const amount = gift.customAmount ? Number(customValue) || 0 : gift.price ?? 0;

  const pixPayload = buildPixPayload({
    key: WEDDING.pix.key,
    merchantName: WEDDING.pix.name,
    merchantCity: WEDDING.pix.city,
    amount,
    description: gift.name,
  });

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // navegador sem suporte a clipboard — o código ainda pode ser
      // selecionado manualmente na caixa exibida
    }
  }

  const whatsappMessage = gift.customAmount
    ? `Olá! Vou presentear ${WEDDING.couple} com ${formatBRL(amount)} para a ${gift.name}.`
    : `Olá! Vou presentear ${WEDDING.couple} com: ${gift.name}.`;

  return (
    <div className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 flex flex-col">
      <h2 className="text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
        {gift.name}
      </h2>
      {gift.description && (
        <p className="mt-2 text-sm text-ink2 flex-1">{gift.description}</p>
      )}
      {!gift.customAmount && gift.price !== undefined && (
        <p className="mt-3 text-sm text-ink">{formatBRL(gift.price)}</p>
      )}

      {gift.customAmount && (
        <label className="mt-4 flex items-center gap-2 text-sm text-ink">
          R$
          <input
            type="number"
            min={1}
            step="1"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            className="w-24 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-ink focus:outline-none focus:ring-2 focus:ring-serenity-100"
          />
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={gift.customAmount && amount <= 0}
        className="mt-4 inline-flex justify-center rounded-full px-5 py-2 text-sm bg-serenity-100 text-ink shadow-sm hover:shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {open ? "Fechar" : "Pagar com Pix"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col items-center gap-3 rounded-xl2 bg-white/60 border border-white/50 p-4">
              <QRCodeCanvas value={pixPayload} size={150} />
              <p className="text-xs text-ink2 text-center">
                Escaneie no app do seu banco ou copie o código abaixo no Pix
                Copia e Cola.
              </p>
              <p className="text-xs text-ink2">
                Recebedor: {WEDDING.pix.name} · {WEDDING.pix.bank}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="w-full truncate rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs text-ink2 hover:text-ink transition"
                title={pixPayload}
              >
                {copied ? "Código copiado!" : pixPayload}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={buildWhatsAppLink(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex justify-center rounded-full px-5 py-2 text-xs text-ink2 border border-white/50 hover:text-ink hover:border-white/70 transition"
      >
        Avisar no WhatsApp que vou presentear
      </a>
    </div>
  );
}
