import { useCallback, useEffect, useRef, useState } from "react";
import { useCarousel } from "../gallery/useCarousel";

interface GalleryImage {
  name: string;
  alt: string;
}

const imgs: GalleryImage[] = [
  { name: "g1.webp", alt: "Yasmin segura o rosto de Alison com carinho" },
  { name: "yasmin.webp", alt: "Retrato da Yasmin sorrindo" },
  { name: "g2.webp", alt: "Mãos do casal com a aliança de noivado" },
  { name: "g3.webp", alt: "O casal lendo um jornal com o Save the Date 12/06/2027" },
  { name: "g4.webp", alt: "Yasmin ergue o buquê enquanto os dois sorriem" },
  { name: "g5.webp", alt: "O casal correndo de mãos dadas pela rua" },
  { name: "g6.webp", alt: "O casal sorrindo num café, visto através do vidro" },
];

const BASE = import.meta.env.BASE_URL;
const srcOf = (name: string) => `${BASE}images/gallery/${name}`;
const SWIPE_THRESHOLD = 40;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

const arrowBtn =
  "grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink shadow-md backdrop-blur border border-white/60 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-0";

export default function Gallery() {
  const { trackRef, canPrev, canNext, prev, next } = useCarousel<HTMLUListElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setOpenIndex((i) => (i === null ? i : (i + dir + imgs.length) % imgs.length));
  }, []);

  // teclado no lightbox: ← → navega, Esc fecha
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : imgs[openIndex];

  return (
    <section data-animate aria-roledescription="carrossel" aria-label="Galeria de fotos">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
          Galeria
        </h2>
        <p className="text-xs text-ink2 md:hidden">Deslize para ver mais →</p>
      </div>

      <div className="relative mt-6">
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-1 px-1 pb-2 md:gap-4"
        >
          {imgs.map(({ name, alt }, i) => (
            <li
              key={name}
              className="shrink-0 snap-start basis-[82%] sm:basis-[calc(50%-0.375rem)] md:basis-[calc((100%-2rem)/3)]"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${imgs.length}`}
            >
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                aria-label={`Ampliar foto: ${alt}`}
                className="group block w-full overflow-hidden rounded-xl2 bg-white/35 border border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <img
                  src={srcOf(name)}
                  alt={alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  draggable={false}
                  className="h-60 md:h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute inset-y-0 -left-3 -right-3 hidden items-center justify-between sm:flex">
          <button type="button" onClick={prev} disabled={!canPrev} aria-label="Fotos anteriores" className={`pointer-events-auto ${arrowBtn}`}>
            <Chevron dir="left" />
          </button>
          <button type="button" onClick={next} disabled={!canNext} aria-label="Próximas fotos" className={`pointer-events-auto ${arrowBtn}`}>
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${openIndex! + 1} de ${imgs.length}`}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > SWIPE_THRESHOLD) step(dx < 0 ? 1 : -1);
          }}
        >
          <img
            key={current.name}
            src={srcOf(current.name)}
            alt={current.alt}
            className="max-h-[85vh] max-w-[92vw] rounded-xl2 shadow-2xl animate-[fadein_.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          />

          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Foto anterior" className={`absolute left-3 md:left-6 ${arrowBtn}`}>
            <Chevron dir="left" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Próxima foto" className={`absolute right-3 md:right-6 ${arrowBtn}`}>
            <Chevron dir="right" />
          </button>
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Fechar"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink text-xl leading-none shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-gold"
          >
            ×
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white/90">
            {openIndex! + 1} / {imgs.length}
          </p>
        </div>
      )}
    </section>
  );
}
