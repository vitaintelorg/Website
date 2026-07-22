import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/sections/blog/BlogArticle";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { articleJsonLd, createPageMetadata } from "@/lib/metadata";

type BlogArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const post = getBlogPostBySlug((await params).slug);
  return post
    ? createPageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` })
    : {};
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getBlogPostBySlug((await params).slug);
  if (!post) notFound();

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ ...post, description: post.excerpt })) }} /><BlogArticle post={post} /></>;
}
