import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-healthcare",
    title: "The Future of AI in Healthcare",
    excerpt:
      "Exploring how AI is revolutionizing diagnostics and treatment personalization.",
    publishedAt: "2025-06-15",
    readTime: "5 min read",
    category: "Healthcare AI",
    image: "/images/blog/ai-healthcare.jpg",
    content: [
      {
        type: "paragraph",
        content:
          "AI is set to transform healthcare by enabling faster diagnostics, personalized treatments, and efficient clinical research. VitaIntel's work focuses on building trustworthy tools that support clinicians rather than replace their judgment.",
      },
      {
        type: "heading",
        content: "AI-Powered Biological Insights",
      },
      {
        type: "paragraph",
        content:
          "VitaIntel's models are being built to process genomic, proteomic, and metabolomic data to identify biomarkers for diseases like breast cancer. Published research on similar biomarker-prediction models reports accuracy up to 92% in predicting tumor progression — the benchmark we're developing against.",
      },
      {
        type: "heading",
        content: "Robust Data Pipelines",
      },
      {
        type: "paragraph",
        content:
          "Scalable data pipelines can enable real-time analysis of genetic variants and their clinical implications. Published research on comparable pipelines reports processing-time reductions of up to 35%.",
      },
      {
        type: "heading",
        content: "Advancing Precision Medicine",
      },
      {
        type: "paragraph",
        content:
          "Personalizing treatment plans through AI is an active research area — published clinical trials on targeted therapies report patient-outcome improvements of up to 25%, a direction VitaIntel aims to build toward.",
      },
    ],
  },
  {
    slug: "genomics-ml",
    title: "Genomics and Machine Learning",
    excerpt:
      "How VitaIntel's ML models are unlocking new possibilities in genomics.",
    publishedAt: "2025-07-10",
    readTime: "6 min read",
    category: "Genomics",
    image: "/images/blog/genomics-ml.jpg",
    content: [
      {
        type: "paragraph",
        content:
          "Machine learning is revolutionizing genomic research, enabling scientists to decode complex biological systems with greater precision. VitaIntel is exploring how cutting-edge AI can support personalized medicine and disease understanding.",
      },
      {
        type: "heading",
        content: "Decoding DNA",
      },
      {
        type: "paragraph",
        content:
          "Genomic AI platforms use deep learning to analyze DNA sequences, identifying genetic variants linked to diseases. Published research reports up to 95% accuracy for comparable models — enabling precise risk predictions and targeted therapy research.",
      },
      {
        type: "stats",
        stats: [
          { value: "[Placeholder]", label: "Research institutions engaged" },
          { value: "[Placeholder]", label: "Genomes in validation pipeline" },
          { value: "30%", label: "Target faster discovery workflows" },
        ],
      },
      {
        type: "heading",
        content: "Future Directions",
      },
      {
        type: "paragraph",
        content:
          "[Placeholder] Next-generation algorithms may predict disease susceptibility earlier. VitaIntel's roadmap includes expanding genomic monitoring concepts as core diagnostic work matures.",
      },
    ],
  },
  {
    slug: "comp-bio",
    title: "AI in Computational Biology",
    excerpt:
      "Discover how AI is transforming genetic research and personalized medicine.",
    publishedAt: "2025-05-22",
    readTime: "5 min read",
    category: "Computational Biology",
    image: "/images/blog/comp-bio.jpg",
    content: [
      {
        type: "paragraph",
        content:
          "Computational biology is transforming healthcare, and AI is at its core. VitaIntel's Computational Biology platform uses AI-ML and data engineering to uncover insights for cancer research and personalized medicine.",
      },
      {
        type: "heading",
        content: "Unlocking Biological Data",
      },
      {
        type: "paragraph",
        content:
          "AI models analyze genomic and proteomic data to identify biomarkers, with published research reporting up to 92% accuracy in predicting cancer progression.",
      },
      {
        type: "heading",
        content: "Scalable Infrastructure",
      },
      {
        type: "paragraph",
        content:
          "Data engineering pipelines can process large biological datasets, with comparable pipelines in published research reducing analysis time by up to 35%.",
      },
    ],
  },
  {
    slug: "precision-med",
    title: "Precision Medicine Trends",
    excerpt:
      "Insights into how AI is shaping the future of personalized healthcare.",
    publishedAt: "2025-04-08",
    readTime: "4 min read",
    category: "Precision Medicine",
    image: "/images/blog/precision-med.jpg",
    content: [
      {
        type: "paragraph",
        content:
          "Precision medicine is transforming healthcare by tailoring treatments to individual patients based on their genetic, environmental, and lifestyle factors.",
      },
      {
        type: "heading",
        content: "AI-Driven Genomic Analysis",
      },
      {
        type: "paragraph",
        content:
          "AI algorithms can analyze genomic data with published research reporting up to 95% accuracy for comparable models, identifying disease risks and enabling early interventions.",
      },
      {
        type: "callout",
        content:
          "[Placeholder] The future of precision medicine lies in integrating multi-omics data and real-time monitoring — areas VitaIntel is actively researching.",
      },
    ],
  },
  {
    slug: "clinical-trials",
    title: "AI in Clinical Trials",
    excerpt:
      "Learn how AI is streamlining clinical research for faster outcomes.",
    publishedAt: "2025-03-18",
    readTime: "5 min read",
    category: "Clinical Research",
    image: "/images/blog/clinical-trials.jpg",
    content: [
      {
        type: "paragraph",
        content:
          "Clinical trials are the backbone of medical innovation, and artificial intelligence is revolutionizing their efficiency. AI-ML and data engineering can streamline clinical research and accelerate paths to new treatments.",
      },
      {
        type: "heading",
        content: "Optimizing Patient Recruitment",
      },
      {
        type: "paragraph",
        content:
          "AI models can analyze electronic health records and genomic data to help identify trial candidates, a method published research links to faster recruitment and more diverse cohorts.",
      },
      {
        type: "stats",
        stats: [
          { value: "25%", label: "Reduction in recruitment time (published research)" },
          { value: "40%", label: "More diverse cohorts (published research)" },
          { value: "18%", label: "Cost savings (published research)" },
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
