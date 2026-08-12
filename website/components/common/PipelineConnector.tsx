"use client";

import { motion, useReducedMotion } from "framer-motion";

type PipelineConnectorProps = {
  items: string[];
  className?: string;
};

export function PipelineConnector({ items, className }: PipelineConnectorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <div className="flex w-full items-start">
        {items.map((label, i) => (
          <div key={label} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-secondary bg-background text-sm font-semibold text-brand-secondary">
                {i + 1}
              </span>
              <span className="max-w-[8rem] text-xs font-medium text-muted-foreground">{label}</span>
            </div>
            {i < items.length - 1 && (
              <div className="relative mt-4 h-0.5 w-full flex-1 overflow-hidden bg-border">
                <motion.div
                  className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"
                  initial={{ left: "-10%" }}
                  animate={shouldReduceMotion ? {} : { left: ["-10%", "110%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}