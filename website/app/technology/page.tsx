import { PageHero } from "@/components/common/PageHero";
import { DatasetsSection, RoadmapSection, TechStack } from "@/components/sections/technology/TechnologySections";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.technology);

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Technology"
        description={pageMetadata.technology.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
      />
      <TechStack />
      <DatasetsSection />
      <RoadmapSection />
    </>
  );
}
