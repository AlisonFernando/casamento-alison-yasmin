import { Link } from "react-router-dom";
import { GIFTS } from "../app/gifts";
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GIFTS.map((gift) => (
            <GiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      </div>
    </main>
  );
}
