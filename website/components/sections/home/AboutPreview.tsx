import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/FadeInSection";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="about-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="Building trustworthy AI for Egyptian healthcare"
          description="VitaIntel is in R&D, developing diagnostic AI that supports radiologists — not replaces them."
        />
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-brand-primary/20 bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center text-sm text-muted-foreground">
              [Placeholder] Team or product imagery to be supplied from approved Stitch exports
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{company.mission}</p>
            <p>{company.vision}</p>
            <p>{company.stage}</p>
            <Button asChild variant="secondary">
              <Link href="/about">
                Learn about VitaIntel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
