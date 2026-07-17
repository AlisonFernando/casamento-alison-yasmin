import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WEDDING } from "../app/config";

type Props = {
  onEnter: () => void;
};

const [firstName, secondName] = WEDDING.couple.split("&").map((s) => s.trim());
const initials = [firstName?.[0], secondName?.[0]].filter(Boolean);

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

    // ✅ “abre” o convite: selo dá zoom e some
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
          "radial-gradient(1100px 750px at 50% 20%, #3E4A35 0%, #2A3324 65%, #1F2618 100%)",
      }}
    >
      <div className="relative flex flex-col items-center text-center px-6">
        {/* buquê floral */}
        <svg width="140" height="90" viewBox="0 0 140 90" fill="none" className="opacity-90">
          <g stroke="#EDE7D6" strokeOpacity="0.7" strokeWidth="1.2" strokeLinecap="round">
            <path d="M70 88C68 62 60 42 45 20" />
            <path d="M70 88C72 58 78 38 90 15" />
            <path d="M70 88C69 52 65 32 58 10" />
            <path d="M70 88C71 58 76 40 95 30" />
          </g>
          <g fill="#F5F1E6">
            <circle cx="45" cy="18" r="3" />
            <circle cx="52" cy="12" r="2.4" />
            <circle cx="40" cy="10" r="2" />
            <circle cx="90" cy="13" r="3" />
            <circle cx="97" cy="18" r="2.2" />
            <circle cx="85" cy="8" r="2" />
            <circle cx="58" cy="8" r="2.6" />
            <circle cx="63" cy="4" r="2" />
            <circle cx="95" cy="28" r="2.4" />
            <circle cx="100" cy="24" r="2" />
          </g>
        </svg>

        {/* fita dourada atrás do selo */}
        <div className="relative mt-2 flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 h-px w-[220px] -translate-x-1/2 -translate-y-1/2 bg-gold/50" />

          <button
            ref={envelopeRef}
            onClick={handleEnter}
            aria-label="Abrir convite"
            title="Abrir convite"
            className="relative flex h-[130px] w-[130px] items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #D8B978, #C6A769 45%, #9C7C45 100%)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -6px 10px rgba(0,0,0,0.35)",
            }}
          >
            <div
              className="h-[100px] w-[100px] rounded-full border border-black/10"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, #C9AC72, #A98A52 60%, #8A6D3E 100%)",
              }}
            />
          </button>
        </div>

        {/* monograma */}
        <div
          className="mt-8 flex items-baseline gap-3"
          style={{ fontFamily: "Playfair Display, serif", color: "#D9BE85" }}
        >
          <span className="text-5xl md:text-6xl">{initials[0]}</span>
          <span className="text-2xl">&amp;</span>
          <span className="text-5xl md:text-6xl">{initials[1]}</span>
        </div>

        <p ref={hintRef} className="mt-6 text-sm tracking-wide" style={{ color: "#CBD1C4" }}>
          Toque no lacre para abrir o convite
        </p>
      </div>
    </div>
  );
}
