"use client";

import { motion, useReducedMotion } from "framer-motion";

const SIZE = 320;

/* ---------- Genomic AI: DNA helix + floating data particles + annotation ---------- */
function helixPath(phase: number) {
  const points: string[] = [];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = 30 + t * (SIZE - 60);
    const x = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4 + phase);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}
const strandA = helixPath(0);
const strandB = helixPath(Math.PI);
const RUNGS = Array.from({ length: 9 }, (_, i) => {
  const t = i / 8;
  const y = 30 + t * (SIZE - 60);
  const xA = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4);
  const xB = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4 + Math.PI);
  return { y, xA, xB, key: i };
});
const PARTICLES = [
  { x: 210, y: 60 }, { x: 230, y: 120 }, { x: 205, y: 180 },
  { x: 235, y: 230 }, { x: 195, y: 270 }, { x: 250, y: 90 },
];

export function QuantumDnaMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {RUNGS.map((r) => (
          <line key={r.key} x1={r.xA} y1={r.y} x2={r.xB} y2={r.y} stroke="var(--brand-accent)" strokeWidth={2} opacity={0.5} />
        ))}
        <path d={strandA} fill="none" stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" opacity={0.7} />
        <path d={strandB} fill="none" stroke="var(--brand-secondary)" strokeWidth={3} strokeLinecap="round" opacity={0.7} />
      </motion.g>

      {PARTICLES.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={3}
          fill="var(--brand-secondary)"
          animate={shouldReduceMotion ? {} : { opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* annotation callout */}
      <line x1={200} y1={140} x2={235} y2={140} stroke="var(--brand-primary)" strokeOpacity={0.35} strokeWidth={1} />
      <rect x={235} y={118} width={68} height={44} rx={8} fill="var(--background)" stroke="var(--brand-primary)" strokeOpacity={0.3} strokeWidth={1} />
      <line x1={247} y1={134} x2={291} y2={134} stroke="var(--brand-secondary)" strokeWidth={2} opacity={0.6} />
      <line x1={247} y1={144} x2={279} y2={144} stroke="var(--brand-secondary)" strokeWidth={2} opacity={0.4} />
      <line x1={247} y1={154} x2={285} y2={154} stroke="var(--brand-secondary)" strokeWidth={2} opacity={0.4} />
    </svg>
  );
}

/* ---------- Diagnostic Imaging: multi-panel scan with AI hotspot + sweep ---------- */
export function ScanAnalysisMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const panelW = (SIZE - 40) / 2;
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hotspot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--brand-secondary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--brand-secondary)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scan-sweep-2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity={0} />
          <stop offset="50%" stopColor="var(--brand-primary)" stopOpacity={0.4} />
          <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity={0} />
        </linearGradient>
      </defs>

      {[0, 1].map((panel) => {
        const x0 = 20 + panel * (panelW + 20);
        return (
          <g key={panel}>
            <rect x={x0} y={40} width={panelW} height={SIZE - 80} rx={12} fill="none" stroke="var(--brand-primary)" strokeOpacity={0.25} strokeWidth={2} />
            {Array.from({ length: 5 }, (_, i) => (
              <line key={`v${i}`} x1={x0 + (i * panelW) / 5} y1={40} x2={x0 + (i * panelW) / 5} y2={SIZE - 40} stroke="var(--brand-primary)" strokeOpacity={0.08} />
            ))}
            {Array.from({ length: 6 }, (_, i) => (
              <line key={`h${i}`} x1={x0} y1={40 + (i * (SIZE - 80)) / 6} x2={x0 + panelW} y2={40 + (i * (SIZE - 80)) / 6} stroke="var(--brand-primary)" strokeOpacity={0.08} />
            ))}
          </g>
        );
      })}

      <circle cx={20 + panelW + 10} cy={140} r={46} fill="url(#hotspot-glow)" />

      <motion.rect
        x={20}
        width={SIZE - 40}
        height={16}
        fill="url(#scan-sweep-2)"
        initial={{ y: 40 }}
        animate={shouldReduceMotion ? { y: SIZE / 2 } : { y: [40, SIZE - 56, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ---------- Computational Biology: an active "processing" monitor ---------- */
const BARS = [0.3, 0.7, 0.45, 0.9, 0.35, 0.65, 0.5, 0.8, 0.4];

export function ComputeMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const screenX = 40, screenY = 50, screenW = SIZE - 80, screenH = 170;
  const baseBarHeight = 90;
  const barAreaY = screenY + screenH - 20;

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      {/* monitor */}
      <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={10} fill="none" stroke="var(--brand-primary)" strokeWidth={3} />
      <line x1={SIZE / 2} y1={screenY + screenH} x2={SIZE / 2} y2={screenY + screenH + 26} stroke="var(--brand-primary)" strokeWidth={3} />
      <line x1={SIZE / 2 - 30} y1={screenY + screenH + 26} x2={SIZE / 2 + 30} y2={screenY + screenH + 26} stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" />

      {/* active indicator */}
      <motion.circle
        cx={screenX + screenW - 16}
        cy={screenY + 16}
        r={4}
        fill="var(--brand-secondary)"
        animate={shouldReduceMotion ? {} : { opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* activity bars */}
      {BARS.map((h, i) => {
        const barW = (screenW - 24) / BARS.length - 4;
        const x = screenX + 12 + i * ((screenW - 24) / BARS.length);
        return (
          <motion.rect
            key={i}
            x={x}
            width={barW}
            rx={2}
            fill="var(--brand-secondary)"
            initial={{ height: baseBarHeight * h, y: barAreaY - baseBarHeight * h }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    height: [baseBarHeight * h, baseBarHeight * (h * 0.4), baseBarHeight * h],
                    y: [barAreaY - baseBarHeight * h, barAreaY - baseBarHeight * h * 0.4, barAreaY - baseBarHeight * h],
                  }
            }
            transition={{ duration: 1.6 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.75}
          />
        );
      })}

      {/* base glow */}
      <ellipse cx={SIZE / 2} cy={screenY + screenH + 40} rx={60} ry={6} fill="var(--brand-accent)" opacity={0.15} />
    </svg>
  );
}