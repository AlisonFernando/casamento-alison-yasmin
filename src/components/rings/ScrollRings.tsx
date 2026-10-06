import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WEDDING } from "../../app/config";
import Rings from "./Rings";

gsap.registerPlugin(ScrollTrigger);

const [year, month, day] = WEDDING.dateISO.slice(0, 10).split("-");
const SHORT_DATE = `${day} · ${month} · ${year}`;

export default function ScrollRings() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap
          .timeline({
            scrollTrigger: { start: 0, end: "max", scrub: 0.6 },
            defaults: { ease: "none" },
          })
          .fromTo('[data-ring="left"]', { x: -14 }, { x: 0, duration: 0.9 }, 0)
          .fromTo('[data-ring="right"]', { x: 14 }, { x: 0, duration: 0.9 }, 0)
          .fromTo(
            "[data-ring-spin]",
            { rotate: -50, svgOrigin: "44 18" },
            { rotate: 0, duration: 0.9 },
            0
          )
          .fromTo(
            "[data-rings-caption]",
            { maxWidth: 0, opacity: 0 },
            { maxWidth: 160, opacity: 1, duration: 0.1 },
            0.9
          );
      },
      root
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-4 top-4 z-40 flex items-center rounded-full border border-white/50 bg-white/55 px-3 py-2 shadow-sm backdrop-blur md:bottom-6 md:left-6 md:top-auto"
    >
      <Rings className="h-6 w-12" />
      <span
        data-rings-caption
        className="overflow-hidden whitespace-nowrap pl-2 text-[11px] tracking-[0.2em] text-ink2"
      >
        {SHORT_DATE}
      </span>
    </div>
  );
}
