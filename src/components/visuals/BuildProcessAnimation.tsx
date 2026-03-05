"use client";

import { useState, useEffect } from "react";

const phases = [
  {
    label: "Blueprint",
    desc: "Prototyp inom 48h",
    color: "#34d399",
    lines: ["→ Analyserar behov...", "→ Designar prototyp...", "→ Levererar inom 48h"],
  },
  {
    label: "The Build",
    desc: "Fast startkostnad",
    color: "#60a5fa",
    lines: ["→ Bygger komponenter...", "→ Testar säkerhet...", "→ Kvalitetsgranskar..."],
  },
  {
    label: "Lansering",
    desc: "Produktionsklar",
    color: "#a78bfa",
    lines: ["→ Deployar till produktion...", "→ Verifierar prestanda...", "✓ Live och redo!"],
  },
];

export function BuildProcessAnimation() {
  const [phase, setPhase] = useState(0);
  const [lineIndex, setLineIndex] = useState(-1);

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setLineIndex(-1);
    const timers = [0, 1, 2].map((i) =>
      setTimeout(() => setLineIndex(i), 400 + i * 400)
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  return (
    <div className="w-full max-w-md mx-auto" aria-hidden="true">
      {/* Progress bar */}
      <div className="flex items-center gap-0 mb-6">
        {phases.map((p, i) => (
          <div key={i} className="flex items-center flex-1">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500"
              style={{
                background: i <= phase ? p.color : "var(--color-navy-light)",
                border: `2px solid ${i <= phase ? p.color : "rgba(255,255,255,0.1)"}`,
                color: i <= phase ? "var(--color-midnight)" : "var(--color-slate)",
                transform: i === phase ? "scale(1.2)" : "scale(1)",
                boxShadow: i === phase ? `0 0 24px ${p.color}40` : "none",
              }}
            >
              {i + 1}
            </div>
            {i < 2 && (
              <div className="flex-1 h-0.5 mx-1.5">
                <div
                  className="h-full rounded transition-all duration-700"
                  style={{
                    background: i < phase ? phases[i + 1].color : "rgba(255,255,255,0.08)",
                    width: i < phase ? "100%" : i === phase ? "50%" : "0%",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Phase labels */}
      <div className="flex mb-6">
        {phases.map((p, i) => (
          <div key={i} className="flex-1 text-center">
            <span
              className="text-xs font-medium transition-colors duration-300"
              style={{ color: i === phase ? p.color : "var(--color-slate)" }}
            >
              {p.label}
            </span>
          </div>
        ))}
      </div>

      {/* Active phase card */}
      <div
        className="rounded-xl p-6 transition-all duration-400"
        style={{
          background: "var(--color-navy-mid)",
          border: `1px solid ${phases[phase].color}30`,
        }}
      >
        <p className="text-white text-lg font-bold mb-1">{phases[phase].label}</p>
        <p className="text-silver text-sm mb-4">{phases[phase].desc}</p>

        <div className="font-mono text-xs space-y-1.5">
          {phases[phase].lines.map((line, i) => (
            <div
              key={`${phase}-${i}`}
              className="transition-all duration-300"
              style={{
                color: i === 0 ? phases[phase].color : "var(--color-slate)",
                opacity: i <= lineIndex ? 1 : 0,
                transform: i <= lineIndex ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
