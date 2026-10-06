import { WEDDING } from "../../app/config";
import { buildMapsLink } from "../../app/links";
import RingsMark from "../rings/RingsMark";

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
              <RingsMark className="mx-auto md:mx-0 h-10 w-20" />

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

              <div className="mt-5">
                <a
                  href={buildMapsLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full px-6 py-3 bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
                >
                  Ver localização
                </a>
              </div>

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