import { Link } from "react-router-dom";
import { WEDDING } from "../app/config";
import { buildWhatsAppLink } from "../app/links";
import { GIFTS } from "../app/gifts";

export default function GiftListPage() {
  return (
    <main className="min-h-screen bg-grain">
      <div className="mx-auto max-w-[1100px] px-5 py-16 md:py-20">
        <Link to="/" className="text-sm text-ink2 hover:text-ink transition">
          ← Voltar para o convite
        </Link>

        <h1
          className="mt-6 text-3xl md:text-4xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Lista de presentes
        </h1>
        <p className="mt-3 text-ink2 max-w-prose">
          Sua presença é o nosso maior presente. Mas se quiser nos presentear,
          preparamos esta lista com carinho — escolha um item e confirme pelo
          WhatsApp.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GIFTS.map((gift) => {
            const message = `Olá! Gostaria de presentear ${WEDDING.couple} com: ${gift.name}.`;
            return (
              <div
                key={gift.id}
                className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 flex flex-col"
              >
                <h2 className="text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
                  {gift.name}
                </h2>
                {gift.description && (
                  <p className="mt-2 text-sm text-ink2 flex-1">{gift.description}</p>
                )}
                {gift.price && (
                  <p className="mt-3 text-sm text-ink">{gift.price}</p>
                )}
                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex justify-center rounded-full px-5 py-2 text-sm bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
                >
                  Presentear pelo WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
