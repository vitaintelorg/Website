import type { Dataset, PipelineStage, RoadmapItem } from "@/types/technology";

export const pipelineIntro =
  "VitaIntel's model stack is being built in phases. Here's honestly where each piece stands today — no piece has completed training yet.";

export const pipelineStages: PipelineStage[] = [
  {
    slug: "cnn-backbone",
    title: "CNN Backbone",
    subtitle: "EfficientNet-B4",
    description:
      "The core classification model is defined and wired to the BUSI preprocessing pipeline (ImageNet-pretrained weights loaded). Training has not started yet.",
    status: "architecture-defined",
  },
  {
    slug: "segmentation",
    title: "Segmentation",
    subtitle: "U-Net++",
    description:
      "Selected for lesion segmentation, with the required tooling installed. Implementation hasn't started.",
    status: "selected",
  },
  {
    slug: "vision-transformer",
    title: "Vision Transformer",
    subtitle: "ViT",
    description:
      "Planned as a second phase, layered in once the CNN baseline is trained and validated.",
    status: "planned",
  },
  {
    slug: "ensemble",
    title: "Ensemble",
    subtitle: "CNN + ViT + XGBoost",
    description:
      "Combining the CNN, ViT, and gradient-boosted models into a single ensemble is planned for a later phase.",
    status: "planned",
  },
  {
    slug: "cell-level-detection",
    title: "Cell-Level Detection",
    subtitle: "CLAM / MIL",
    description:
      "Multiple-instance learning approaches for cell-level detection are still being researched, not yet implemented.",
    status: "research",
  },
];

export const datasetsIntro =
  "Two imaging datasets are in active use for the breast cancer model, alongside public genomics resources (TCGA, cBioPortal) referenced for the genomic-risk research track.";

export const datasets: Dataset[] = [
  {
    slug: "busi",
    name: "BUSI",
    modality: "Breast Ultrasound Images",
    description:
      "Benign, malignant, and normal breast ultrasound images, with class-imbalance handling in place. Preprocessing is complete; training hasn't started.",
    status: "preprocessing-complete",
  },
  {
    slug: "cdd-cesm",
    name: "CDD-CESM",
    modality: "Contrast-Enhanced Spectral Mammography",
    description:
      "Low-energy and subtracted mammography images. Preprocessing is still in progress.",
    status: "preprocessing-in-progress",
  },
];

export const roadmap: RoadmapItem[] = [
  {
    period: "Q1 2026",
    title: "Building the MVP",
    description:
      "Preprocessing pipeline complete, model training beginning, and company registration underway.",
    current: true,
  },
  {
    period: "Q2 2026",
    title: "CNN baseline & first pilots",
    description:
      "Targeting a trained, validated CNN baseline and opening pilot conversations with hospitals and radiology centers.",
  },
  {
    period: "Q3–Q4 2026",
    title: "Pilot partnerships & liver cancer R&D",
    description:
      "Converting pilot conversations into partnerships, and beginning early R&D on liver cancer detection.",
  },
  {
    period: "2027",
    title: "Multi-cancer platform",
    description: "Expanding into a multi-cancer platform and exploring regional expansion.",
  },
];
