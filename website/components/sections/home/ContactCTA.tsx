import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/FadeInSection";

export function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-secondary to-brand-primary py-20 text-white md:py-28"
      aria-labelledby="contact-cta-heading"
    >
      <Container>
        <FadeInSection className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact"
              title="Connect with VitaIntel"
              description="Reach out to explore how our AI-powered solutions can support your healthcare initiatives."
              className="[&_h2]:text-white [&_p]:text-white/85 [&_span]:text-white/80"
            />
            <Button asChild size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-brand-secondary">
              <Link href="/contact">
                Send a message
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <a href={siteConfig.contact.phoneHref} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
