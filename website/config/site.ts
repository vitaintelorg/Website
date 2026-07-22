export const siteConfig = {
  name: "VitaIntel",
  tagline: "Reimagining Medicine with AI",
  description:
    "VitaIntel combines AI and genomic science to pioneer precision healthcare and early breast cancer detection for Egyptian hospitals and radiology centers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vitaintel.org",
  ogImage: "/og-image.png",
  locale: "en_US",
  contact: {
    email: "hello@vitaintel.org",
    legacyEmail: "info@vitaintel.tech",
    phone: "+20 11 2465 1928",
    phoneHref: "tel:+201124651928",
    address: "6th of October, Giza, Egypt",
  },
  social: {
    twitter: "https://x.com/VitaIntel",
    linkedin: "https://linkedin.com/company/vitaintel",
    facebook: "https://www.facebook.com/share/1aKs3Y2abe/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
