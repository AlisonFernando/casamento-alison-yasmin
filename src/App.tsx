import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./components/Splash";
import { revealOnScroll } from "./app/motion";

import MusicPlayer from "./components/overlays/MusicPlayer";
import FloatingRSVP from "./components/overlays/FloatingRSVP";
import ScrollToTop from "./components/overlays/ScrollToTop";

import Home from "./pages/Home";
import GiftListPage from "./pages/GiftListPage";

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
        <Route path="/presentes" element={<GiftListPage />} />
      </Routes>
    </>
  );
}
