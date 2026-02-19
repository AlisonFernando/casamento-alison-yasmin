import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  onEnter: () => void;
};

export default function Splash({ onEnter }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const envelopeRef = useRef<HTMLButtonElement | null>(null);
  const hintRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !envelopeRef.current) return;

    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    gsap.to(envelopeRef.current, {
      y: 8,
      duration: 1.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    if (hintRef.current) {
      gsap.fromTo(
        hintRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  const handleEnter = () => {
    if (!rootRef.current || !envelopeRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // ✅ “abre” o convite: envelope dá zoom e some
    tl.to(envelopeRef.current, { scale: 0.98, duration: 0.12 })
      .to(envelopeRef.current, { scale: 1.04, duration: 0.22 })
      .to(envelopeRef.current, { scale: 1.18, duration: 0.35 }, 0.15)
      .to(rootRef.current, { opacity: 0, duration: 0.55 }, 0.18)
      .add(() => onEnter());
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-grain"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 30%, #F6F8F6 0%, #DDE5DE 55%, #DDE5DE 100%)",
      }}
    >
      <div className="text-center px-6">
        <p className="text-sm text-ink2 tracking-wide">Convite</p>

        <button
          ref={envelopeRef}
          onClick={handleEnter}
          className="mt-5 inline-flex items-center justify-center rounded-[28px] border border-white/50 bg-white/50 backdrop-blur px-10 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)] transition"
          aria-label="Abrir convite"
          title="Abrir convite"
        >
          <svg width="140" height="96" viewBox="0 0 140 96" fill="none">
            <rect x="10" y="18" width="120" height="70" rx="16" fill="white" fillOpacity="0.75" />
            <path
              d="M18 28c0-5.5 4.5-10 10-10h84c5.5 0 10 4.5 10 10v2L70 62 18 30v-2z"
              fill="white"
              fillOpacity="0.9"
            />
            <path
              d="M18 34l52 32 52-32v44c0 5.5-4.5 10-10 10H28c-5.5 0-10-4.5-10-10V34z"
              fill="white"
              fillOpacity="0.7"
            />
            <path
              d="M18 34l52 32 52-32"
              stroke="#C6A769"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p ref={hintRef} className="mt-5 text-sm text-ink2">
          Toque no envelope para abrir
        </p>
      </div>
    </div>
  );
}
