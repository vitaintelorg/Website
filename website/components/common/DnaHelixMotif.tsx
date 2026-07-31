"use client";

import { motion, useReducedMotion } from "framer-motion";

const RUNG_COUNT = 9;
const HEIGHT = 420;
const WIDTH = 160;
const AMPLITUDE = 46;

function strandPath(phase: number) {
  const points: string[] = [];
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = t * HEIGHT;
    const x = WIDTH / 2 + AMPLITUDE * Math.sin(t * Math.PI * 3 + phase);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

const strandA = strandPath(0);
const strandB = strandPath(Math.PI);

/**
 * Decorative, abstract DNA double-helix line illustration used to evoke
 * the genomics side of VitaIntel's work. Purely geometric — no real data.
 */
export function DnaHelixMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  const rungs = Array.from({ length: RUNG_COUNT }, (_, i) => {
    const t = i / (RUNG_COUNT - 1);
    const y = t * HEIGHT;
    const xA = WIDTH / 2 + AMPLITUDE * Math.sin(t * Math.PI * 3);
    const xB = WIDTH / 2 + AMPLITUDE * Math.sin(t * Math.PI * 3 + Math.PI);
    return { y, xA, xB, key: i };
  });

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      >
        {rungs.map((rung) => (
          <line
            key={rung.key}
            x1={rung.xA}
            y1={rung.y}
            x2={rung.xB}
            y2={rung.y}
            stroke="var(--brand-accent)"
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
        <path
          d={strandA}
          fill="none"
          stroke="var(--brand-primary)"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.55}
        />
        <path
          d={strandB}
          fill="none"
          stroke="var(--brand-secondary)"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.55}
        />
      </motion.g>
    </svg>
  );
}
