export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  scope: string;
  timeline: string;
  context: string;
  problem: string;
  roleDescription: string;
  approach: string[];
  solution: string[];
  outcome: string[];
}

export const projects: Project[] = [
  {
    slug: "bracket",
    title: "Bracket — Financial Decision Platform",
    subtitle: "Product Strategy / Fintech / EdTech",
    year: "2025",
    role: "Data Product Manager",
    scope: "Product Strategy, Data Systems, Decision Design",
    timeline: "2025",
    context:
      "Bracket is a platform designed to help users make better financial decisions through structured, data-driven flows.",
    problem:
      "Users struggle with fragmented financial information, lack of structured decision frameworks, and low confidence in financial outcomes.",
    roleDescription:
      "As the Data Product Manager, I defined the product vision, designed decision frameworks, and worked across product, data, and engineering to build scalable systems.",
    approach: [
      "Designed structured decision flows",
      "Integrated education into decision points",
      "Built systems around user behavior",
    ],
    solution: [
      "Developed guided financial workflows",
      "Created adaptive, data-driven experiences",
      "Built scalable decision-support systems",
    ],
    outcome: [
      "Improved clarity in decision-making",
      "Increased engagement with financial tools",
      "Established a scalable product foundation",
    ],
  },
  {
    slug: "citiwatch",
    title: "CitiWatch Analytics Project",
    subtitle: "Data Analytics / Civic Tech",
    year: "2025",
    role: "Data Product Analyst",
    scope: "Data Analytics, AI/ML, Smart Cities",
    timeline: "2024 – 2025",
    context:
      "CitiWatch is Baltimore's camera surveillance network. The city needed to leverage this infrastructure to detect and reduce illegal dumping incidents.",
    problem:
      "Illegal dumping was degrading neighborhoods with no scalable detection method. Existing manual reporting was slow and inconsistent.",
    roleDescription:
      "Partnered with Google AI/ML team to pilot CitiWatch camera feeds for detecting illegal dumping. Created strategic presentations for city leadership demonstrating optimization potential.",
    approach: [
      "Analyzed camera feed data for dumping patterns",
      "Collaborated with Google AI/ML on detection models",
      "Mapped high-impact zones for camera optimization",
    ],
    solution: [
      "Developed AI-powered dumping detection pipeline",
      "Created data-driven camera placement strategy",
      "Built reporting framework for city leadership",
    ],
    outcome: [
      "Demonstrated potential 25% cleanliness improvement",
      "Established Google AI partnership for civic tech",
      "Informed city-wide camera optimization strategy",
    ],
  },
  {
    slug: "grant-data-automation",
    title: "Grant Data Automation System",
    subtitle: "Data Systems / Automation",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Data Analysis, Process Automation, Policy Impact",
    timeline: "2023 – 2024",
    context:
      "The Redlining and Justice40 initiatives required comprehensive data analysis across thousands of homes and cities to drive equitable environmental policy.",
    problem:
      "Manual data processing across 153 cities was time-consuming and error-prone, delaying critical policy decisions impacting 7,600 homes.",
    roleDescription:
      "Led end-to-end data analysis for environmental justice initiatives, delivering insights that directly informed equitable policy decisions and community development strategies.",
    approach: [
      "Built automated data pipelines for multi-city analysis",
      "Standardized data collection across 153 cities",
      "Created reproducible analytical frameworks",
    ],
    solution: [
      "Automated grant data processing workflows",
      "Developed cross-city comparison dashboards",
      "Built policy-ready reporting templates",
    ],
    outcome: [
      "Impacted 7,600 homes across 153 cities",
      "Drove equitable environmental policy decisions",
      "Increased weekly research output by 90%",
    ],
  },
  {
    slug: "citistat",
    title: "CitiStat Performance Hub",
    subtitle: "Product / Gov Tech",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Product Development, Data Visualization, Gov Tech",
    timeline: "2024 – 2025",
    context:
      "Baltimore's Office of Performance and Innovation needed a centralized platform for CitiStat updates accessible to 15+ city agencies.",
    problem:
      "Agency reporting was fragmented, inefficient, and lacked a single source of truth, reducing cross-department engagement.",
    roleDescription:
      "Launched a Quarto-powered website to centralize CitiStat updates, streamlining reporting and boosting agency engagement.",
    approach: [
      "Audited existing reporting workflows",
      "Designed centralized information architecture",
      "Built automated data publishing pipeline",
    ],
    solution: [
      "Launched Quarto-powered performance hub",
      "Created standardized reporting templates",
      "Automated data refresh and publishing",
    ],
    outcome: [
      "Reduced reporting efforts by 30%",
      "Increased engagement by 40%",
      "Streamlined access for 15+ agencies",
    ],
  },
  {
    slug: "311-sla",
    title: "311 Service Request SLA Optimization",
    subtitle: "Data Analytics / Public Service",
    year: "2024",
    role: "Data Product Analyst",
    scope: "Data Analysis, Process Improvement, KPIs",
    timeline: "2024 – 2025",
    context:
      "Baltimore's 311 service request system had low completion rates and inconsistent SLA compliance across agencies.",
    problem:
      "Completion rates were under 50%, with no cross-agency coordination on SLA standards or performance tracking.",
    roleDescription:
      "Organized cross-agency meetings and conducted data analysis to optimize 311 service request SLAs, directly improving citizen satisfaction.",
    approach: [
      "Analyzed SLA compliance data across agencies",
      "Facilitated cross-agency coordination meetings",
      "Identified bottlenecks in service request workflows",
    ],
    solution: [
      "Redesigned SLA frameworks for key service types",
      "Built performance tracking dashboards",
      "Established cross-agency accountability systems",
    ],
    outcome: [
      "Increased completion rates from under 50% to 75%",
      "Improved SLA compliance across departments",
      "Enhanced citizen satisfaction metrics",
    ],
  },
  {
    slug: "oracle-dashboards",
    title: "Real-Time KPI Dashboards",
    subtitle: "Business Intelligence / Data Engineering",
    year: "2021",
    role: "Product Management Intern",
    scope: "SQL, APEX, Grafana, Business Intelligence",
    timeline: "Summer 2021",
    context:
      "Oracle's teams needed real-time visibility into key performance indicators across engineering and business operations.",
    problem:
      "Decision-making was delayed by manual reporting and lack of centralized, real-time performance data.",
    roleDescription:
      "Developed and deployed 5 SQL-driven dashboards in APEX and Grafana for real-time KPI tracking across teams.",
    approach: [
      "Mapped KPI requirements across teams",
      "Designed SQL queries for real-time data extraction",
      "Built interactive dashboard prototypes",
    ],
    solution: [
      "Deployed 5 dashboards in APEX and Grafana",
      "Created automated data refresh pipelines",
      "Built role-based access for different teams",
    ],
    outcome: [
      "Improved decision-making speed across teams",
      "Enabled real-time operational visibility",
      "Reduced manual reporting overhead",
    ],
  },
  {
    slug: "morgan-stanley",
    title: "Server Health Monitoring Platform",
    subtitle: "Infrastructure / Full-Stack Engineering",
    year: "2019",
    role: "Technology Analyst Intern",
    scope: "Java, Spring Boot, Kafka, AngularJS",
    timeline: "Summer 2019",
    context:
      "Morgan Stanley required a responsive, data-driven health-monitoring system for their server infrastructure across multiple departments.",
    problem:
      "Server health data was siloed across departments with no unified monitoring or compliance visibility.",
    roleDescription:
      "Created a responsive health-monitoring website using Java, AngularJS, Spring Boot, and Kafka, ensuring compliance across 3 departments.",
    approach: [
      "Designed real-time monitoring architecture",
      "Built event-driven data pipelines with Kafka",
      "Created department-specific compliance views",
    ],
    solution: [
      "Deployed full-stack monitoring platform",
      "Integrated real-time alerting systems",
      "Built executive reporting dashboards",
    ],
    outcome: [
      "Ensured compliance across 3 departments",
      "Delivered insights to executive and Wealth Management teams",
      "Established unified server monitoring infrastructure",
    ],
  },
  {
    slug: "hbcuvc",
    title: "Investment Memos & Pipeline Analysis",
    subtitle: "Venture Capital / Due Diligence",
    year: "2022",
    role: "Venture Capital Analyst",
    scope: "Investment Analysis, Due Diligence, Deal Flow",
    timeline: "2021 – 2023",
    context:
      "HBCUvc connects HBCU students with venture capital opportunities. Supply Change Capital needed rigorous pipeline analysis and investment recommendations.",
    problem:
      "Pipeline companies lacked standardized evaluation frameworks, making it difficult to deliver consistent, actionable investment recommendations.",
    roleDescription:
      "Presented 20+ investment memos and teasers for pipeline companies to Supply Change Capital, evaluating opportunities across diverse sectors.",
    approach: [
      "Developed standardized memo frameworks",
      "Conducted multi-level opportunity analysis",
      "Built sector-specific evaluation criteria",
    ],
    solution: [
      "Delivered 20+ investment memos and teasers",
      "Created actionable investment recommendations",
      "Built repeatable due diligence workflows",
    ],
    outcome: [
      "Streamlined investment decision process",
      "Improved pipeline evaluation consistency",
      "Enhanced cross-sector deal flow analysis",
    ],
  },
];

export const selectedWork = [
  projects[0], // Bracket
  projects[1], // CitiWatch
  projects[2], // Grant Data
];
