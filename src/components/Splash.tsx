import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WEDDING } from "../app/config";

type Props = {
  onEnter: () => void;
};

export default function Splash({ onEnter }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const envelopeRef = useRef<HTMLButtonElement | null>(null);
  const flapRef = useRef<HTMLDivElement | null>(null);
  const letterRef = useRef<HTMLDivElement | null>(null);
  const sealLeftRef = useRef<SVGGElement | null>(null);
  const sealRightRef = useRef<SVGGElement | null>(null);
  const hintRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !stageRef.current || !letterRef.current) return;

    // a carta começa totalmente invisível: não dá pra confiar só no
    // z-index + clip-path das abas pra escondê-la, os cantos do
    // envelope deixam frestas
    gsap.set(letterRef.current, { opacity: 0 });

    gsap.fromTo(
      rootRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    gsap.to(stageRef.current, {
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
    if (
      !rootRef.current ||
      !stageRef.current ||
      !flapRef.current ||
      !letterRef.current ||
      !sealLeftRef.current ||
      !sealRightRef.current
    )
      return;

    gsap.killTweensOf(stageRef.current);

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // o lacre "quebra": os dois anéis se separam e desaparecem
    tl.to([sealLeftRef.current, sealRightRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    })
      .to(
        sealLeftRef.current,
        { x: -9, y: -3, rotate: -18, duration: 0.3, ease: "power1.in" },
        "<"
      )
      .to(
        sealRightRef.current,
        { x: 9, y: -3, rotate: 18, duration: 0.3, ease: "power1.in" },
        "<"
      )
      // a aba dobra para trás, em 3D, como se estivesse abrindo de verdade
      .to(
        flapRef.current,
        { rotateX: -165, duration: 0.65, ease: "power3.inOut" },
        0.12
      )
      .set(flapRef.current, { zIndex: 5 }, 0.32)
      // a carta desliza para fora do envelope
      .to(
        letterRef.current,
        {
          opacity: 1,
          y: "-62%",
          rotate: -2.5,
          scale: 1.03,
          duration: 0.7,
          ease: "power3.out",
        },
        0.3
      )
      // tudo se dissolve revelando o convite
      .to(stageRef.current, { scale: 1.08, duration: 0.5, ease: "power2.in" }, 0.75)
      .to(rootRef.current, { opacity: 0, duration: 0.5 }, 0.85)
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
        <div
          ref={stageRef}
          className="relative mt-10 h-[190px] w-[270px] md:h-[220px] md:w-[310px]"
          style={{ perspective: "1400px" }}
        >
          <button
            ref={envelopeRef}
            onClick={handleEnter}
            aria-label="Abrir convite"
            title="Abrir convite"
            className="absolute inset-0 rounded-[10px]"
            style={{
              background: "#6E7C55",
              boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* a carta, revelada ao abrir */}
            <div
              ref={letterRef}
              className="absolute left-1/2 flex flex-col items-center pt-7"
              style={{
                top: "16%",
                height: "78%",
                width: "82%",
                transform: "translate(-50%, 0)",
                background: "#FBF8F1",
                borderRadius: "3px 3px 9px 9px",
                boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                zIndex: 10,
              }}
            >
              <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
                <circle cx="9" cy="8" r="6.5" fill="none" stroke="#C6A769" strokeWidth="1.3" />
                <circle cx="17" cy="8" r="6.5" fill="none" stroke="#C6A769" strokeWidth="1.3" />
              </svg>
              <p
                className="mt-3 text-[10px] uppercase tracking-[0.25em]"
                style={{ color: "#9C8F76" }}
              >
                Convite de casamento
              </p>
              <p
                className="mt-1 text-2xl"
                style={{ fontFamily: "'Alex Brush', cursive", color: "#5B6B4E" }}
              >
                {WEDDING.couple}
              </p>
              <p className="mt-1 text-[11px]" style={{ color: "#7C7568" }}>
                {WEDDING.dateLabel}
              </p>
            </div>

            {/* bolso frontal do envelope (fica sempre por cima da parte de baixo da carta) */}
            <div
              className="absolute inset-x-0 bottom-0 h-[72%]"
              style={{
                background: "#6E7C55",
                clipPath: "polygon(0 100%, 0 38%, 50% 72%, 100% 38%, 100% 100%)",
                zIndex: 20,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            />

            {/* aba do envelope, dobra em 3D ao abrir */}
            <div
              ref={flapRef}
              className="absolute inset-x-0 top-0 h-[54%]"
              style={{
                background: "#5D6A47",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: 30,
              }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 310 220"
                fill="none"
              >
                <path d="M0 0L155 101L310 0" stroke="rgba(0,0,0,0.22)" strokeWidth="2" />
              </svg>

              {/* lacre: dois anéis entrelaçados que se separam ao clicar */}
              <svg
                className="absolute left-1/2 top-[64%] -translate-x-1/2 -translate-y-1/2"
                width="56"
                height="40"
                viewBox="0 0 56 40"
                aria-hidden="true"
              >
                <g ref={sealLeftRef}>
                  <circle
                    cx="21"
                    cy="20"
                    r="11"
                    fill="none"
                    stroke="url(#splashSealGold)"
                    strokeWidth="3.5"
                  />
                </g>
                <g ref={sealRightRef}>
                  <circle
                    cx="35"
                    cy="20"
                    r="11"
                    fill="none"
                    stroke="url(#splashSealGold)"
                    strokeWidth="3.5"
                  />
                </g>
                <defs>
                  <linearGradient id="splashSealGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F0DBA8" />
                    <stop offset="50%" stopColor="#C6A769" />
                    <stop offset="100%" stopColor="#9C7C45" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </div>

        <p ref={hintRef} className="mt-6 text-sm" style={{ color: "#7C7568" }}>
          Clique no envelope para abrir
        </p>
      </div>
    </div>
  );
}
