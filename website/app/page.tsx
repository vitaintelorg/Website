import {
  AboutPreview,
  BlogPreview,
  ContactCTA,
  Hero,
  ServicesPreview,
  TechnologyPreview,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <TechnologyPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
