import { WEDDING } from "../../app/config";

export default function GiftList() {
  return (
    <section data-animate className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
        Lista de presentes
      </h2>
      <p className="mt-3 text-ink2">
        Se desejar nos presentear, preparamos uma lista com muito carinho.
      </p>
      <div className="mt-6">
        <a
          href={WEDDING.giftListUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full px-6 py-3 bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
        >
          Ver lista de presentes
        </a>
      </div>
    </section>
  );
}
