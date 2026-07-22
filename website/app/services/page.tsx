import { PageHero } from "@/components/common/PageHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.services);

export default function ServicesPage() {
  return <><PageHero title="Our Solutions" description={pageMetadata.services.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} /><ServicesGrid /></>;
}
