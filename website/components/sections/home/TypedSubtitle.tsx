"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypedSubtitleProps = {
  phrases: readonly string[];
  className?: string;
};

export function TypedSubtitle({ phrases, className }: TypedSubtitleProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = phrase.slice(0, display.length + 1);
          setDisplay(next);
          if (next === phrase) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          const next = phrase.slice(0, display.length - 1);
          setDisplay(next);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((current) => (current + 1) % phrases.length);
          }
        }
      },
      deleting ? 28 : 42
    );

    return () => clearTimeout(timeout);
  }, [display, deleting, index, phrases]);

  return (
    <p
      className={cn(
        "mx-auto mt-6 min-h-[3rem] max-w-2xl text-lg text-muted-foreground sm:text-xl",
        className
      )}
      aria-live="polite"
    >
      {display}
      <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-brand-secondary align-middle" />
    </p>
  );
}
