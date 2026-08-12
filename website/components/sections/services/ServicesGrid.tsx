import type { ComponentType } from "react";
import { Dna, Microscope, ScanLine } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInSection } from "@/components/common/FadeInSection";
import { ComputeMotif, QuantumDnaMotif, ScanAnalysisMotif } from "@/components/common/ServiceMotifs";
import { PipelineConnector } from "@/components/common/PipelineConnector";

const SERVICE_MOTIFS: Record<string, ComponentType<{ className?: string }>> = {
  "diagnostic-imaging": ScanAnalysisMotif,
  "genomic-ai": QuantumDnaMotif,
  "computational-biology": ComputeMotif,
};

const SERVICE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "diagnostic-imaging": ScanLine,
  "genomic-ai": Dna,
  "computational-biology": Microscope,
};

export function ServicesGrid() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <PipelineConnector
          items={services.map((s) => s.title)}
          className="mb-16 hidden px-4 md:block"
        />

        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const Motif = SERVICE_MOTIFS[service.slug];
            const Icon = SERVICE_ICONS[service.slug];
            const reversed = i % 2 === 1;
            return (
              <FadeInSection key={service.slug} id={service.slug} className="scroll-mt-28">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div
                    className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 ${
                      reversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {Motif && <Motif className="h-[75%] w-[75%]" />}
                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background text-brand-secondary shadow-sm">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                  </div>
                  <div className={`space-y-4 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                    <ServiceCard
                      serviceSlug={service.slug}
                      className="border-0 bg-transparent p-0 shadow-none"
                    />
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