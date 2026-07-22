import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonials-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What collaborators say"
          description="Hear from those who have collaborated with VitaIntel to transform healthcare."
        />
        <div className="mx-auto max-w-3xl">
          {testimonials.slice(0, 1).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/testimonials">
              View testimonials
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
