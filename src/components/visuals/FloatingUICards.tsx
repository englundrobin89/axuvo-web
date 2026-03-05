"use client";

import { useState, useEffect } from "react";

const cards = [
  { title: "Bokningsapp", x: 10, y: 10, w: 170, h: 200 },
  { title: "Kundportal", x: 130, y: 55, w: 190, h: 170 },
  { title: "Dashboard", x: 50, y: 115, w: 155, h: 130 },
];

export function FloatingUICards() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-[380px] h-[300px] mx-auto" aria-hidden="true">
      {cards.map((card, i) => {
        const isActive = step === i || step === 3;
        return (
          <div
            key={i}
            className="absolute rounded-xl p-4 transition-all duration-700 ease-out"
            style={{
              left: card.x,
              top: card.y,
              width: card.w,
              height: card.h,
              background: "var(--color-navy-mid)",
              border: `1px solid ${isActive ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.06)"}`,
              transform: isActive ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: isActive ? "0 20px 40px rgba(52,211,153,0.08)" : "0 4px 12px rgba(0,0,0,0.2)",
              opacity: isActive ? 1 : 0.5,
              zIndex: isActive ? 10 : 1,
            }}
          >
            <span className="text-mint text-xs font-semibold tracking-wide">{card.title}</span>
            <div className="flex gap-1.5 mt-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-mint" />
            </div>
            {[...Array(4)].map((_, j) => (
              <div
                key={j}
                className="rounded transition-opacity duration-500"
                style={{
                  height: j === 0 ? 18 : 7,
                  background: j === 0 ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.04)",
                  marginBottom: 5,
                  width: j === 0 ? "65%" : `${55 + i * 10 + j * 8}%`,
                  opacity: isActive ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 380 300">
        <line x1="95" y1="200" x2="225" y2="140" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="225" y1="225" x2="130" y2="240" stroke="rgba(52,211,153,0.1)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
