import Link from "next/link";
import { ArrowRight, CheckCircle2, FlaskConical, ListChecks, Sparkles } from "lucide-react";
import { pipelineStages } from "@/data/technology";
import type { PipelineStatus } from "@/types/technology";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/FadeInSection";

const statusLabel: Record<PipelineStatus, string> = {
  "architecture-defined": "Architecture defined",
  selected: "Selected — no code yet",
  planned: "Planned",
  research: "Research phase",
};

const statusIcon: Record<PipelineStatus, React.ReactNode> = {
  "architecture-defined": <CheckCircle2 className="h-4 w-4" aria-hidden="true" />,
  selected: <ListChecks className="h-4 w-4" aria-hidden="true" />,
  planned: <Sparkles className="h-4 w-4" aria-hidden="true" />,
  research: <FlaskConical className="h-4 w-4" aria-hidden="true" />,
};

export function TechnologyPreview() {
  const previewStages = pipelineStages.slice(0, 3);

  return (
    <section id="technology" className="py-14 md:py-20" aria-labelledby="technology-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="Technology"
          title="Where our AI pipeline stands today"
          description="Built in transparent phases — here's honestly where each piece of the model stack is right now."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {previewStages.map((stage) => (
            <FadeInSection key={stage.slug}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-sm text-brand-secondary">{stage.subtitle}</p>
                  </div>
                </div>
                <Badge variant="outline" className="mb-3 gap-1.5">
                  {statusIcon[stage.status]}
                  {statusLabel[stage.status]}
                </Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/technology">
              See the full pipeline & roadmap
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
