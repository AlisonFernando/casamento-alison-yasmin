import { useState } from "react";

const imgs = ["g1.jpeg","g2.jpeg","g3.jpeg","g4.jpeg","g5.jpeg","g6.jpeg"];
const BASE = import.meta.env.BASE_URL;

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section data-animate>
      <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
        Galeria
      </h2>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {imgs.map((name) => {
          const src = `${BASE}images/gallery/${name}`;
          return (
            <button
              key={name}
              onClick={() => setOpen(src)}
              className="group overflow-hidden rounded-xl2 bg-white/35 border border-white/40 text-left"
            >
              <img
                src={src}
                alt="Foto"
                className="h-52 md:h-60 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setOpen(null)}
        >
          <img
            src={open}
            className="max-h-[85vh] max-w-[92vw] rounded-xl2 shadow-2xl"
            alt="Foto ampliada"
          />
        </div>
      )}
    </section>
  );
}
