import { AboutRegulatory, AboutStory, AboutTeam } from "@/components/sections/about/AboutSections";
import { AboutVideoHero } from "@/components/sections/about/AboutVideoHero";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.about);

export default function AboutPage() {
  return (
    <>
      <AboutVideoHero />
      <AboutStory />
      <AboutTeam />
      <AboutRegulatory />
    </>
  );
}
