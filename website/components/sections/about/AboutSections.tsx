import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FadeInSection } from "@/components/common/FadeInSection";
import { Badge } from "@/components/common/Badge";

export function AboutStory() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          align="left"
          title="About VitaIntel"
          description="Building AI-driven early cancer detection for Egyptian hospitals and radiology centers."
        />
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10">
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-muted-foreground">
              [Placeholder] About page imagery from approved Stitch exports
            </div>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>{company.mission}</p>
            <p>{company.vision}</p>
            <p>{company.stage}</p>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export function AboutTeam() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeader title="Our Team" description={company.teamPlaceholder.description} />
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((slot) => (
            <article
              key={slot}
              className="rounded-2xl border border-dashed border-border bg-card p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-primary/10 text-brand-secondary">
                ?
              </div>
              <h3 className="font-semibold text-foreground">{company.teamPlaceholder.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Slot {slot}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutRegulatory() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          title="Regulatory Status"
          description="Where VitaIntel stands today — transparent about current stage and next steps."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {company.regulatory.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Badge className="mb-4">{item.status}</Badge>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
