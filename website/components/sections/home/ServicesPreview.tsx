import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="bg-muted/30 py-20 md:py-28" aria-labelledby="services-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Our Solutions"
          description="Discover our innovative AI-driven biomedical solutions."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} serviceSlug={service.slug} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/services">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
