import { useEffect, useState } from "react";

export default function FloatingRSVP() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setShow(h > 0 && y / h > 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#rsvp"
      className="fixed bottom-4 left-4 z-50 rounded-full bg-gold/20 border border-gold/30 px-5 py-2 text-sm text-ink shadow-sm backdrop-blur hover:bg-gold/25 transition md:hidden"
    >
      Confirmar presença
    </a>
  );
}
