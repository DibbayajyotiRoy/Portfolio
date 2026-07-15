"use client";

import { useEffect, useState } from "react";
import { setSoundEnabled, sound, soundEnabled } from "@/lib/sound";

const SoundToggle = () => {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setEnabled(soundEnabled());
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        const next = !enabled;
        setSoundEnabled(next);
        setEnabled(next);
        if (next) sound.viewSwitch();
      }}
      aria-pressed={enabled}
      className="font-mono text-sm opacity-50 transition-opacity hover:opacity-100 active:scale-[0.97]"
    >
      sound: {enabled ? "on" : "off"}
    </button>
  );
};

export default SoundToggle;
