import { WEDDING } from "../../app/config";

export default function FinalMessage() {
  return (
    <section data-animate className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8">
      <p className="text-ink2 text-sm">Mensagem</p>
      <p className="mt-3 text-lg md:text-xl leading-relaxed">
        “{WEDDING.verseFinal.text}”
      </p>
      <p className="mt-3 text-sm text-ink2">— {WEDDING.verseFinal.ref}</p>
      <p className="mt-5 text-ink2">Será uma alegria imensa compartilhar esse momento com você.</p>
    </section>
  );
}
