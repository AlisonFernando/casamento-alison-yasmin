import { useCallback, useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Carrossel baseado em scroll nativo (scroll-snap): o swipe no celular é do
 * próprio navegador; as setas só rolam o trilho uma "página" por vez.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByPage = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = first ? first.offsetWidth + gap : el.clientWidth;
    // rola quantos cards cabem inteiros na tela (mínimo 1)
    const perPage = Math.max(1, Math.floor((el.clientWidth + gap) / step));
    el.scrollBy({
      left: dir * step * perPage,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, []);

  return {
    trackRef,
    canPrev,
    canNext,
    prev: () => scrollByPage(-1),
    next: () => scrollByPage(1),
  };
}
