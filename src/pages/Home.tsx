import HeroBanner from "../components/sections/HerroBanner";
import StorySplit from "../components/sections/StorySplit";
import Countdown from "../components/sections/Countdown";
import WeddingInfo from "../components/sections/WeddingInfo";
import Gallery from "../components/sections/Gallery";
import Godparents from "../components/sections/Godparents";

import GiftList from "../components/sections/GiftList";
import DressCode from "../components/sections/DressCode";
import FinalMessage from "../components/sections/FinalMessage";
import RSVPWhatsApp from "../components/sections/RSVPWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-grain">
      {/* 1) HERO imagem única (altura menor, igual exemplo) */}
      <HeroBanner />

      {/* 2) bloco branco: carrossel + ourstory */}
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="py-16 md:py-20 space-y-16 md:space-y-20">
          <StorySplit />

          <Gallery />

          {/* 3) bloco verde sálvia claro: countdown */}
          <div className="rounded-xl2 bg-white/40 border border-white/40 backdrop-blur p-6 md:p-8">
            <Countdown />
          </div>
        </div>
      </div>

      {/* 4) bloco sálvia com alianças + infos + versículo */}
      <WeddingInfo />

      {/* 5) blocos: presentes, traje, mensagem */}
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="py-16 md:py-20 space-y-10">
          <Godparents />

          <div className="grid gap-6 md:grid-cols-3">
            <div data-animate className="md:col-span-1">
              <GiftList />
            </div>
            <div data-animate className="md:col-span-1">
              <DressCode />
            </div>
            <div data-animate className="md:col-span-1">
              <FinalMessage />
            </div>
          </div>

          {/* 6) confirmação com QR */}
          <div data-animate>
            <RSVPWhatsApp />
          </div>
        </div>
      </div>

      <footer className="py-10 text-center text-sm text-ink2">
        Feito com carinho 💙
      </footer>
    </main>
  );
}
