export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
  content: BlogSection[];
};

export type BlogSection = {
  type: "paragraph" | "heading" | "list" | "stats" | "callout";
  content?: string;
  items?: string[];
  stats?: { value: string; label: string }[];
};
