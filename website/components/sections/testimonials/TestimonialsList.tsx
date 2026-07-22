import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { EmptyState } from "@/components/common/EmptyState";

export function TestimonialsList() {
  if (testimonials.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <EmptyState
            title="No testimonials yet"
            description="[Placeholder] Approved testimonials will be published here."
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container size="narrow">
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          [Placeholder] Additional testimonials will be added when approved for publication.
        </p>
      </Container>
    </section>
  );
}
