import OurStory from "./OurStory";

const BASE = import.meta.env.BASE_URL;

// coloque suas fotos aqui (pode usar genéricas por enquanto)
const photos = [
  "g1.jpeg",
  "g2.jpeg",
  "g3.jpeg",
  "g4.jpeg",
  "g5.jpeg",
  "g6.jpeg" 
];

export default function StorySplit() {
  const strip = [...photos, ...photos]; // duplica pra loop “infinito”

  return (
    <section data-animate className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* esquerda: carrossel automático */}
        <div className="overflow-hidden rounded-xl2 border border-white/40 bg-white/30">
          <div className="flex w-max animate-storymarquee">
            {strip.map((p, idx) => (
              <img
                key={`${p}-${idx}`}
                src={`${BASE}images/gallery/${p}`}
                alt="Foto"
                className="h-[260px] md:h-[320px] w-[340px] md:w-[420px] object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* direita: OurStory */}
        <div>
          <OurStory />
        </div>
      </div>
    </section>
  );
}