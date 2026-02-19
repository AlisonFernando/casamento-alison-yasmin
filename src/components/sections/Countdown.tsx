import { useEffect, useState } from "react";
import { WEDDING } from "../../app/config";

function getDiff() {
  const target = new Date(WEDDING.dateISO).getTime();
  const now = Date.now();
  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { days, hours, minutes, seconds };
}

// ✅ mover pra fora evita "Cannot create components during render"
function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    
    <div className="rounded-xl2 bg-white/45 backdrop-blur border border-white/40 px-5 py-4 text-center">
      <div className="text-3xl md:text-4xl tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-xs md:text-sm text-ink2">{label}</div>
    </div>
  );
}

export default function Countdown() {
  const [diff, setDiff] = useState(getDiff());

  useEffect(() => {
    const id = setInterval(() => setDiff(getDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section data-animate>
      <h2
        className="text-2xl md:text-3xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Save the Date
      </h2>
      <p className="mt-2 text-ink2">Faltam apenas…</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <CountdownItem label="dias" value={diff.days} />
        <CountdownItem label="horas" value={diff.hours} />
        <CountdownItem label="minutos" value={diff.minutes} />
        <CountdownItem label="segundos" value={diff.seconds} />
      </div>

      <div className="mt-8 mx-auto h-px w-24 bg-gold/40" />
    </section>
  );
}
