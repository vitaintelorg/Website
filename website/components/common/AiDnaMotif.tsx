"use client";

import { motion, useReducedMotion } from "framer-motion";

const WIDTH = 560;
const HEIGHT = 420;

// Neural-network core: a central hub with radiating nodes.
const CORE = { cx: 160, cy: 210, r: 34 };
const NODES = [
  { x: 60, y: 110, r: 8 },
  { x: 40, y: 210, r: 7 },
  { x: 70, y: 310, r: 9 },
  { x: 160, y: 90, r: 7 },
  { x: 160, y: 330, r: 8 },
  { x: 250, y: 140, r: 7 },
  { x: 255, y: 280, r: 8 },
];

// DNA helix flowing from the core toward the right edge.
function strandPath(phase: number) {
  const points: string[] = [];
  const steps = 48;
  const startX = 210;
  const span = WIDTH - startX - 30;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = startX + t * span;
    const y = HEIGHT / 2 + 58 * Math.sin(t * Math.PI * 2.4 + phase) * (0.4 + 0.6 * t);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}

const strandA = strandPath(0);
const strandB = strandPath(Math.PI);

const RUNGS = Array.from({ length: 10 }, (_, i) => {
  const t = i / 9;
  const startX = 210;
  const span = WIDTH - startX - 30;
  const x = startX + t * span;
  const yA = HEIGHT / 2 + 58 * Math.sin(t * Math.PI * 2.4) * (0.4 + 0.6 * t);
  const yB = HEIGHT / 2 + 58 * Math.sin(t * Math.PI * 2.4 + Math.PI) * (0.4 + 0.6 * t);
  return { x, yA, yB, key: i };
});

/**
 * Decorative "AI meets genomics" illustration: an abstract neural-network
 * core connected to a flowing DNA helix. Purely geometric brand artwork —
 * not a depiction of any real system, scan, or data.
 */
export function AiDnaMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* connection lines from core to nodes */}
      {NODES.map((node, i) => (
        <line
          key={`line-${i}`}
          x1={CORE.cx}
          y1={CORE.cy}
          x2={node.x}
          y2={node.y}
          stroke="var(--brand-primary)"
          strokeWidth={1.5}
          opacity={0.3}
        />
      ))}

      {/* traveling pulses along the connection lines */}
      {!shouldReduceMotion &&
        NODES.map((node, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r={3}
            fill="var(--brand-secondary)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [CORE.cx, node.x],
              cy: [CORE.cy, node.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.35,
              repeat: Infinity,
              repeatDelay: NODES.length * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* outer nodes */}
      {NODES.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="var(--brand-accent)"
          initial={{ opacity: 0.7 }}
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* central AI core */}
      <motion.circle
        cx={CORE.cx}
        cy={CORE.cy}
        r={CORE.r}
        fill="var(--brand-primary)"
        initial={{ scale: 1 }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${CORE.cx}px ${CORE.cy}px` }}
      />
      <circle cx={CORE.cx} cy={CORE.cy} r={CORE.r * 0.5} fill="var(--brand-secondary)" opacity={0.7} />

      {/* DNA helix flowing out to the right */}
      <motion.g
        animate={shouldReduceMotion ? {} : { x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {RUNGS.map((rung) => (
          <line
            key={rung.key}
            x1={rung.x}
            y1={rung.yA}
            x2={rung.x}
            y2={rung.yB}
            stroke="var(--brand-accent)"
            strokeWidth={2}
            opacity={0.45}
          />
        ))}
        <path d={strandA} fill="none" stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" opacity={0.6} />
        <path d={strandB} fill="none" stroke="var(--brand-secondary)" strokeWidth={3} strokeLinecap="round" opacity={0.6} />
      </motion.g>
    </svg>
  );
}
