"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CtIcon, MammographyIcon, MriIcon, UltrasoundIcon } from "./ScanIcons";

const PANELS = [
  { label: "Mammography", Icon: MammographyIcon },
  { label: "MRI", Icon: MriIcon },
  { label: "CT", Icon: CtIcon },
  { label: "Ultrasound", Icon: UltrasoundIcon },
];

export function ScanStrip({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % PANELS.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className={className}>
      <ul className="flex gap-3">
        {PANELS.map(({ label, Icon }, i) => (
          <li
            key={label}
            className={`flex flex-col items-center overflow-hidden rounded-xl border bg-white/5 px-3 py-2.5 backdrop-blur-sm transition-all duration-500 ${
              active === i
                ? "scale-105 border-white/60 text-white shadow-[0_0_24px_-4px_var(--brand-accent)]"
                : "border-white/10 text-white/50"
            }`}
          >
            <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
            <p className="mt-1 text-[10px] font-medium">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
