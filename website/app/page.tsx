import {
  AboutPreview,
  BlogPreview,
  ContactCTA,
  Hero,
  PortfolioPreview,
  ServicesPreview,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
