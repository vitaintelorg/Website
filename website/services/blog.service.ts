import { blogPosts, getBlogPostBySlug, getLatestBlogPosts } from "@/data/blog";

export const blogService = {
  getAll: () => blogPosts,
  getBySlug: getBlogPostBySlug,
  getLatest: getLatestBlogPosts,
};
