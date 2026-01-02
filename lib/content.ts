export const content = {
  name: "Iqbal Khosti",
  hero: {
    headline: "Get to know Iqbal Khosti",
    subheadline: "Computer Science (Math minor) • AI & Data • Building practical, solutions-oriented software",
  },
  about: {
    text: "I'm Iqbal, a 3rd year Computer Science student with a minor in math. I'm interested in effective, solutions-oriented software and AI models. I'm deeply passionate about math and its real-world applications in our lives and data.",
  },
  projects: [
    {
      title: "CookGPT",
      description: "A small LLM-style project for recipe discovery and chat; trained/structured around a recipe dataset.",
      githubUrl: "https://github.com/iqbalkhosti/CookGPT",
    },
    {
      title: "Deed Finance",
      description: "AI-assisted personal finance prototype focused on points/rewards insights and optimization.",
      githubUrl: "https://github.com/iqbalkhosti/deed-finance",
    },
    {
      title: "Credit Card Fraud Detection Model",
      description: "Machine learning classification project for detecting fraudulent transactions; focuses on evaluation for imbalanced data.",
      githubUrl: "https://github.com/iqbalkhosti/credit-card-fraud-detection-model",
    },
  ],
  experience: [
    {
      title: "Digital Services Intern",
      company: "OCASI (Ontario Council of Agencies Serving Immigrants)",
      period: "Jul 2025 to Sep 2025",
      location: "Toronto / Hybrid",
      bullets: [
        "Analyzed traffic and engagement data for platforms with 6M+ annual visits using Google Analytics; summarized insights for leadership.",
        "Supported content audits and web testing across multiple organizational sites.",
      ],
    },
    {
      title: "Team Member — Guidance, Software & Navigation",
      company: "OTOPs Rover (Rocketry Team), Ontario Tech University",
      period: "Oct 2025 to Present",
      location: "",
      bullets: [
        "Contributed to guidance/navigation software using Python and C++ with testing and validation.",
      ],
    },
    {
      title: "Founder & Operator",
      company: "Deed Leisure (Custom Merchandise Business)",
      period: "2023 to Present",
      location: "Oshawa, ON",
      bullets: [
        "Managed client communication, fulfillment, and supplier coordination.",
        "Built lightweight operational tracking to support business decisions.",
      ],
    },
    {
      title: "Crew Trainer / Team Member",
      company: "McDonald's",
      period: "2022 to Present",
      location: "Oshawa, ON",
      bullets: [
        "Trained new team members and supported operations during high-volume periods.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS"],
    aiData: ["pandas", "scikit-learn", "PyTorch", "data preprocessing", "evaluation metrics"],    
    tools: ["Git/GitHub", "Docker (familiar)", "REST APIs", "Flask"],
    other: ["communication", "collaboration", "experimentation"],
  },
  contact: {
    email: "Iqbal.khosti@ontariotechu.net",
    linkedin: "https://www.linkedin.com/in/iqbalkhosti",
    github: "https://github.com/iqbalkhosti",
  },
} as const;
