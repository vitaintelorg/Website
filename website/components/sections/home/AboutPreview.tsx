import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/FadeInSection";
import { CellClusterMotif } from "@/components/common/CellClusterMotif";

export function AboutPreview() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="about-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="Building trustworthy AI for Egyptian healthcare"
          description="VitaIntel is in R&D, developing diagnostic AI that supports radiologists — not replaces them."
        />
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-full border border-brand-primary/20 bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 shadow-lg">
            <CellClusterMotif className="h-[80%] w-[80%]" />
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
