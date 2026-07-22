import { PageHero } from "@/components/common/PageHero";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.portfolio);

export default function PortfolioPage() {
  return <><PageHero title="Our Portfolio" description={pageMetadata.portfolio.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} /><PortfolioGrid /></>;
}
