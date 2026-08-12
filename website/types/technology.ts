export type PipelineStatus =
  | "architecture-defined"
  | "selected"
  | "planned"
  | "research";

export type PipelineStage = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  status: PipelineStatus;
};

export type DatasetStatus =
  | "preprocessing-complete"
  | "preprocessing-in-progress"
  | "pretraining-source";

export type Dataset = {
  slug: string;
  name: string;
  modality: string;
  description: string;
  status: DatasetStatus;
};

export type RoadmapItem = {
  period: string;
  title: string;
  description: string;
  current?: boolean;
};