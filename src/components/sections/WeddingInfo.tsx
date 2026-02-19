import { WEDDING } from "../../app/config";

const BASE = import.meta.env.BASE_URL;

export default function WeddingInfo() {
  return (
    <section
      data-animate
      className="py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, #DDE5DE 0%, #E9EFEA 45%, #DDE5DE 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="rounded-xl2 bg-white/35 backdrop-blur border border-white/40 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* ESQUERDA — textos estilo editorial */}
            <div className="text-center md:text-left">
              {/* “Desenho” (substitui depois por uma arte real se quiser) */}
              <div className="mx-auto md:mx-0 w-20 opacity-70">
                <svg viewBox="0 0 120 60" fill="none">
                  <path
                    d="M12 42c16-20 34-30 52-28 16 2 27 12 44 30"
                    stroke="#2F3E34"
                    strokeOpacity="0.55"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 40c8-10 18-16 30-18"
                    stroke="#2F3E34"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M46 26c2 6 2 14 0 24"
                    stroke="#2F3E34"
                    strokeOpacity="0.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mt-6 text-xs tracking-[0.22em] text-ink2 uppercase">
                O grande dia
              </p>

              <h2
                className="mt-3 text-2xl md:text-3xl leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {WEDDING.dateLabel} • {WEDDING.timeLabel}
              </h2>

              <p className="mt-4 text-ink2 leading-relaxed">
                <span className="text-ink">{WEDDING.venue}</span>
                <br />
                <span>{WEDDING.city}</span>
              </p>

              <div className="mt-8 h-px w-24 bg-gold/40 mx-auto md:mx-0" />

              <p className="mt-8 text-xs tracking-[0.22em] text-ink2 uppercase">
                Versículo
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed text-ink">
                “{WEDDING.verseHero.text}”
              </p>

              <p className="mt-4 text-sm text-ink2">— {WEDDING.verseHero.ref}</p>
            </div>

            {/* DIREITA — imagem das alianças com moldura */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-[460px]">
                <div className=" border border-white/50 p-3 md:p-4">
                  <div className="overflow-hidden ">
                    <img
                      src={`${BASE}images/gallery/aliancas.png`}
                      alt="Alianças"
                      className="h-[280px] md:h-[360px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* detalhe sutil abaixo, estilo editorial */}
                <div className="mt-4 h-px w-28 bg-gold/35 mx-auto md:mx-0 md:ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}