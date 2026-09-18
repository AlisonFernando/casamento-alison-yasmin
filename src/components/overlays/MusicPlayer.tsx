import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";

type Props = {
  autoPlay?: boolean;
};

const BASE = import.meta.env.BASE_URL;

export default function MusicPlayer({ autoPlay }: Props) {
  // ✅ já inicia ligado se autoPlay for true
  const [on, setOn] = useState(!!autoPlay);

  const sound = useMemo(
    () =>
      new Howl({
        src: [`${BASE}audio/luz-brilhar.mp3`],
        loop: true,
        volume: 0,
        html5: true,
      }),
    [],
  );

  useEffect(() => {
    if (on) {
      if (!sound.playing()) sound.play();

      // 🎹 FADE IN SUAVE
      sound.fade(sound.volume(), 0.35, 1500);
      return;
    }

    // 🎹 FADE OUT SUAVE, depois pausa de fato (senão o áudio continua
    // tocando silenciosamente em segundo plano no mobile)
    sound.fade(sound.volume(), 0, 800);
    const timer = setTimeout(() => sound.pause(), 800);
    return () => clearTimeout(timer);
  }, [on, sound]);

  // pausa quando a aba/app vai para segundo plano e retoma ao voltar,
  // se o usuário não tiver desligado manualmente
  useEffect(() => {
    function handleVisibilityChange() {
      if (document.hidden) {
        sound.pause();
      } else if (on) {
        sound.play();
        sound.fade(sound.volume(), 0.35, 400);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [on, sound]);

  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="fixed bottom-4 right-4 z-50 rounded-full border border-white/50 bg-white/55 backdrop-blur px-4 py-2 text-sm text-ink shadow-sm hover:shadow-md transition"
    >
      {on ? "🎹 Música: ON" : "🎹 Música: OFF"}
    </button>
  );
}
