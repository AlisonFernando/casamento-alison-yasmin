import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./components/Splash";
import { revealOnScroll } from "./app/motion";

import MusicPlayer from "./components/overlays/MusicPlayer";
import FloatingRSVP from "./components/overlays/FloatingRSVP";
import ScrollToTop from "./components/overlays/ScrollToTop";

import Home from "./pages/Home";

// Lazy: essa página puxa o SDK do Firebase, que não deve pesar no convite
// principal pra quem nunca visita a lista de presentes.
const GiftListPage = lazy(() => import("./pages/GiftListPage"));

export default function App() {
  const [entered, setEntered] = useState<boolean>(() => {
    try {
      return localStorage.getItem("entered_invite") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!entered) return;
    const id = requestAnimationFrame(() => revealOnScroll());
    return () => cancelAnimationFrame(id);
  }, [entered]);

  const handleEnter = () => {
    try {
      localStorage.setItem("entered_invite", "1");
    } catch {
      // ignore
    }
    setEntered(true);
  };

  if (!entered) return <Splash onEnter={handleEnter} />;

  return (
    <>
      <MusicPlayer autoPlay />
      <FloatingRSVP />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/presentes"
          element={
            <Suspense fallback={null}>
              <GiftListPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
