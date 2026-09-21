import { Link } from "react-router-dom";
import { GIFTS } from "../app/gifts";
import { WEDDING } from "../app/config";
import { buildWhatsAppLink } from "../app/links";
import GiftCard from "../components/gifts/GiftCard";

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
          preparamos esta lista com carinho — escolha um item e pague direto
          pelo Pix, com o valor já preenchido.
        </p>

        <div className="mt-6 max-w-prose rounded-xl2 border border-white/50 bg-white/45 backdrop-blur p-5 text-sm text-ink2">
          <p>
            Todos os presentes precisam ser comprados pelo site, por questão
            de organização. Caso queira presentear com algo que não está na
            lista, entre em contato com os noivos.
          </p>
          <p className="mt-2">
            Se preferir um valor livre em vez de um presente específico, tem a
            opção{" "}
            <strong className="text-ink">Cota lua de mel</strong>, com valor
            mínimo de R$ 100.
          </p>
          <a
            href={buildWhatsAppLink(
              `Olá! Quero falar sobre um presente pro casamento de ${WEDDING.couple}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-ink underline underline-offset-2 hover:no-underline"
          >
            Falar com os noivos no WhatsApp
          </a>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GIFTS.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      </div>
    </main>
  );
}
