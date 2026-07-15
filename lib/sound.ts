// Runtime-synthesized WebAudio sound layer. Zero assets, CSP-safe.
// Exactly three semantic events: page navigation, theme toggle, view switch.
// Gated on a persisted user toggle and prefers-reduced-motion.

const STORAGE_KEY = "portfolio.sound";
const MASTER_VOLUME = 0.12;

let ctx: AudioContext | null = null;
let activeNodes: OscillatorNode[] = [];

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return null;
    }
  }
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

export function soundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return localStorage.getItem(STORAGE_KEY) !== "off";
}

export function setSoundEnabled(enabled: boolean) {
  localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
}

function stopActive() {
  for (const node of activeNodes) {
    try {
      node.stop();
    } catch {}
  }
  activeNodes = [];
}

function playNotes(
  freqs: number[],
  { spacing = 0.08, decay = 0.28, volume = MASTER_VOLUME }: { spacing?: number; decay?: number; volume?: number } = {},
) {
  if (!soundEnabled()) return;
  const audio = getContext();
  if (!audio) return;

  stopActive();
  const now = audio.currentTime;

  freqs.forEach((freq, i) => {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const start = now + i * spacing;

    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, start + decay);

    osc.connect(gain).connect(audio.destination);
    osc.start(start);
    osc.stop(start + decay + 0.05);
    activeNodes.push(osc);
  });
}

export const sound = {
  /** Page navigation: short pentatonic run, the "turn of a page". */
  nav() {
    playNotes([523.25, 659.25, 880], { spacing: 0.07, volume: MASTER_VOLUME * 0.8 });
  },
  /** Theme toggle: single soft tick. */
  themeToggle() {
    playNotes([987.77], { decay: 0.12 });
  },
  /** View switch (e.g. the TLDR toggle on /work): two-note blip. */
  viewSwitch() {
    playNotes([659.25, 783.99], { spacing: 0.05, decay: 0.16 });
  },
};
