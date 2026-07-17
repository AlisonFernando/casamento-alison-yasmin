import { GODPARENTS } from "../../app/godparents";

export default function Godparents() {
  return (
    <section data-animate className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8">
      <h2
        className="text-center text-2xl md:text-3xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Padrinhos e Madrinhas
      </h2>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:divide-x md:divide-white/40">
        <div className="text-center">
          <p className="text-xs tracking-[0.22em] text-ink2 uppercase">Lado do Alison</p>
          <div className="mt-4 space-y-2">
            {GODPARENTS.alison.map((pair) => (
              <p key={pair} className="text-lg text-ink">
                {pair}
              </p>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs tracking-[0.22em] text-ink2 uppercase">Lado da Yasmin</p>
          <div className="mt-4 space-y-2">
            {GODPARENTS.yasmin.map((pair) => (
              <p key={pair} className="text-lg text-ink">
                {pair}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
