"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.29 2.38 4.29 5.48v6.27ZM5.31 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.04H3.53V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.blockquote
      {...fadeInUp}
      className={cn(
        "relative rounded-2xl border border-border bg-card p-8 shadow-sm",
        className
      )}
    >
      <Quote className="mb-4 h-8 w-8 text-brand-primary/60" aria-hidden="true" />
      <p className="text-base leading-relaxed text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6 flex items-start justify-between gap-4">
        <div>
          <cite className="not-italic">
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </cite>
        </div>
        {testimonial.linkedin && (
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-secondary transition-colors hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            aria-label={`${testimonial.author} on LinkedIn`}
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        )}
      </footer>
    </motion.blockquote>
  );
}
