export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  scope: string;
  timeline: string;
  overview: string;
  problem: string;
  context: string;
  approach: string[];
  productThinking: string[];
  execution: string[];
  outcome: string[];
  learnings: string[];
  externalLink?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "bracket",
    title: "Bracket",
    subtitle: "Financial decision platform helping users navigate budgeting, saving, and investing",
    year: "2025",
    role: "Data Product Manager",
    scope: "Product Strategy, Data Systems, Decision Design",
    timeline: "2025",
    overview:
      "Bracket is a platform designed to help users make better financial decisions through structured, data-driven flows. It combines behavioral nudges with clear decision frameworks.",
    problem:
      "Users struggle with fragmented financial information, lack of structured decision frameworks, and low confidence in financial outcomes.",
    context:
      "Financial literacy tools often overwhelm users with information without guiding them toward action. Bracket was built to bridge the gap between knowledge and decision-making.",
    approach: [
      "Designed structured decision flows based on behavioral research",
      "Integrated education into decision points",
      "Built systems around user behavior patterns",
    ],
    productThinking: [
      "Prioritized guided flows over open-ended exploration to reduce decision fatigue",
      "Chose adaptive content delivery based on user progress and confidence levels",
      "Balanced simplicity with depth — surface key info, allow drill-down for detail",
    ],
    execution: [
      "Built with React, TypeScript, and Tailwind CSS",
      "Designed data models for decision trees and user progress tracking",
      "Implemented analytics for measuring decision confidence over time",
    ],
    outcome: [
      "Improved clarity in decision-making for early users",
      "Increased engagement with financial planning tools",
      "Established a scalable product foundation for future features",
    ],
    learnings: [
      "Users need fewer choices, not more information",
      "Decision confidence is a more meaningful metric than page views",
      "Behavioral design principles outperform feature-heavy approaches",
    ],
  },
  {
    slug: "citiwatch",
    title: "CitiWatch Analytics",
    subtitle: "City-scale analytics system designed to reduce illegal dumping using data",
    year: "2025",
    role: "Data Product Analyst",
    scope: "Data Analytics, AI/ML, Smart Cities",
    timeline: "2024 – 2025",
    overview:
      "An analytics initiative leveraging Baltimore's CitiWatch camera network and Google AI/ML to detect and reduce illegal dumping incidents city-wide.",
    problem:
      "Illegal dumping was degrading neighborhoods with no scalable detection method. Manual reporting was slow and inconsistent.",
    context:
      "Baltimore's CitiWatch network has hundreds of cameras, but they were underutilized for proactive enforcement. The city needed a data-driven approach to optimize camera usage.",
    approach: [
      "Analyzed camera feed data for dumping patterns",
      "Collaborated with Google AI/ML on detection models",
      "Mapped high-impact zones for camera optimization",
    ],
    productThinking: [
      "Framed the problem as detection + prevention, not just surveillance",
      "Designed for city leadership buy-in with clear ROI narratives",
      "Balanced privacy concerns with public safety objectives",
    ],
    execution: [
      "Built data pipelines for camera feed analysis",
      "Created strategic presentations for city leadership",
      "Developed zone-based optimization framework",
    ],
    outcome: [
      "Demonstrated potential 25% cleanliness improvement",
      "Established Google AI partnership for civic tech",
      "Informed city-wide camera optimization strategy",
    ],
    learnings: [
      "Civic tech requires balancing technical capability with political feasibility",
      "Data storytelling is as important as data analysis in government",
      "Partnerships with tech companies accelerate public sector innovation",
    ],
  },
  {
    slug: "environmental-justice",
    title: "Environmental Justice Platform",
    subtitle: "Data systems supporting policy decisions across 7,600+ households",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Data Analysis, Policy Impact, Environmental Justice",
    timeline: "2023 – 2024",
    overview:
      "Led data analysis for the Redlining and Justice40 initiatives, delivering insights that drove equitable policy decisions impacting thousands of homes across 153 cities.",
    problem:
      "Manual data processing across 153 cities was time-consuming and error-prone, delaying critical policy decisions impacting 7,600 homes.",
    context:
      "The Redlining and Justice40 initiatives required comprehensive data analysis to address historical inequities in environmental policy and resource allocation.",
    approach: [
      "Built automated data pipelines for multi-city analysis",
      "Standardized data collection across 153 cities",
      "Created reproducible analytical frameworks",
    ],
    productThinking: [
      "Designed for reproducibility so analysis could scale to new cities",
      "Prioritized actionable metrics over comprehensive data collection",
      "Built trust with stakeholders through transparent methodology",
    ],
    execution: [
      "Automated grant data processing workflows",
      "Developed cross-city comparison dashboards",
      "Built policy-ready reporting templates with Environmental Justice presentations",
    ],
    outcome: [
      "Impacted 7,600 homes across 153 cities",
      "Drove equitable environmental policy decisions",
      "Increased weekly research output by 90%",
    ],
    learnings: [
      "Standardization is the key to scaling analysis across geographies",
      "Policy impact requires translating data into narrative",
      "Automation frees analysts to focus on insight, not data wrangling",
    ],
  },
  {
    slug: "citistat",
    title: "CitiStat Performance Hub",
    subtitle: "Centralized performance platform for 15+ city agencies",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Product Development, Data Visualization, Gov Tech",
    timeline: "2024 – 2025",
    overview:
      "Launched a Quarto-powered website to centralize CitiStat updates for Baltimore's Office of Performance and Innovation.",
    problem:
      "Agency reporting was fragmented, inefficient, and lacked a single source of truth, reducing cross-department engagement.",
    context:
      "Baltimore's Office of Performance and Innovation needed a centralized platform for CitiStat updates accessible to 15+ city agencies.",
    approach: [
      "Audited existing reporting workflows across agencies",
      "Designed centralized information architecture",
      "Built automated data publishing pipeline",
    ],
    productThinking: [
      "Chose Quarto for low maintenance and high accessibility",
      "Designed for agency self-service to reduce central team bottlenecks",
      "Prioritized engagement metrics to measure platform success",
    ],
    execution: [
      "Launched Quarto-powered performance hub",
      "Created standardized reporting templates",
      "Automated data refresh and publishing workflows",
    ],
    outcome: [
      "Reduced reporting efforts by 30%",
      "Increased agency engagement by 40%",
      "Streamlined access for 15+ agencies",
    ],
    learnings: [
      "Simple tools adopted widely beat complex tools adopted narrowly",
      "Engagement requires active outreach, not just publishing",
      "Standardized templates dramatically reduce reporting friction",
    ],
  },
  {
    slug: "311-sla",
    title: "311 SLA Optimization",
    subtitle: "Data-driven improvement of city service request completion rates",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Data Analysis, Process Improvement, KPIs",
    timeline: "2024 – 2025",
    overview:
      "Used data analysis and cross-agency coordination to optimize 311 service request SLAs, improving completion rates from under 50% to 75%.",
    problem:
      "Completion rates were under 50%, with no cross-agency coordination on SLA standards or performance tracking.",
    context:
      "Baltimore's 311 service request system had low completion rates and inconsistent SLA compliance across agencies.",
    approach: [
      "Analyzed SLA compliance data across agencies",
      "Facilitated cross-agency coordination meetings",
      "Identified bottlenecks in service request workflows",
    ],
    productThinking: [
      "Focused on SLA redesign rather than enforcement to drive sustainable improvement",
      "Used cross-agency meetings as a product feedback mechanism",
      "Designed dashboards for accountability without blame",
    ],
    execution: [
      "Redesigned SLA frameworks for key service types",
      "Built performance tracking dashboards",
      "Established cross-agency accountability systems",
    ],
    outcome: [
      "Increased completion rates from under 50% to 75%",
      "Improved SLA compliance across departments",
      "Enhanced citizen satisfaction metrics",
    ],
    learnings: [
      "Process improvement requires buy-in before enforcement",
      "Cross-agency coordination is a product design challenge",
      "Data transparency drives accountability naturally",
    ],
  },
  {
    slug: "oracle-dashboards",
    title: "Real-Time KPI Dashboards",
    subtitle: "SQL-driven dashboards for operational visibility at Oracle",
    year: "2021",
    role: "Product Management Intern",
    scope: "SQL, APEX, Grafana, Business Intelligence",
    timeline: "Summer 2021",
    overview:
      "Developed and deployed 5 SQL-driven dashboards in APEX and Grafana for real-time KPI tracking across Oracle teams.",
    problem:
      "Decision-making was delayed by manual reporting and lack of centralized, real-time performance data.",
    context:
      "Oracle's teams needed real-time visibility into key performance indicators across engineering and business operations.",
    approach: [
      "Mapped KPI requirements across teams",
      "Designed SQL queries for real-time data extraction",
      "Built interactive dashboard prototypes",
    ],
    productThinking: [
      "Prioritized the 5 most impactful KPIs over comprehensive coverage",
      "Designed for self-service so teams could filter their own data",
      "Chose Grafana for engineering and APEX for business stakeholders",
    ],
    execution: [
      "Deployed 5 dashboards in APEX and Grafana",
      "Created automated data refresh pipelines",
      "Built role-based access for different teams",
    ],
    outcome: [
      "Improved decision-making speed across teams",
      "Enabled real-time operational visibility",
      "Reduced manual reporting overhead",
    ],
    learnings: [
      "Different stakeholders need different tools for the same data",
      "Real-time data is only useful if it's actionable",
      "Dashboard adoption requires training, not just deployment",
    ],
  },
  {
    slug: "morgan-stanley",
    title: "Server Health Monitoring",
    subtitle: "Full-stack monitoring platform for Morgan Stanley infrastructure",
    year: "2019",
    role: "Technology Analyst Intern",
    scope: "Java, Spring Boot, Kafka, AngularJS",
    timeline: "Summer 2019",
    overview:
      "Built a responsive, data-driven health-monitoring website for Morgan Stanley's server infrastructure, ensuring compliance across 3 departments.",
    problem:
      "Server health data was siloed across departments with no unified monitoring or compliance visibility.",
    context:
      "Morgan Stanley required a responsive health-monitoring system for their server infrastructure across multiple departments.",
    approach: [
      "Designed real-time monitoring architecture",
      "Built event-driven data pipelines with Kafka",
      "Created department-specific compliance views",
    ],
    productThinking: [
      "Designed for compliance-first, with monitoring as a side benefit",
      "Chose Kafka for event-driven architecture to handle high data throughput",
      "Built department-specific views to reduce information overload",
    ],
    execution: [
      "Built full-stack platform with Java, Spring Boot, AngularJS",
      "Integrated Kafka for real-time event streaming",
      "Created executive reporting dashboards with Vue.js and Teradata",
    ],
    outcome: [
      "Ensured compliance across 3 departments",
      "Delivered insights to executive and Wealth Management teams",
      "Established unified server monitoring infrastructure",
    ],
    learnings: [
      "Enterprise monitoring is as much about governance as technology",
      "Real-time systems require careful error handling and fallback design",
      "Cross-department tools need department-specific interfaces",
    ],
  },
  {
    slug: "hbcuvc",
    title: "Investment Pipeline Analysis",
    subtitle: "Venture capital due diligence and investment memos at HBCUvc",
    year: "2022",
    role: "Venture Capital Analyst",
    scope: "Investment Analysis, Due Diligence, Deal Flow",
    timeline: "2021 – 2023",
    overview:
      "Presented 20+ investment memos and teasers for pipeline companies to Supply Change Capital, evaluating opportunities across diverse sectors.",
    problem:
      "Pipeline companies lacked standardized evaluation frameworks, making it difficult to deliver consistent, actionable investment recommendations.",
    context:
      "HBCUvc connects HBCU students with venture capital opportunities. Supply Change Capital needed rigorous pipeline analysis.",
    approach: [
      "Developed standardized memo frameworks",
      "Conducted multi-level opportunity analysis",
      "Built sector-specific evaluation criteria",
    ],
    productThinking: [
      "Standardized memos to enable faster partner decision-making",
      "Balanced quantitative metrics with qualitative founder assessment",
      "Designed evaluation criteria that scaled across sectors",
    ],
    execution: [
      "Delivered 20+ investment memos and teasers",
      "Used Airtable, Excel, and Streak for pipeline management",
      "Created actionable investment recommendations",
    ],
    outcome: [
      "Streamlined investment decision process",
      "Improved pipeline evaluation consistency",
      "Enhanced cross-sector deal flow analysis",
    ],
    learnings: [
      "Standardization accelerates decision-making in VC",
      "Qualitative judgment matters as much as quantitative analysis",
      "Clear communication is the most valuable analyst skill",
    ],
  },
];

export const selectedWork = projects.slice(0, 3);

export const thoughts = [
  {
    title: "Investment Thesis — Vertical SaaS",
    description: "Deep dive into the vertical SaaS landscape, exploring market opportunities and investment strategies.",
    date: "Dec 2023",
    link: "https://jaskay.medium.com/investment-thesis-vertical-saas-7f3ad770873c",
    category: "Venture Capital",
  },
  {
    title: "Product Review: Masterclass",
    description: "Analyzing Masterclass's product strategy and how they've created a premium learning platform.",
    date: "Jan 2023",
    link: "https://jaskay.medium.com/product-review-3-masterclass-b9daee74b5ad",
    category: "Product Strategy",
  },
  {
    title: "Project GiiV — Revolutionizing Charity Giving in Nigeria",
    description: "Building a platform to transform charitable donations using technology and social impact.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/project-giiv-revolutionizing-charity-giving-in-nigeria-f6f1fbc07377",
    category: "Impact",
  },
  {
    title: "Bob Iger Teaches Business Strategy and Leadership",
    description: "Key insights from Bob Iger's Masterclass on building Disney through strategic vision.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/bob-iger-teaches-business-strategy-and-leadership-12d7c9ea00a0",
    category: "Leadership",
  },
  {
    title: "Exploring Ruttl: A Deep Dive into UX and Features",
    description: "Product review analyzing Ruttl's approach to design collaboration and feedback tools.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/product-review-2-ruttl-19eab887f7eb",
    category: "Product Strategy",
  },
  {
    title: "Startup Categories #1: Intro",
    description: "Introduction to understanding different startup categories and evaluation frameworks.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/startup-categories-1-intro-b0941ae14e45",
    category: "Venture Capital",
  },
];

export const bookmarks = {
  "Case Competitions": [
    "Techsgiving Finalist",
    "NBMBAA Finalist",
    "Blackstone Launchpad Winner",
  ],
  "Certifications": [
    "PSPO II",
    "PSM",
    "Aha! Product",
  ],
  "Mentorship": [
    "Johns Hopkins Super Mentor",
    "Technovation Mentor",
  ],
  "Volunteer": [
    "BisonHacks",
    "SproutHacks",
    "DECA Evaluator",
  ],
  "Publications": [
    "Articles",
    "Whitepapers",
    "Research",
  ],
};
