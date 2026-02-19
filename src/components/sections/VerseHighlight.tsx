import { WEDDING } from "../../app/config";

export default function VerseHighlight() {
  return (
    <section
      data-animate
      className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8"
    >
      <p className="text-ink2 text-sm">Versículo</p>

      <p className="mt-3 text-lg md:text-xl leading-relaxed">
        “{WEDDING.verseHero.text}”
      </p>

      <p className="mt-3 text-sm text-ink2">
        — {WEDDING.verseHero.ref}
      </p>
    </section>
  );
}