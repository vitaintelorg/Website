import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInSection } from "@/components/common/FadeInSection";

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8">
          {services.map((service) => (
            <FadeInSection key={service.slug} id={service.slug} className="scroll-mt-28">
              <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_1.2fr] lg:p-8">
                <ServiceCard serviceSlug={service.slug} className="border-0 bg-transparent p-0 shadow-none" />
                <div className="space-y-4">
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
          ))}
        </div>
      </Container>
    </section>
  );
}
