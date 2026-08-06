"use client";

import { motion, useReducedMotion } from "framer-motion";

const WIDTH = 900;
const HEIGHT = 640;
const CX = WIDTH / 2;
const CY = HEIGHT / 2 + 20;

// Simplified, abstract standing-figure silhouette (arms slightly raised),
// drawn as a glowing outline — intentionally geometric, not photorealistic,
// and not depicting any real person.
const FIGURE_PATH = `
  M ${CX} ${CY - 190}
  m -26 0
  a 26 26 0 1 0 52 0
  a 26 26 0 1 0 -52 0
  M ${CX} ${CY - 164}
  L ${CX} ${CY - 40}
  M ${CX} ${CY - 140}
  L ${CX - 110} ${CY - 100}
  M ${CX} ${CY - 140}
  L ${CX + 110} ${CY - 100}
  M ${CX} ${CY - 40}
  L ${CX - 60} ${CY + 170}
  M ${CX} ${CY - 40}
  L ${CX + 60} ${CY + 170}
`;

const HALO_RADII = [130, 172, 214];

const NODES = [
  { x: CX - 230, y: CY - 160, r: 5 },
  { x: CX - 260, y: CY - 20, r: 6 },
  { x: CX - 210, y: CY + 140, r: 5 },
  { x: CX + 230, y: CY - 150, r: 6 },
  { x: CX + 255, y: CY + 10, r: 5 },
  { x: CX + 200, y: CY + 150, r: 6 },
  { x: CX, y: CY - 250, r: 5 },
];

function helixPaths(originX: number, phase: number) {
  const steps = 40;
  const height = HEIGHT - 60;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = 30 + t * height;
    const x = originX + 26 * Math.sin(t * Math.PI * 5 + phase);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

/**
 * Decorative flagship illustration for a dark hero background: an abstract
 * circuit-line figure with a pulsing node halo, flanked by two DNA helices.
 * Purely geometric brand artwork — no real data, scan, or person depicted.
 */
export function NeuralFigureMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="halo-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r={230} fill="url(#halo-glow)" />

      {/* halo rings */}
      {HALO_RADII.map((r, i) => (
        <motion.circle
          key={r}
          cx={CX}
          cy={CY}
          r={r}
          fill="none"
          stroke="var(--brand-accent)"
          strokeOpacity={0.35}
          strokeWidth={1}
          strokeDasharray="2 6"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      ))}

      {/* connection lines from figure to outer nodes */}
      {NODES.map((node, i) => (
        <line
          key={`l-${i}`}
          x1={CX}
          y1={CY - 60}
          x2={node.x}
          y2={node.y}
          stroke="var(--brand-accent)"
          strokeOpacity={0.25}
          strokeWidth={1}
        />
      ))}
      {NODES.map((node, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="var(--brand-accent)"
          animate={shouldReduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.8, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* the figure itself, glowing */}
      <motion.path
        d={FIGURE_PATH}
        fill="none"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0.85 }}
        animate={shouldReduceMotion ? {} : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* flanking DNA helices */}
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={helixPaths(70, 0)} fill="none" stroke="var(--brand-accent)" strokeWidth={2} opacity={0.55} />
        <path d={helixPaths(70, Math.PI)} fill="none" stroke="white" strokeWidth={2} opacity={0.4} />
      </motion.g>
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={helixPaths(WIDTH - 70, 0)} fill="none" stroke="var(--brand-accent)" strokeWidth={2} opacity={0.55} />
        <path d={helixPaths(WIDTH - 70, Math.PI)} fill="none" stroke="white" strokeWidth={2} opacity={0.4} />
      </motion.g>
    </svg>
  );
}
