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
            description="Approved testimonials will be published here as pilot partners come on board."
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
          More testimonials will be added here as additional pilot partnerships are confirmed.
        </p>
      </Container>
    </section>
  );
}
