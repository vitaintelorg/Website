"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users2 } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function AboutTeamCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const team = company.team;

  function scrollToIndex(i: number) {
    const clamped = Math.max(0, Math.min(team.length - 1, i));
    const el = scrollerRef.current;
    const child = el?.children[clamped] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setIndex(clamped);
  }

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - el.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setIndex(closest);
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">Meet the team</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Team</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">Scroll to see everyone</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(index - 1)}
                disabled={index === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-secondary disabled:pointer-events-none disabled:opacity-30"
                aria-label="Previous team member"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(index + 1)}
                disabled={index === team.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-brand-primary/10 hover:text-brand-secondary disabled:pointer-events-none disabled:opacity-30"
                aria-label="Next team member"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-10 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <article
              key={i}
              className="grid w-full shrink-0 snap-start grid-cols-1 items-center gap-8 md:grid-cols-2"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 28rem, 100vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Users2 className="h-20 w-20 text-brand-primary/40" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{member.name}</h3>
                <p className="mt-1 text-base font-medium text-brand-secondary">{member.title}</p>
                <ul className="mt-4 space-y-1.5">
                  {member.tags.map((tag) => (
                    <li key={tag} className="text-sm leading-relaxed text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {team.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-brand-secondary" : "w-2 bg-border hover:bg-brand-secondary/50"
              )}
              aria-label={`Go to team member ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}