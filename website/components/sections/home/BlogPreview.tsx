import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestBlogPosts } from "@/data/blog";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BlogCard } from "@/components/cards/BlogCard";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
  const posts = getLatestBlogPosts(3);

  return (
    <section className="bg-muted/30 py-14 md:py-20" aria-labelledby="blog-preview-heading">
      <Container>
        <SectionHeader
          eyebrow="Blog"
          title="Our Blog"
          description="Stay updated with the latest insights on AI and biomedical innovation."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary">
            <Link href="/blog">
              Read all articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
