import type { LucideIcon } from "lucide-react";
import type { PortfolioCategory } from "./common";

export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  category: Exclude<PortfolioCategory, "all">;
  icon: LucideIcon;
  href?: string;
  status: "in-development" | "research" | "concept";
};
