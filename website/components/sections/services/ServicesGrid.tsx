import type { ComponentType } from "react";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInSection } from "@/components/common/FadeInSection";
import { ScanSweepMotif } from "@/components/common/ScanSweepMotif";
import { DnaHelixMotif } from "@/components/common/DnaHelixMotif";

const SERVICE_MOTIFS: Record<string, ComponentType<{ className?: string }>> = {
  "diagnostic-imaging": ScanSweepMotif,
  "genomic-ai": DnaHelixMotif,
};

export function ServicesGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-8">
          {services.map((service) => {
            const Motif = SERVICE_MOTIFS[service.slug];
            return (
              <FadeInSection key={service.slug} id={service.slug} className="scroll-mt-28">
                <div className="relative grid gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_1.2fr] lg:p-8">
                  {Motif && (
                    <Motif className="pointer-events-none absolute -right-8 -top-8 hidden h-56 w-56 opacity-40 lg:block" />
                  )}
                  <ServiceCard serviceSlug={service.slug} className="relative border-0 bg-transparent p-0 shadow-none" />
                  <div className="relative space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
