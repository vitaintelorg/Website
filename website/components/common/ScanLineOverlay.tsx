"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScanLineOverlay({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(147,186,210,0.6), rgba(147,186,210,0.15), transparent)",
      }}
      initial={{ top: "-15%" }}
      animate={shouldReduceMotion ? { top: "50%" } : { top: ["-15%", "100%"] }}
      transition={{ duration: 3.2, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
    />
  );
}