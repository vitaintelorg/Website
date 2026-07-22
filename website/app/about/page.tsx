import { AboutRegulatory, AboutStory, AboutTeam } from "@/components/sections/about/AboutSections";
import { PageHero } from "@/components/common/PageHero";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.about);

export default function AboutPage() {
  return (
    <>
      <PageHero title="About VitaIntel" description={pageMetadata.about.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <AboutStory />
      <AboutTeam />
      <AboutRegulatory />
    </>
  );
}
