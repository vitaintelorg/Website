import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["", "/about", "/services", "/portfolio", "/blog", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...blogPosts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
