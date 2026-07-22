import { PageHero } from "@/components/common/PageHero";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { pageMetadata } from "@/config/metadata";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(pageMetadata.blog);

export default function BlogPage() {
  return <><PageHero title="VitaIntel Blog" description={pageMetadata.blog.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} /><BlogGrid /></>;
}
