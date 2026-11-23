const BASE = import.meta.env.BASE_URL;

export default function HeroBanner() {
  return (
    <section className="relative" aria-label="Foto do casal">
      {/* quase tela cheia: a foto é o primeiro respiro do convite */}
      <div className="relative h-[78svh] min-h-[480px] max-h-[900px] w-full overflow-hidden">
        <img
          src={`${BASE}images/gallery/hero.webp`}
          alt="Alison e Yasmin abraçados em meio à mata"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="hero-kenburns h-full w-full object-cover object-[center_30%]"
        />

        {/* leve véu editorial + dissolve no verde sálvia do site */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 bg-gradient-to-b from-transparent to-[#DDE5DE]" />
      </div>
    </section>
  );
}
