import { PageSkeleton } from "@/components/common/LoadingSkeleton";
import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container>
      <PageSkeleton />
    </Container>
  );
}
