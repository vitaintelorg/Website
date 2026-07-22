import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact VitaIntel"
        description={pageMetadata.contact.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <div className="grid gap-6 sm:grid-cols-3">
            <a
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              href={`mailto:${siteConfig.contact.email}`}
            >
              <Mail className="mx-auto h-6 w-6 text-brand-secondary" aria-hidden="true" />
              <h2 className="mt-4 font-semibold">Email us</h2>
              <p className="mt-2 text-sm text-muted-foreground">{siteConfig.contact.email}</p>
            </a>
            <a
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              href={siteConfig.contact.phoneHref}
            >
              <Phone className="mx-auto h-6 w-6 text-brand-secondary" aria-hidden="true" />
              <h2 className="mt-4 font-semibold">Call us</h2>
              <p className="mt-2 text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
            </a>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <MapPin className="mx-auto h-6 w-6 text-brand-secondary" aria-hidden="true" />
              <h2 className="mt-4 font-semibold">Find us</h2>
              <p className="mt-2 text-sm text-muted-foreground">{siteConfig.contact.address}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
