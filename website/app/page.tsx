import {
  AboutPreview,
  BlogPreview,
  ContactCTA,
  Hero,
  PortfolioPreview,
  ServicesPreview,
  TestimonialsPreview,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <BlogPreview />
      <TestimonialsPreview />
      <ContactCTA />
    </>
  );
}
