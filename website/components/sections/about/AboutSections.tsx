import { company } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FadeInSection } from "@/components/common/FadeInSection";
import { Badge } from "@/components/common/Badge";
import { DnaHelixMotif } from "@/components/common/DnaHelixMotif";

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
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
            <DnaHelixMotif className="h-[85%] w-auto" />
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
        <SectionHeader
          title="Our Team"
          description="A small, cross-functional team spanning AI/ML engineering, cybersecurity, and clinical medicine."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {company.team.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary text-lg font-semibold text-white">
                {member.initials}
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-secondary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          {company.teamComposition}
        </p>
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
