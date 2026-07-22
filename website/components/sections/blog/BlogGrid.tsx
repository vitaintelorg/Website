import { blogPosts } from "@/data/blog";
import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { EmptyState } from "@/components/common/EmptyState";

export function BlogGrid() {
  if (blogPosts.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <EmptyState
            title="No articles yet"
            description="Blog posts will appear here once published."
          />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
