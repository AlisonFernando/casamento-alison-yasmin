import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WEDDING } from "../../app/config";
gsap.registerPlugin(ScrollTrigger);
export default function HeroEnvelope() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const flapRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [opened, setOpened] = useState(false);
  const paralaxRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (!rootRef.current) return;

  gsap.fromTo(
    rootRef.current,
    { opacity: 0, scale: 0.985 },
    { opacity: 1, scale: 1, duration: 1.05, ease: "power2.out" }
  );

  if (paralaxRef.current) {
    gsap.to(paralaxRef.current, {
      y: 18,
      ease: "none",
      scrollTrigger: {
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  return () => {
    // ✅ evita duplicar triggers no dev
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);


  function open() {
  if (opened) return;
  setOpened(true);

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  tl.to(flapRef.current, { rotateX: 170, duration: 0.9 }, 0)
    .to(cardRef.current, { y: -130, duration: 1.0 }, 0.2);

  const reveals = rootRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");

  if (reveals && reveals.length > 0) {
    tl.fromTo(
      reveals,
      { opacity: 0, y: 12, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.08 },
      0.55
    );
  }
}

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-serenity-50 via-warm to-serenity-50" />

      <div className="relative mx-auto max-w-[1100px] px-5 py-16 md:py-24">
        <div ref={rootRef} className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-ink2 tracking-wide">Convite de casamento</p>

            <h1
              data-reveal
              className="mt-3 text-4xl md:text-6xl leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {WEDDING.couple}
            </h1>

            <div data-reveal className="mt-6 space-y-2 text-ink2">
              <p className="text-base md:text-lg">
                {WEDDING.dateLabel} • {WEDDING.timeLabel}
              </p>
              <p className="text-base md:text-lg">
                {WEDDING.venue} — {WEDDING.city}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={open}
                className="rounded-full px-6 py-3 text-sm md:text-base bg-serenity-100 text-ink shadow-sm hover:shadow-md transition"
              >
                Abrir convite
              </button>

              <a
                data-reveal
                href="#rsvp"
                className="rounded-full px-6 py-3 text-sm md:text-base border border-gold/40 text-ink hover:bg-gold/10 transition"
              >
                Confirmar presença
              </a>
            </div>

            <p data-reveal className="mt-8 text-sm text-ink2 max-w-prose">
              {WEDDING.verseHero.text} —{" "}
              <span className="text-ink">{WEDDING.verseHero.ref}</span>
            </p>
          </div>

          {/* Envelope clean */}
          <div ref={paralaxRef} className="flex justify-center md:justify-end hero-parallax">

            <div className="relative w-[320px] h-[220px] md:w-[380px] md:h-[260px]">
              <div className="absolute inset-0 rounded-[28px] bg-white/45 backdrop-blur border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.08)]" />
              <div className="absolute inset-[14px] rounded-[22px] bg-gradient-to-b from-white/60 to-white/30 border border-white/50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[240px] h-[150px] md:w-[280px] md:h-[175px]">
                  <div className="absolute inset-0 rounded-[20px] bg-white/70 border border-white/60 shadow-sm" />

                  <div
                    ref={flapRef}
                    className="absolute left-0 right-0 top-0 h-[55%] origin-top"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(0deg)",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/85 border-b border-white/60 rounded-t-[20px] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                  </div>

                  <div
                    ref={cardRef}
                    className="absolute left-1/2 top-1/2 w-[78%] h-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white/90 border border-gold/25 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    style={{ transform: "translate(-50%,-50%)" }}
                  >
                    <div className="p-4 text-center">
                      <div className="text-[11px] text-ink2 tracking-wide">
                        {WEDDING.dateLabel}
                      </div>
                      <div
                        className="mt-2 text-xl md:text-2xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {WEDDING.couple}
                      </div>
                      <div className="mt-2 text-[11px] text-ink2">
                        {WEDDING.timeLabel} — {WEDDING.city}
                      </div>
                      <div className="mt-3 mx-auto h-px w-16 bg-gold/40" />
                    </div>
                  </div>

                  <div className="absolute left-0 right-0 bottom-0 h-[55%] rounded-b-[20px] bg-white/65 border-t border-white/60 [clip-path:polygon(0_100%,100%_100%,50%_0)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
