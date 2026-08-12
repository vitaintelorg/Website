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
    name: "Abdullah Saber",
    initials: "AS",
    photo: "/images/team/Abdullah_Saber.jpeg",
    title: "Founder & CEO",
    tags: ["AI/ML Engineer — strategy & business development", "Researcher, tumors & cancer"],
  },
  {
    name: "Mahmoud El Masry",
    initials: "ME",
    photo: "/images/team/mahmoud_Elmasry.jpeg",
    title: "Founding Cybersecurity Lead",
    tags: ["Covers all cybersecurity matters company-wide"],
  },
  {
    name: "AbdulRahman Al-Husseini",
    initials: "AH",
    photo: "/images/team/AbdulRahman_Al-Husseini.jpeg",
    title: "Network Engineer",
    tags: ["Former Data Annotation"],
  },
  {
    name: "Mustafa Al-Dawi",
    initials: "MD",
    photo: "/images/team/Mustafa_Al-Dawi.jpeg",
    title: "Data Annotation Specialist",
    tags: ["QA Engineer"],
  },
],
  regulatory: [
    {
      title: "Egypt (EDA)",
      status: "In Progress",
      description: "Navigating SaMD classification with the Egyptian Drug Authority.",
    },
    {
      title: "International (FDA / CE)",
      status: "Not yet applicable",
      description: "No international regulatory submissions at this stage — Egypt-first focus.",
    },
    {
      title: "Clinical Validation",
      status: "Research stage",
      description:
        "Models are being trained and validated on BUSI and CDD-CESM datasets; independent clinical validation has not yet taken place.",
    },
  ],
} as const;
