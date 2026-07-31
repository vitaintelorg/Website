"use client";

import { motion, useReducedMotion } from "framer-motion";

type Cell = {
  cx: number;
  cy: number;
  r: number;
  fill: "primary" | "secondary" | "accent";
  opacity: number;
  duration: number;
  delay: number;
  showNucleus?: boolean;
};

const CELLS: Cell[] = [
  { cx: 260, cy: 180, r: 86, fill: "primary", opacity: 0.16, duration: 7, delay: 0 },
  { cx: 400, cy: 300, r: 60, fill: "secondary", opacity: 0.18, duration: 6, delay: 0.4, showNucleus: true },
  { cx: 150, cy: 320, r: 46, fill: "accent", opacity: 0.22, duration: 5.5, delay: 0.9, showNucleus: true },
  { cx: 340, cy: 120, r: 34, fill: "accent", opacity: 0.24, duration: 5, delay: 1.3, showNucleus: true },
  { cx: 90, cy: 150, r: 28, fill: "secondary", opacity: 0.2, duration: 4.5, delay: 0.6 },
  { cx: 440, cy: 210, r: 22, fill: "primary", opacity: 0.22, duration: 6.5, delay: 1.7, showNucleus: true },
];

const FILL_VAR: Record<Cell["fill"], string> = {
  primary: "var(--brand-primary)",
  secondary: "var(--brand-secondary)",
  accent: "var(--brand-accent)",
};

/**
 * Decorative, abstract cluster-of-cells illustration. Intentionally organic
 * rather than clinical — evokes biology/oncology research without depicting
 * any real or graphic medical imagery.
 */
export function CellClusterMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 520 420"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {CELLS.map((cell, i) => (
        <motion.g
          key={i}
          initial={{ scale: 1, opacity: cell.opacity }}
          animate={
            shouldReduceMotion
              ? { scale: 1, opacity: cell.opacity }
              : {
                  scale: [1, 1.08, 1],
                  opacity: [cell.opacity, cell.opacity * 1.4, cell.opacity],
                }
          }
          transition={{
            duration: cell.duration,
            delay: cell.delay,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: `${cell.cx}px ${cell.cy}px` }}
        >
          <circle cx={cell.cx} cy={cell.cy} r={cell.r} fill={FILL_VAR[cell.fill]} />
          {cell.showNucleus && (
            <circle
              cx={cell.cx + cell.r * 0.15}
              cy={cell.cy - cell.r * 0.1}
              r={cell.r * 0.22}
              fill={FILL_VAR[cell.fill]}
              opacity={0.6}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}
