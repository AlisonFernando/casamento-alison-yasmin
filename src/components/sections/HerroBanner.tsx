const BASE = import.meta.env.BASE_URL;

export default function HeroBanner() {
  return (
    <section className="relative" aria-label="Hero">
      {/* imagem única */}
      <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden">
        <img
  src={`${BASE}images/gallery/walpaper.jpg`}
  alt="Foto do casal"
  className="h-full w-full object-cover object-[center_20%]"
/>

        {/* leve overlay pra dar “editorial” */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </section>
  );
}