"use client";

import { motion } from "framer-motion";
import { getPortfolioBySlug } from "@/data/portfolio";
import type { PortfolioItem } from "@/types/portfolio";
import { Badge } from "@/components/common/Badge";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  itemSlug: PortfolioItem["slug"];
  className?: string;
};

const statusLabels = {
  "in-development": "In development",
  research: "Research",
  concept: "Concept",
} as const;

export function PortfolioCard({ itemSlug, className }: PortfolioCardProps) {
  const item = getPortfolioBySlug(itemSlug);

  if (!item) return null;

  const Icon = item.icon;

  return (
    <motion.article
      {...fadeInUp}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-secondary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <Badge variant="outline">{statusLabels[item.status]}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </motion.article>
  );
}
