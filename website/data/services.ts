import { Dna, ImageIcon, Microscope } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "genomic-ai",
    title: "Genomic AI",
    shortDescription:
      "Deep learning algorithms that analyze genetic data to predict disease risks and optimize treatments.",
    description:
      "Our Genomic AI platform uses deep learning to analyze complex genetic datasets, enabling disease risk predictions and tailored treatment planning. Models are being developed against published research benchmarks.",
    icon: Dna,
    features: [
      "Genetic variant analysis",
      "Personalized risk prediction",
      "Multi-omics integration roadmap",
    ],
    href: "/services#genomic-ai",
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging",
    shortDescription:
      "Computer vision systems being developed to detect anomalies in medical scans, targeting benchmarks reported in published research.",
    description:
      "VitaIntel's Diagnostic Imaging models are being developed to detect anomalies in medical scans. Published research on comparable computer-vision diagnostic systems reports accuracy up to 99.2% — the benchmark this work targets.",
    icon: ImageIcon,
    features: [
      "X-ray, MRI, and CT analysis",
      "Radiologist-assist workflow design",
      "Real-time analysis targets",
    ],
    href: "/services#diagnostic-imaging",
  },
  {
    slug: "computational-biology",
    title: "Computational Biology",
    shortDescription:
      "AI-driven analysis of biological data to personalize insights for cancer research and treatments.",
    description:
      "VitaIntel's Computational Biology platform uses AI-ML and data engineering to uncover insights for cancer research and personalized medicine from genomic and proteomic datasets.",
    icon: Microscope,
    features: [
      "Biomarker identification",
      "Scalable data pipelines",
      "Precision medicine research",
    ],
    href: "/services#computational-biology",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
