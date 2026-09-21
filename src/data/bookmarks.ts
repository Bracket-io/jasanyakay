export interface BookmarkItem {
  title: string;
  organization?: string;
  year?: string;
  category?: string;
  description?: string;
  url?: string;
}

export const bookmarks: BookmarkItem[] = [
  // Certifications
  {
    title: "PSPO II — Professional Scrum Product Owner II",
    organization: "Scrum.org",
    year: "2026",
    category: "Certification",
  },
  {
    title: "Anthropic AI Fluency Framework & Foundations",
    organization: "Anthropic",
    year: "2026",
    category: "Certification",
  },
  {
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    year: "2021",
    category: "Certification",
  },
  {
    title: "Aha! Product Management Professional",
    organization: "Aha!",
    year: "2023",
    category: "Certification",
  },
  {
    title: "Google Project Management Certificate",
    organization: "Google",
    year: "2021",
    category: "Certification",
  },
  {
    title: "Bloomberg Market Concepts",
    organization: "Bloomberg",
    year: "2021",
    category: "Certification",
  },

  // Recognition
  {
    title: "SBE Evaluator",
    organization: "DECA Inc.",
    year: "2025",
    category: "Recognition",
  },
  {
    title: "Venture Fellow",
    organization: "Venture Institute",
    year: "2024",
    category: "Recognition",
  },
  {
    title: "HopStart Pitch Competition",
    organization: "Johns Hopkins University",
    year: "2023",
    category: "Recognition",
    description: "Winner",
  },
  {
    title: "LaunchPad",
    organization: "Blackstone",
    year: "2023",
    category: "Recognition",
    description: "Winner",
  },
  {
    title: "Case Competition",
    organization: "WeSolv",
    year: "2022",
    category: "Recognition",
    description: "Winner",
  },
  {
    title: "University Innovation Fellow",
    organization: "Stanford University",
    year: "2017",
    category: "Recognition",
  },
  {
    title: "HBCUvc Fellowship, Cohort 5",
    organization: "HBCUvc",
    year: "2021",
    category: "Recognition",
  },

  // Research
  {
    title: "Green Deficits in a Warming World",
    year: "2026",
    category: "Research",
    description: "Under Review",
  },
  {
    title: "Health infrastructure lags behind climate-driven health risks across global cities",
    year: "2026",
    category: "Research",
    description: "Under Review",
  },
  {
    title: "Sectoral Decoupling or Structural Lock-in?",
    year: "2026",
    category: "Research",
    description: "Under Review",
  },
  {
    title: "Multi-Objective Genetic Algorithm Optimization for Energy Access Policy Design in Sub-Saharan Africa",
    year: "2025",
    category: "Research",
    description: "Under Review",
  },
  {
    title: "Eyes on Baltimore: Leveraging Surveillance and Community Engagement to Reduce Illegal Dumping",
    year: "2025",
    category: "Research",
  },
  {
    title: "Evaluating the Impact of Policy Interventions on CO2 Emissions in Sub-Saharan Africa",
    year: "2024",
    category: "Research",
  },

  // Teaching
  {
    title: "Econ 325 — Labor Economics",
    organization: "Morgan State University",
    year: "2026",
    category: "Teaching",
  },
  {
    title: "Econ 323 — Economics of Developing Nations",
    organization: "Morgan State University",
    year: "2025",
    category: "Teaching",
  },
  {
    title: "Econ 211 — Principles of Macroeconomics",
    organization: "Morgan State University",
    year: "2024–Present",
    category: "Teaching",
  },
  {
    title: "Professional Writing and Communication for Engineering Students",
    organization: "Johns Hopkins University",
    year: "2023",
    category: "Teaching",
  },

  // Mentorship
  {
    title: "Super Mentor",
    organization: "Johns Hopkins University",
    year: "2025",
    category: "Mentorship",
  },
  {
    title: "Mentor",
    organization: "iMentor",
    year: "2025",
    category: "Mentorship",
  },
  {
    title: "Mentor",
    organization: "Technovation",
    year: "2025",
    category: "Mentorship",
  },
  {
    title: "Data Mentor",
    organization: "Trubel",
    year: "2025",
    category: "Mentorship",
  },
  {
    title: "Mentor",
    organization: "Morgan State University",
    year: "2020–2026",
    category: "Mentorship",
  },

  // Venture
  {
    title: "Training for emerging VC associates",
    organization: "Venture Institute",
    year: "2025",
    category: "Venture",
  },
  {
    title: "Fund Associate Fellowship",
    organization: "VC Partners",
    year: "2024",
    category: "Venture",
  },
  {
    title: "Portfolio Monitoring",
    organization: "Oregon Sport Angels",
    year: "2023–2024",
    category: "Venture",
    description: "31 companies",
  },
  {
    title: "Due Diligence Analyst",
    organization: "SupplyChange Capital",
    year: "2022",
    category: "Venture",
  },
  {
    title: "Due Diligence & Investment Teasers",
    organization: "MotivateVC",
    year: "2022",
    category: "Venture",
  },
  {
    title: "VC Fellowship, Cohort 5",
    organization: "HBCUvc",
    year: "2021–Present",
    category: "Venture",
  },

  // Consulting
  {
    title: "The Butterfly Effect",
    year: "2024",
    category: "Consulting",
  },
  {
    title: "Lights Back On",
    year: "2024",
    category: "Consulting",
  },
  {
    title: "Brightly",
    year: "2023",
    category: "Consulting",
  },
  {
    title: "Johns Hopkins Hospital",
    year: "2022",
    category: "Consulting",
  },
  {
    title: "Dynata",
    year: "2022",
    category: "Consulting",
  },

  // Press
  {
    title: "NSF I-Corps Hub Mid-Atlantic Region",
    year: "2024",
    category: "Press",
  },
  {
    title: "EducatorsTalk Podcast",
    year: "2023",
    category: "Press",
  },
  {
    title: "Johns Hopkins Technology Ventures",
    year: "2023",
    category: "Press",
  },
  {
    title: "Harvard iLab / AWS NextGen",
    year: "2023",
    category: "Press",
  },
  {
    title: "Technically Baltimore",
    year: "2022",
    category: "Press",
  },
  {
    title: "HBCUvc Fellowship",
    year: "2021",
    category: "Press",
  },

  // Volunteer
  {
    title: "BisonHacks",
    year: "2025",
    category: "Volunteer",
  },
  {
    title: "SproutHacks",
    year: "2025",
    category: "Volunteer",
  },
  {
    title: "DECA Evaluator",
    year: "2025",
    category: "Volunteer",
  },

  // Reading
  {
    title: "Inspired — Marty Cagan",
    category: "Reading",
  },
  {
    title: "Continuous Discovery Habits — Teresa Torres",
    category: "Reading",
  },
  {
    title: "The Mom Test — Rob Fitzpatrick",
    category: "Reading",
  },

  // Tools
  {
    title: "Figma",
    category: "Tools",
  },
  {
    title: "GitHub",
    category: "Tools",
  },
  {
    title: "Supabase",
    category: "Tools",
  },
  {
    title: "Lovable",
    category: "Tools",
  },
];
