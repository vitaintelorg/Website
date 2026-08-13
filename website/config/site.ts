export const siteConfig = {
  name: "VitaIntel",
  tagline: "Reimagining Medicine with AI",
  description:
    "VitaIntel combines AI and genomic science to pioneer precision healthcare and early breast cancer detection for Egyptian hospitals and radiology centers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vitaintel.org",
  ogImage: "/og-image.png",
  locale: "en_US",
  contact: {
    email: "info@vitaintel.org",
    phone: "+20 11 2465 1928",
    phoneHref: "tel:+201124651928",
    address: "6th of October, Giza, Egypt",
  },
  social: {
    instagram: "https://www.instagram.com/vitalntel?igsh=emQ1YjdiYzV6cnZ3",
    tiktok: "https://www.tiktok.com/@vitaintel?_r=1&_t=ZS-98Un01kBDnO",
    linkedin: "https://linkedin.com/company/vitaintel",
    facebook: "https://www.facebook.com/share/1aKs3Y2abe/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
