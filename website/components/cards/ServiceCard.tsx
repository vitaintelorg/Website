"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getServiceBySlug } from "@/data/services";
import type { Service } from "@/types/service";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  serviceSlug: Service["slug"];
  className?: string;
};

export function ServiceCard({ serviceSlug, className }: ServiceCardProps) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <motion.article
      {...fadeInUp}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 text-brand-secondary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <Link
        href={service.href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary rounded"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
