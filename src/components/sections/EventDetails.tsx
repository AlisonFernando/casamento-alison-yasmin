import { WEDDING } from "../../app/config";
import { buildMapsLink } from "../../app/links";

export default function EventDetails() {
  return (
    <section data-animate className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
        O grande dia
      </h2>

      <div className="mt-4 text-ink2">
        <p className="text-base md:text-lg">{WEDDING.dateLabel} • {WEDDING.timeLabel}</p>
        <p className="mt-1">{WEDDING.venue}</p>
        <p>{WEDDING.city}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={buildMapsLink()}
          target="_blank"
          rel="noreferrer"
          className="rounded-full px-6 py-3 bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
        >
          Ver localização
        </a>
      </div>
    </section>
  );
}
