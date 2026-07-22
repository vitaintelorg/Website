import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Button } from "@/components/ui/button";

export function PortfolioPreview() {
  const previewItems = portfolioItems.slice(0, 3);

  return (
    <section className="py-20 md:py-28" aria-labelledby="portfolio-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Our Portfolio"
          description="Discover how VitaIntel's AI-powered solutions are being developed for healthcare."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewItems.map((item) => (
            <PortfolioCard key={item.slug} itemSlug={item.slug} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/portfolio">
              Explore portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
