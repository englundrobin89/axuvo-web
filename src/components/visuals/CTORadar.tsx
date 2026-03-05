"use client";

import { useState, useEffect } from "react";

const areas = [
  { label: "Teknikstrategi", angle: -90 },
  { label: "Arkitektur", angle: -30 },
  { label: "Säkerhet", angle: 30 },
  { label: "Leverantörer", angle: 90 },
  { label: "Team", angle: 150 },
  { label: "Digital plan", angle: 210 },
];

const CX = 160;
const CY = 140;
const R = 95;

export function CTORadar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % 6), 2000);
    return () => clearInterval(t);
  }, []);

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  return (
    <div className="relative w-full max-w-[340px] h-[300px] mx-auto" aria-hidden="true">
      <svg width="320" height="280" viewBox="0 0 320 280" className="w-full h-full">
        {/* Grid circles */}
        {[30, 60, 95].map((r) => (
          <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}

        {/* Radar lines */}
        {areas.map((area, i) => {
          const rad = toRad(area.angle);
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={CX + Math.cos(rad) * R}
              y2={CY + Math.sin(rad) * R}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        {/* Filled polygon */}
        <polygon
          points={areas
            .map((area, i) => {
              const rad = toRad(area.angle);
              const dist = i === active ? R * 0.88 : R * 0.45;
              return `${CX + Math.cos(rad) * dist},${CY + Math.sin(rad) * dist}`;
            })
            .join(" ")}
          fill="rgba(52,211,153,0.08)"
          stroke="rgba(52,211,153,0.6)"
          strokeWidth="1.5"
          className="transition-all duration-700 ease-out"
        />

        {/* Dots and labels */}
        {areas.map((area, i) => {
          const rad = toRad(area.angle);
          const isActive = i === active;
          const dotDist = isActive ? R * 0.88 : R * 0.45;
          const labelDist = R + 22;
          const dx = CX + Math.cos(rad) * dotDist;
          const dy = CY + Math.sin(rad) * dotDist;
          const lx = CX + Math.cos(rad) * labelDist;
          const ly = CY + Math.sin(rad) * labelDist;

          return (
            <g key={i}>
              {/* Dot */}
              <circle
                cx={dx}
                cy={dy}
                r={isActive ? 5 : 3}
                fill={isActive ? "#34d399" : "#94a3b8"}
                className="transition-all duration-500"
              />
              {/* Pulse ring */}
              {isActive && (
                <circle cx={dx} cy={dy} r="5" fill="none" stroke="#34d399" strokeWidth="1">
                  <animate attributeName="r" from="5" to="16" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Label */}
              <text
                x={lx}
                y={ly}
                fill={isActive ? "#ffffff" : "#94a3b8"}
                fontSize="10.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight={isActive ? "600" : "400"}
                className="transition-all duration-300"
              >
                {area.label}
              </text>
            </g>
          );
        })}

        {/* Center */}
        <circle cx={CX} cy={CY} r="6" fill="#34d399" />
        <circle cx={CX} cy={CY} r="2.5" fill="#0a1628" />
      </svg>

      {/* Active label pill */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2 text-center transition-all duration-400"
        style={{
          background: "var(--color-navy-mid)",
          border: "1px solid rgba(52,211,153,0.2)",
        }}
      >
        <span className="text-mint text-sm font-semibold">{areas[active].label}</span>
      </div>
    </div>
  );
}
