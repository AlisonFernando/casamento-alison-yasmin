import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Rings from "./Rings";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  className?: string;
};

export default function RingsMark({ className }: Props) {
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
            scrollTrigger: { trigger: root, start: "top 80%", once: true },
            defaults: { duration: 1.4, ease: "expo.out" },
          })
          .from('[data-ring="left"]', { x: -18, opacity: 0 }, 0.15)
          .from('[data-ring="right"]', { x: 18, opacity: 0 }, 0.15)
          .from("[data-ring-spin]", { rotate: -70, svgOrigin: "44 18" }, 0.15);
      },
      root
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <Rings className="h-full w-full" title="Alianças entrelaçadas" />
    </div>
  );
}
