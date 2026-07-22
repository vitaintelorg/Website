import type { BlogPost, BlogSection } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";

function BlogSectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return <h2 className="mt-10 text-2xl font-semibold text-foreground">{section.content}</h2>;
    case "paragraph":
      return <p className="mt-4 text-base leading-relaxed text-muted-foreground">{section.content}</p>;
    case "list":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
          {section.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "stats":
      return (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {section.stats?.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-muted/60 p-4 text-center">
              <p className="text-2xl font-bold text-brand-secondary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <aside className="mt-6 rounded-xl border border-brand-primary/30 bg-brand-primary/5 p-5 text-sm text-foreground">
          {section.content}
        </aside>
      );
    default:
      return null;
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="py-16 md:py-24">
      <Container size="narrow">
        <header className="mb-10">
          <Badge>{post.category}</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">{post.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {formatDate(post.publishedAt)} · {post.readTime}
          </p>
          <div className="mt-8 h-56 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10" />
        </header>
        <div className="prose prose-neutral max-w-none">
          {post.content.map((section, index) => (
            <BlogSectionRenderer key={`${post.slug}-${index}`} section={section} />
          ))}
        </div>
      </Container>
    </article>
  );
}
