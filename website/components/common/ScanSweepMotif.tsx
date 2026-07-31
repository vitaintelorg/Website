"use client";

import { motion, useReducedMotion } from "framer-motion";

const WIDTH = 320;
const HEIGHT = 240;
const GRID_ROWS = 6;
const GRID_COLS = 8;

/**
 * Decorative, abstract "scan frame" — a grid plate with a sweeping highlight
 * line, evoking mammography / MRI / CT scanning without depicting any real
 * or graphic medical imagery.
 */
export function ScanSweepMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  const colLines = Array.from({ length: GRID_COLS + 1 }, (_, i) => (i / GRID_COLS) * WIDTH);
  const rowLines = Array.from({ length: GRID_ROWS + 1 }, (_, i) => (i / GRID_ROWS) * HEIGHT);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x={4}
        y={4}
        width={WIDTH - 8}
        height={HEIGHT - 8}
        rx={16}
        fill="none"
        stroke="var(--brand-primary)"
        strokeOpacity={0.25}
        strokeWidth={2}
      />
      {colLines.slice(1, -1).map((x, i) => (
        <line key={`c-${i}`} x1={x} y1={4} x2={x} y2={HEIGHT - 4} stroke="var(--brand-primary)" strokeOpacity={0.08} />
      ))}
      {rowLines.slice(1, -1).map((y, i) => (
        <line key={`r-${i}`} x1={4} y1={y} x2={WIDTH - 4} y2={y} stroke="var(--brand-primary)" strokeOpacity={0.08} />
      ))}

      {/* soft focal glow, like a region of interest */}
      <circle cx={WIDTH * 0.62} cy={HEIGHT * 0.42} r={38} fill="var(--brand-accent)" opacity={0.18} />

      <motion.rect
        x={4}
        width={WIDTH - 8}
        height={18}
        fill="url(#scan-sweep-gradient)"
        initial={{ y: 4 }}
        animate={shouldReduceMotion ? { y: HEIGHT / 2 } : { y: [4, HEIGHT - 22, 4] }}
        transition={{ duration: 4.5, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      />

      <defs>
        <linearGradient id="scan-sweep-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-secondary)" stopOpacity={0} />
          <stop offset="50%" stopColor="var(--brand-secondary)" stopOpacity={0.35} />
          <stop offset="100%" stopColor="var(--brand-secondary)" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
