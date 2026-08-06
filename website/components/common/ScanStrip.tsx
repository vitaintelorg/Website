"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ScanSweepMotif } from "./ScanSweepMotif";

const PANEL_LABELS = ["Mammography", "MRI", "CT", "Ultrasound"];

export function ScanStrip({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % PANEL_LABELS.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className={className}>
      <ul className="flex gap-3">
        {PANEL_LABELS.map((label, i) => (
          <li
            key={label}
            className={`overflow-hidden rounded-xl border bg-white/5 backdrop-blur-sm transition-all duration-500 ${
              active === i
                ? "scale-105 border-white/60 shadow-[0_0_24px_-4px_var(--brand-accent)]"
                : "border-white/10 opacity-60"
            }`}
          >
            <div className="h-14 w-20 p-1.5 sm:h-16 sm:w-24">
              <ScanSweepMotif className="h-full w-full" />
            </div>
            <p className="pb-1.5 text-center text-[10px] font-medium text-white/70">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
