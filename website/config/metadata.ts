import type { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI-Driven Biomedical Breakthroughs`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "VitaIntel",
    "AI healthcare",
    "computational biology",
    "diagnostic imaging",
    "genomic AI",
    "precision medicine",
    "breast cancer detection",
    "Egypt healthtech",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI-Driven Biomedical Breakthroughs`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-Driven Biomedical Breakthroughs`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteConfig.url },
};

export const pageMetadata = {
  home: {
    title: "AI-Driven Biomedical Breakthroughs",
    description: siteConfig.description,
    path: "/",
  },
  about: {
    title: "About VitaIntel",
    description:
      "VitaIntel is an Egyptian AI healthtech project building early breast cancer detection for hospitals and radiology centers.",
    path: "/about",
  },
  services: {
    title: "Our Solutions",
    description:
      "Discover VitaIntel's AI-driven biomedical solutions: Genomic AI, Diagnostic Imaging, and Computational Biology.",
    path: "/services",
  },
  technology: {
    title: "Technology",
    description:
      "An honest look at VitaIntel's AI pipeline — model architecture, datasets, and roadmap.",
    path: "/technology",
  },
  blog: {
    title: "Blog",
    description:
      "Stay updated with insights on AI, genomics, computational biology, and biomedical innovation from VitaIntel.",
    path: "/blog",
  },
  contact: {
    title: "Contact",
    description:
      "Reach out to VitaIntel to explore how our AI-powered solutions can support your healthcare initiatives.",
    path: "/contact",
  },
} as const;
