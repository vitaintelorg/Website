import Image from "next/image";
import { ScanLineOverlay } from "@/components/common/ScanLineOverlay";
import { ArrowRight, CheckCircle2, FlaskConical, ListChecks, Sparkles } from "lucide-react";
import {
  datasets,
  datasetsIntro,
  mammographyPipeline,
  pipelineIntro,
  pipelineStages,
  roadmap,
} from "@/data/technology";
import type { DatasetStatus, PipelineStatus } from "@/types/technology";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FadeInSection } from "@/components/common/FadeInSection";
import { Badge } from "@/components/common/Badge";

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

const datasetStatusLabel: Record<DatasetStatus, string> = {
  "preprocessing-complete": "Preprocessing complete",
  "preprocessing-in-progress": "Preprocessing in progress",
  "pretraining-source": "Pre-training dataset",
};

export function TechStack() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeader eyebrow="The model stack" title="Our pipeline, stage by stage" description={pipelineIntro} />
        <div className="grid gap-4 md:grid-cols-2">
          {pipelineStages.map((stage) => (
            <FadeInSection key={stage.slug}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-sm text-brand-secondary">{stage.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0 gap-1.5">
                    {statusIcon[stage.status]}
                    {statusLabel[stage.status]}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </article>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DatasetsSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Training data"
              title="Datasets in active use"
              description={datasetsIntro}
              className="mb-8"
            />
            <div className="space-y-4">
              {datasets.map((dataset) => (
                <article key={dataset.slug} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">
                      {dataset.name} <span className="font-normal text-muted-foreground">— {dataset.modality}</span>
                    </h3>
                    <Badge>{datasetStatusLabel[dataset.status]}</Badge>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{dataset.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border shadow-sm lg:block">
            <Image
              src="/images/technology/dataset-scan.jpg"
              alt="Stylized illustration of an AI-analyzed mammography scan pattern"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 24rem, 100vw"
            />
            <ScanLineOverlay className="pointer-events-none absolute inset-x-0 h-20" />
          </div>
        </div>

        {/* Mammography model transfer-learning path */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
            Mammography model path
          </h3>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {mammographyPipeline.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-xl bg-muted/60 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {step.label}
                    {step.done && <span className="ms-1.5 text-brand-secondary">✓</span>}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
                {i < mammographyPipeline.length - 1 && (
                  <ArrowRight
                    className="hidden h-5 w-5 shrink-0 text-brand-secondary md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function RoadmapSection() {
  return (
    <section className="py-12 md:py-16">
      <Container size="narrow">
        <SectionHeader eyebrow="Where we're headed" title="Roadmap" />
        <ol className="relative space-y-8 border-s-2 border-border ps-8">
          {roadmap.map((item) => (
            <li key={item.period} className="relative">
              <span
                className={`absolute -start-[41px] mt-1.5 h-4 w-4 rounded-full border-2 border-background ${
                  item.current ? "bg-brand-secondary" : "bg-border"
                }`}
                aria-hidden="true"
              />
              <FadeInSection>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                  {item.period}
                  {item.current && (
                    <Badge className="ms-2 align-middle" variant="secondary">
                      Now
                    </Badge>
                  )}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </FadeInSection>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}