import {
  Activity,
  Dna,
  FlaskConical,
  HeartPulse,
  History,
  Syringe,
} from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "cancer-detection",
    title: "AI-Driven Cancer Detection",
    description:
      "Developing a deep learning model for early-stage cancer detection, targeting the accuracy benchmarks reported in published research.",
    category: "cancer",
    icon: HeartPulse,
    status: "in-development",
  },
  {
    slug: "genomic-risk",
    title: "Genomic Risk Prediction",
    description:
      "An AI platform concept to predict disease risks and support personalized treatment planning.",
    category: "genomics",
    icon: Dna,
    status: "research",
  },
  {
    slug: "ai-history",
    title: "AI in Cancer: A Brief History",
    description:
      "An interactive timeline of how AI has evolved in oncology, from the 1980s to today.",
    category: "genomics",
    icon: History,
    status: "concept",
  },
  {
    slug: "precision-oncology",
    title: "Precision Oncology",
    description:
      "Exploring AI-driven tools to personalize cancer therapies, guided by outcome improvements reported in published research.",
    category: "cancer",
    icon: Syringe,
    status: "research",
  },
  {
    slug: "single-cell-sequencing",
    title: "Single-Cell Sequencing",
    description:
      "Platform concept for single-cell RNA analysis to identify novel biomarkers.",
    category: "genomics",
    icon: Activity,
    status: "concept",
  },
  {
    slug: "ai-clinical-trials",
    title: "AI-Enhanced Clinical Trials",
    description:
      "A concept for AI-optimized clinical trial design, informed by published research on recruitment efficiency.",
    category: "clinical",
    icon: FlaskConical,
    status: "concept",
  },
];

export const portfolioFilters = [
  { label: "All", value: "all" as const },
  { label: "Cancer Detection", value: "cancer" as const },
  { label: "Genomics", value: "genomics" as const },
  { label: "Clinical Trials", value: "clinical" as const },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
