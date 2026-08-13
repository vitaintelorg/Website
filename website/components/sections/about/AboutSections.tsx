import { Users2 } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FadeInSection } from "@/components/common/FadeInSection";
import { Badge } from "@/components/common/Badge";
import { AiDnaMotif } from "@/components/common/AiDnaMotif";

export function AboutStory() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
            <AiDnaMotif className="h-[90%] w-auto" />
          </div>
          <div className="space-y-4 text-muted-foreground">
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
    <section className="bg-muted/30 py-12 md:py-16">
      <Container>
        <SectionHeader title="Our Team" description="Meet the people building VitaIntel." />
        <div className="grid gap-6 sm:grid-cols-3">
          {company.team.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-secondary">
                <Users2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-foreground">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.title}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutRegulatory() {
  return (
    <section className="py-12 md:py-16">
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
