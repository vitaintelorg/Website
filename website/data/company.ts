export const company = {
  mission:
    "VitaIntel is an Egyptian AI healthtech project focused on early breast cancer detection, built by a small team spanning AI/ML development, networking engineering, and regulatory navigation.",
  vision:
    "We're building a model stack — EfficientNet-B4, U-Net++, ViT/DINO, and CLAM — trained on Egyptian-specific breast cancer datasets (BUSI and CDD-CESM), with the goal of supporting radiologists rather than replacing clinical judgment.",
  stage:
    "VitaIntel is currently in R&D and regulatory-navigation stage, working through Egypt's SaMD (Software as a Medical Device) classification with the Egyptian Drug Authority (EDA).",
  heroSubtitles: [
    "Innovating early breast cancer detection with VitaIntel",
    "AI-driven precision healthcare for Egyptian hospitals",
    "Supporting radiologists with trustworthy diagnostic AI",
  ],
  team: [
    {
      name: "Abdullah Saber Abdelbaeth",
      role: "Founder & CEO",
      bio: "AI/ML engineer leading overall strategy and business development.",
      initials: "AS",
    },
    {
      name: "Mahmoud El-Masry",
      role: "Founding Cybersecurity Lead",
      bio: "Owns cybersecurity company-wide — infrastructure, endpoints, access control, and vendor risk as the team scales.",
      initials: "ME",
    },
  ],
  teamComposition:
    "Alongside the founding leadership, VitaIntel is built by a six-person technical team — spanning AI/ML engineering with medical-domain knowledge, data annotation, full-stack development, and network engineering — plus a medical team of a senior radiologist and a trainee supporting clinical validation.",
  regulatory: [
    {
      title: "SaMD Classification",
      status: "In progress",
      description:
        "Navigating Egypt's Software as a Medical Device framework with the Egyptian Drug Authority (EDA).",
    },
    {
      title: "Clinical Validation",
      status: "R&D stage",
      description:
        "Model development and validation against published research benchmarks; clinical deployment not yet active.",
    },
    {
      title: "Data Governance",
      status: "In design",
      description:
        "Privacy and security controls are being designed to meet healthcare data requirements before any production deployment.",
    },
  ],
} as const;
