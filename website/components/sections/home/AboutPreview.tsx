import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/FadeInSection";

export function AboutPreview() {
  return (
    <section id="about" className="py-14 md:py-20" aria-labelledby="about-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="About"
          title="Building trustworthy AI for Egyptian healthcare"
          description="VitaIntel is in R&D, developing diagnostic AI that supports radiologists — not replaces them."
        />
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
         <div className="relative mx-auto flex items-center justify-center">
          <Image
           src="/images/about/vitaintel-logo.png"
           alt="VitaIntel"
           width={900}
           height={900}
           className="h-auto w-full max-w-none"
           priority
         />
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