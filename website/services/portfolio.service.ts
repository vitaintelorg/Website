import { portfolioItems, getPortfolioBySlug } from "@/data/portfolio";

export const portfolioService = {
  getAll: () => portfolioItems,
  getBySlug: getPortfolioBySlug,
};
