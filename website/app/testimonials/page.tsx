import { PageHero } from "@/components/common/PageHero";
import { TestimonialsList } from "@/components/sections/testimonials/TestimonialsList";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.testimonials);

export default function TestimonialsPage() {
  return <><PageHero title="Testimonials" description={pageMetadata.testimonials.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} /><TestimonialsList /></>;
}
