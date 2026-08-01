import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
};

export function PageHero({ title, description, breadcrumbs, className }: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-gradient-to-b from-brand-primary/5 to-background pt-24 pb-10 md:pt-28 md:pb-14", className)}>
      <Container size="narrow">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-6" />}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
      </Container>
    </section>
  );
}
