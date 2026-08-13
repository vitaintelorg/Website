"use client";

import { motion, useReducedMotion } from "framer-motion";

const SIZE = 320;

/* ============ Genomic AI: DNA helix with a wireframe backbone, ============ */
/* ============ light-burst accents, and a molecular annotation. =========== */
function helixPath(phase: number) {
  const points: string[] = [];
  const steps = 40;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = 20 + t * (SIZE - 40);
    const x = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4 + phase);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ");
}
const strandA = helixPath(0);
const strandB = helixPath(Math.PI);
const RUNGS = Array.from({ length: 10 }, (_, i) => {
  const t = i / 9;
  const y = 20 + t * (SIZE - 40);
  const xA = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4);
  const xB = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4 + Math.PI);
  return { y, xA, xB, key: i };
});
// A light triangular lattice "ribbon" tracing just outside strand A, echoing
// the wireframe-backbone look in the reference image.
const LATTICE = Array.from({ length: 9 }, (_, i) => {
  const t = i / 8;
  const y = 20 + t * (SIZE - 40);
  const yNext = 20 + Math.min(t + 1 / 8, 1) * (SIZE - 40);
  const x = SIZE / 2 - 60 + 34 * Math.sin(t * Math.PI * 4) + 14;
  const xNext = SIZE / 2 - 60 + 34 * Math.sin(Math.min(t + 1 / 8, 1) * Math.PI * 4) + 14;
  return { x, y, xNext, yNext, key: i };
});
const SPARKLES = [
  { x: 150, y: 40 },
  { x: 90, y: 240 },
  { x: 205, y: 280 },
];
const PARTICLES = [
  { x: 210, y: 60 },
  { x: 230, y: 120 },
  { x: 205, y: 180 },
  { x: 235, y: 230 },
  { x: 195, y: 270 },
  { x: 250, y: 90 },
];

function Sparkle({ x, y, delay }: { x: number; y: number; delay: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.g
      animate={shouldReduceMotion ? {} : { opacity: [0, 1, 0], scale: [0.6, 1.15, 0.6] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <path
        d={`M ${x} ${y - 7} L ${x + 2} ${y - 2} L ${x + 7} ${y} L ${x + 2} ${y + 2} L ${x} ${y + 7} L ${x - 2} ${y + 2} L ${x - 7} ${y} L ${x - 2} ${y - 2} Z`}
        fill="white"
      />
    </motion.g>
  );
}

export function QuantumDnaMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      <motion.g
        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* wireframe lattice ribbon */}
        {LATTICE.map((l) => (
          <g key={l.key} opacity={0.35}>
            <line x1={l.x} y1={l.y} x2={l.xNext} y2={l.yNext} stroke="var(--brand-primary)" strokeWidth={1} />
            <line x1={l.x} y1={l.y} x2={l.x - 14} y2={l.yNext} stroke="var(--brand-primary)" strokeWidth={1} />
            <circle cx={l.x} cy={l.y} r={1.6} fill="var(--brand-primary)" />
          </g>
        ))}

        {RUNGS.map((r) => (
          <line
            key={r.key}
            x1={r.xA}
            y1={r.y}
            x2={r.xB}
            y2={r.y}
            stroke="var(--brand-accent)"
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
        <path d={strandA} fill="none" stroke="var(--brand-primary)" strokeWidth={3.5} strokeLinecap="round" opacity={0.8} />
        <path d={strandB} fill="none" stroke="var(--brand-secondary)" strokeWidth={3.5} strokeLinecap="round" opacity={0.8} />

        {SPARKLES.map((s, i) => (
          <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.7} />
        ))}
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

      {/* molecular annotation callout */}
      <line x1={205} y1={150} x2={232} y2={150} stroke="var(--brand-primary)" strokeOpacity={0.35} strokeWidth={1} />
      <rect x={232} y={112} width={78} height={76} rx={8} fill="var(--background)" stroke="var(--brand-primary)" strokeOpacity={0.3} strokeWidth={1} />
      <g stroke="var(--brand-secondary)" strokeWidth={1.4} opacity={0.7} fill="none">
        <path d="M 246 132 L 258 126 L 270 132" />
        <path d="M 258 126 L 258 116" />
        <circle cx={246} cy={132} r={2} fill="var(--brand-secondary)" stroke="none" />
        <circle cx={270} cy={132} r={2} fill="var(--brand-secondary)" stroke="none" />
        <circle cx={258} cy={116} r={2} fill="var(--brand-secondary)" stroke="none" />
        <path d="M 246 132 L 246 148" strokeDasharray="2 2" />
        <path d="M 270 132 L 288 144" strokeDasharray="2 2" />
      </g>
      <line x1={244} y1={160} x2={296} y2={160} stroke="var(--brand-primary)" strokeOpacity={0.4} strokeWidth={2} />
      <line x1={244} y1={170} x2={280} y2={170} stroke="var(--brand-primary)" strokeOpacity={0.25} strokeWidth={2} />
    </svg>
  );
}

/* ============ Diagnostic Imaging: scan panels with ROI markers ============ */
/* ============ and a heatmap analysis overlay. ============================ */
export function ScanAnalysisMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const panelW = (SIZE - 40) / 2;
  const markers = [
    { x: 0.3, y: 0.35 },
    { x: 0.6, y: 0.6 },
  ];

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="heatmap-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.55" />
          <stop offset="45%" stopColor="var(--brand-secondary)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scan-sweep-2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity={0} />
          <stop offset="50%" stopColor="var(--brand-primary)" stopOpacity={0.4} />
          <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity={0} />
        </linearGradient>
      </defs>

      <g>
        <rect x={20} y={40} width={panelW} height={SIZE - 80} rx={12} fill="none" stroke="var(--brand-primary)" strokeOpacity={0.25} strokeWidth={2} />
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`v${i}`} x1={20 + (i * panelW) / 5} y1={40} x2={20 + (i * panelW) / 5} y2={SIZE - 40} stroke="var(--brand-primary)" strokeOpacity={0.08} />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1={20} y1={40 + (i * (SIZE - 80)) / 6} x2={20 + panelW} y2={40 + (i * (SIZE - 80)) / 6} stroke="var(--brand-primary)" strokeOpacity={0.08} />
        ))}
        {markers.map((m, i) => {
          const cx = 20 + m.x * panelW;
          const cy = 40 + m.y * (SIZE - 80);
          return (
            <motion.g
              key={i}
              animate={shouldReduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle cx={cx} cy={cy} r={9} fill="none" stroke="var(--brand-secondary)" strokeWidth={1.5} />
              <line x1={cx - 13} y1={cy} x2={cx - 9} y2={cy} stroke="var(--brand-secondary)" strokeWidth={1.5} />
              <line x1={cx + 9} y1={cy} x2={cx + 13} y2={cy} stroke="var(--brand-secondary)" strokeWidth={1.5} />
              <line x1={cx} y1={cy - 13} x2={cx} y2={cy - 9} stroke="var(--brand-secondary)" strokeWidth={1.5} />
              <line x1={cx} y1={cy + 9} x2={cx} y2={cy + 13} stroke="var(--brand-secondary)" strokeWidth={1.5} />
            </motion.g>
          );
        })}
      </g>

      <g>
        <rect x={20 + panelW + 20} y={40} width={panelW} height={SIZE - 80} rx={12} fill="none" stroke="var(--brand-primary)" strokeOpacity={0.25} strokeWidth={2} />
        <clipPath id="heatmap-clip">
          <rect x={20 + panelW + 20} y={40} width={panelW} height={SIZE - 80} rx={12} />
        </clipPath>
        <g clipPath="url(#heatmap-clip)">
          <rect x={20 + panelW + 20} y={40} width={panelW} height={SIZE - 80} fill="var(--brand-primary)" opacity={0.06} />
          <circle cx={20 + panelW + 20 + panelW * 0.55} cy={40 + (SIZE - 80) * 0.45} r={56} fill="url(#heatmap-core)" />
        </g>
      </g>

      <motion.rect
        x={20}
        width={SIZE - 40}
        height={14}
        fill="url(#scan-sweep-2)"
        initial={{ y: 40 }}
        animate={shouldReduceMotion ? { y: SIZE / 2 } : { y: [40, SIZE - 54, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ============ Computational Biology: lab monitor running a live ========== */
/* ============ genomic data visualization, with a microscope alongside. === */
const DATA_DOTS = Array.from({ length: 26 }, (_, i) => {
  const t = i / 25;
  const x = 60 + t * 140;
  const y = 100 + 26 * Math.sin(t * Math.PI * 2.6) + (i % 3) * 4;
  return { x, y, key: i };
});

export function ComputeMotif({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const screenX = 70, screenY = 46, screenW = SIZE - 110, screenH = 148;

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden="true" focusable="false">
      <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={10} fill="var(--brand-primary)" fillOpacity={0.04} stroke="var(--brand-primary)" strokeWidth={3} />
      <line x1={screenX + screenW / 2} y1={screenY + screenH} x2={screenX + screenW / 2} y2={screenY + screenH + 24} stroke="var(--brand-primary)" strokeWidth={3} />
      <line x1={screenX + screenW / 2 - 26} y1={screenY + screenH + 24} x2={screenX + screenW / 2 + 26} y2={screenY + screenH + 24} stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" />

      <motion.circle
        cx={screenX + screenW - 14}
        cy={screenY + 14}
        r={4}
        fill="var(--brand-secondary)"
        animate={shouldReduceMotion ? {} : { opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <clipPath id="screen-clip">
        <rect x={screenX + 6} y={screenY + 6} width={screenW - 12} height={screenH - 12} rx={6} />
      </clipPath>
      <g clipPath="url(#screen-clip)">
        <path
          d={`M ${screenX + 6} ${screenY + 90} ${DATA_DOTS.map((d) => `L ${screenX - 60 + d.x} ${screenY + d.y}`).join(" ")}`}
          fill="none"
          stroke="var(--brand-secondary)"
          strokeWidth={1.5}
          opacity={0.5}
        />
        {DATA_DOTS.map((d) => (
          <motion.circle
            key={d.key}
            cx={screenX - 60 + d.x}
            cy={screenY + d.y}
            r={2}
            fill="var(--brand-secondary)"
            animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, delay: (d.key % 8) * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </g>

      <g transform={`translate(${screenX - 46}, ${screenY + screenH - 34})`} opacity={0.55}>
        <line x1={0} y1={34} x2={40} y2={34} stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" />
        <path d="M 14 34 L 14 10 Q 14 2 22 2 L 30 2" fill="none" stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" />
        <circle cx={30} cy={2} r={4} fill="var(--brand-primary)" />
        <line x1={10} y1={22} x2={22} y2={22} stroke="var(--brand-primary)" strokeWidth={3} strokeLinecap="round" />
      </g>

      <g transform={`translate(${screenX + screenW + 8}, ${screenY + screenH - 30})`} opacity={0.5}>
        {[0, 10, 20].map((dx, i) => (
          <rect key={i} x={dx} y={0} width={6} height={24 - i * 3} rx={2} fill="var(--brand-secondary)" opacity={0.5 + i * 0.15} />
        ))}
      </g>

      <ellipse cx={SIZE / 2} cy={screenY + screenH + 36} rx={70} ry={6} fill="var(--brand-accent)" opacity={0.15} />
    </svg>
  );
}
