export type NavItem = {
  label: string;
  href: string;
};

export type SectionProps = {
  className?: string;
  id?: string;
};

export type FormState = {
  success: boolean;
  message: string;
};

export type PortfolioCategory = "all" | "cancer" | "genomics" | "clinical";
