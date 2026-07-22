"use client";

import { useMemo, useState } from "react";
import { portfolioFilters, portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory } from "@/types/common";
import { Container } from "@/components/layout/Container";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { EmptyState } from "@/components/common/EmptyState";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<PortfolioCategory>("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter portfolio projects"
        >
          {portfolioFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={filter === item.value}
              onClick={() => setFilter(item.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                filter === item.value
                  ? "bg-brand-secondary text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <EmptyState
            title="No projects in this category"
            description="Try another filter or check back as VitaIntel publishes more portfolio work."
            actionLabel="View all projects"
            actionHref="/portfolio"
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.slug} itemSlug={item.slug} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
