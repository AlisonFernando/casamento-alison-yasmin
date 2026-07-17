import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WEDDING } from "../app/config";

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
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 800px at 50% 15%, #FBF8F1 0%, #F3ECDD 55%, #EFE7D6 100%)",
      }}
    >
      {/* bloco verde diagonal no canto inferior direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-2 h-[42%] w-[52%]"
        style={{
          background: "#6E7C55",
          clipPath: "polygon(35% 100%, 100% 35%, 100% 100%)",
        }}
      />

      {/* ramo de eucalipto no topo */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-full h-[170px] opacity-90"
        viewBox="0 0 400 170"
        fill="none"
      >
        <path
          d="M-10 10C40 30 90 20 130 45C170 70 190 40 230 30"
          stroke="#8FA37B"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g fill="#B7C4A5" fillOpacity="0.85">
          <ellipse cx="20" cy="15" rx="14" ry="8" transform="rotate(-25 20 15)" />
          <ellipse cx="48" cy="28" rx="16" ry="9" transform="rotate(-10 48 28)" />
          <ellipse cx="80" cy="24" rx="14" ry="8" transform="rotate(15 80 24)" />
          <ellipse cx="112" cy="38" rx="15" ry="8.5" transform="rotate(-5 112 38)" />
          <ellipse cx="145" cy="48" rx="13" ry="7.5" transform="rotate(20 145 48)" />
          <ellipse cx="178" cy="42" rx="14" ry="8" transform="rotate(-15 178 42)" />
          <ellipse cx="208" cy="32" rx="12" ry="7" transform="rotate(10 208 32)" />
        </g>
        <g fill="#9CAF88" fillOpacity="0.55">
          <circle cx="35" cy="10" r="3" />
          <circle cx="95" cy="15" r="2.5" />
          <circle cx="160" cy="22" r="3" />
        </g>
      </svg>

      <div className="relative flex flex-col items-center text-center px-6">
        <p
          className="text-xs tracking-[0.35em] uppercase"
          style={{ color: "#9C7C45" }}
        >
          Casamento
        </p>

        <h1
          className="mt-2 text-6xl md:text-7xl"
          style={{ fontFamily: "'Alex Brush', cursive", color: "#5B6B4E" }}
        >
          {WEDDING.couple}
        </h1>

        {/* envelope */}
        <div className="relative mt-10 h-[190px] w-[270px] md:h-[220px] md:w-[310px]">
          <button
            ref={envelopeRef}
            onClick={handleEnter}
            aria-label="Abrir convite"
            title="Abrir convite"
            className="absolute inset-0 overflow-hidden rounded-[10px]"
            style={{
              background: "#6E7C55",
              boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[46%] origin-top"
              style={{
                background: "#5D6A47",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 310 220" fill="none">
              <path
                d="M0 0L155 101L310 0"
                stroke="rgba(0,0,0,0.22)"
                strokeWidth="2"
              />
            </svg>

            <div
              className="absolute left-1/2 top-[42%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #D8B978, #C6A769 45%, #9C7C45 100%)",
                boxShadow:
                  "0 6px 14px rgba(0,0,0,0.35), inset 0 2px 3px rgba(255,255,255,0.35)",
              }}
            />
          </button>
        </div>

        <p ref={hintRef} className="mt-6 text-sm" style={{ color: "#7C7568" }}>
          Clique no envelope para abrir
        </p>
      </div>
    </div>
  );
}
