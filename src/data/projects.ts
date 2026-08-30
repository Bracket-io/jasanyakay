export interface TradeoffOption {
  label: string;
  pros: string;
  cons: string;
}

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
  category?: string;
  /** Outcome-first headline used on cards ("Turned X into Y") */
  headline?: string;
  /** Product-language category shown on cards, e.g. "Data Product · Automation" */
  productCategory?: string;
  /** Senior-PM capabilities demonstrated */
  capabilities?: string[];
  /** Independent / founder work — labelled explicitly so it is not read as company experience */
  independent?: boolean;
  /** Case-study depth (sections 03–08) */
  discovery?: string[];
  keyInsight?: string;
  options?: TradeoffOption[];
  decision?: string;
  notBuilt?: string;
  owned?: string[];
  collaborated?: string[];
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
    category: "Fintech",
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
    headline:
      "Turned scattered financial information into guided decisions users could act on.",
    productCategory: "0→1 · Product Strategy · Fintech",
    capabilities: [
      "0→1 product definition",
      "Prioritization under ambiguity",
      "Decision & behavioral design",
      "Analytics instrumentation",
    ],
    independent: true,
    discovery: [
      "Reviewed how existing financial literacy tools present information and where users drop off",
      "[Add specific user research: who you spoke to, how many, what you asked]",
      "[Add evidence that this problem was real — data, interviews, or observed behavior]",
    ],
    keyInsight:
      "The blocker was not access to information but the absence of a decision path — so the product had to reduce choices rather than add content.",
    options: [
      {
        label: "Option A — Content library with search",
        pros: "Fast to build, broad coverage of topics",
        cons: "Leaves the decision entirely to the user; repeats what existing tools already do",
      },
      {
        label: "Option B — Guided decision flows",
        pros: "Moves users toward a concrete next action; measurable per-step confidence",
        cons: "Narrower coverage; each flow must be designed and maintained",
      },
      {
        label: "Option C — Full account aggregation and automation",
        pros: "Highest long-term value and defensibility",
        cons: "Heavy integration and compliance burden before any learning is possible",
      },
    ],
    decision:
      "Chose Option B: a small set of guided decision flows, instrumented for confidence per step, so the core assumption could be tested before investing in integrations.",
    notBuilt:
      "Deliberately did not build account aggregation, automated transfers, or a broad content library — none were required to test whether guided decisions changed user behavior.",
    owned: [
      "Product definition, scope, and release sequencing",
      "Decision-flow design and data model",
      "Analytics definition for decision confidence",
    ],
    collaborated: ["[Add collaborators, if any — design, engineering, advisors]"],
    externalLink: "https://bracketos.lovable.app/",

  },
  {
    slug: "ede",
    title: "Ede",
    subtitle: "African NLP space for low-resource language understanding",
    year: "2025",
    role: "Builder",
    scope: "NLP, AI, African Languages",
    timeline: "2025",
    category: "AI & NLP",
    overview: "Ede is an NLP effort focused on African languages, exploring low-resource language understanding and generation.",
    problem: "African languages are underrepresented in modern NLP systems.",
    context: "Most foundation models underperform on African languages due to limited training data and evaluation benchmarks.",
    approach: ["Curated African language datasets", "Experimented with fine-tuning small models", "Built a public Hugging Face space"],
    productThinking: ["Prioritized accessibility via a public demo", "Focused on practical use cases over benchmarks"],
    execution: ["Deployed a Hugging Face Space", "Iterated on prompts and model choice"],
    outcome: ["Public demo for African NLP experimentation"],
    learnings: ["Data curation is the hardest part of low-resource NLP"],
    externalLink: "https://huggingface.co/spaces/jaskay/ede-african-nlp",
  },
  {
    slug: "quantlens",
    title: "QuantLens",
    subtitle: "Quantitative analytics lens for market data exploration",
    year: "2025",
    role: "Builder",
    scope: "Quant, Analytics, Data",
    timeline: "2025",
    category: "Data & Analytics",
    overview: "QuantLens is a quantitative analytics tool for exploring and visualizing market data.",
    problem: "Market data is dense and hard to interpret without structured tooling.",
    context: "Built to make quantitative exploration accessible through a simple lens-based UI.",
    approach: ["Designed visualization-first analytics flows", "Focused on rapid market data exploration"],
    productThinking: ["Prioritized clarity over feature breadth", "Made quant insight accessible to non-quants"],
    execution: ["Deployed via Vercel", "Iterated on visualization patterns"],
    outcome: ["Public tool for market data exploration"],
    learnings: ["Visualization is the entry point to quantitative thinking"],
    externalLink: "https://quantlens-iota.vercel.app/",
  },
  {
    slug: "citiwatch",
    title: "CitiWatch Analytics",
    subtitle: "City-scale analytics system designed to reduce illegal dumping using data",
    year: "2025",
    role: "Data Product Analyst",
    scope: "Data Analytics, AI/ML, Smart Cities",
    timeline: "2024 – 2025",
    category: "Civic Tech",
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
    category: "Civic Tech",
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
    category: "Civic Tech",
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
    category: "Civic Tech",
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
    slug: "arcgis-dashboard",
    title: "ArcGIS Analytics Dashboard",
    subtitle: "Geospatial dashboard for urban data analysis at Morgan State University",
    year: "2024",
    role: "Data Analyst",
    scope: "ArcGIS, Geospatial Analysis, Data Visualization",
    timeline: "2024",
    category: "Data & Analytics",
    overview:
      "Built an interactive ArcGIS dashboard for geospatial data analysis, supporting urban research and policy decisions.",
    problem:
      "Urban research data lacked spatial visualization, making it difficult to identify geographic patterns and inform location-based policy.",
    context:
      "Morgan State University needed interactive geospatial tools to support urban analytics research and community impact assessment.",
    approach: [
      "Designed geospatial data models for urban metrics",
      "Built interactive map layers with filterable dimensions",
      "Created dashboard views for stakeholder presentations",
    ],
    productThinking: [
      "Prioritized intuitive map interactions over complex GIS workflows",
      "Designed for non-technical stakeholders to explore data independently",
      "Chose ArcGIS for institutional compatibility and scalability",
    ],
    execution: [
      "Deployed interactive ArcGIS dashboard",
      "Integrated multiple urban data sources",
      "Built presentation-ready visualizations",
    ],
    outcome: [
      "Enabled spatial analysis for urban research initiatives",
      "Improved stakeholder understanding of geographic patterns",
      "Supported data-driven policy recommendations",
    ],
    learnings: [
      "Geospatial visualization makes abstract data tangible",
      "Interactive dashboards drive deeper stakeholder engagement",
      "Institutional tools require balancing capability with usability",
    ],
    externalLink: "https://morganstate.maps.arcgis.com/apps/dashboards/472fa40666aa4f8687c06a90f72252cf",
  },
  {
    slug: "oracle-dashboards",
    title: "Real-Time KPI Dashboards",
    subtitle: "SQL-driven dashboards for operational visibility at Oracle",
    year: "2021",
    role: "Product Management Intern",
    scope: "SQL, APEX, Grafana, Business Intelligence",
    timeline: "Summer 2021",
    category: "Data & Analytics",
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
    category: "Engineering",
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
    category: "Venture Capital",
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

const selectedSlugs = [
  "quantlens",
  "bracket",
  "ede",
  "citistat",
  "environmental-justice",
  "311-sla",
];

export const selectedWork = selectedSlugs
  .map((slug) => projects.find((p) => p.slug === slug)!)
  .filter(Boolean);

export const thoughts = [
  {
    title: "Homecoming, Mentorship, and the Power of HBCU Connections",
    description: "HBCU mentorship and the power of giving back through connection and community.",
    date: "Oct 2025",
    link: "https://jaskay.medium.com/homecoming-mentorship-and-the-power-of-hbcu-connections-db51a3d5ea08",
    category: "Impact",
  },
  {
    title: "Decoding Success: A Comprehensive Investment Thesis on Vertical SaaS",
    description: "Deep dive into the vertical SaaS landscape, exploring market opportunities and investment strategies.",
    date: "Dec 2023",
    link: "https://jaskay.medium.com/investment-thesis-vertical-saas-7f3ad770873c",
    category: "Venture Capital",
  },
  {
    title: "Project GiiV — Revolutionizing Charity Giving in Nigeria",
    description: "Building a platform to transform charitable donations using technology and social impact.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/project-giiv-revolutionizing-charity-giving-in-nigeria-f6f1fbc07377",
    category: "Impact",
  },
  {
    title: "Product Review #3: Masterclass",
    description: "Analyzing Masterclass's product strategy and how they've created a premium learning platform.",
    date: "Jan 2023",
    link: "https://jaskay.medium.com/product-review-3-masterclass-b9daee74b5ad",
    category: "Product Strategy",
  },
  {
    title: "Bob Iger Teaches Business Strategy and Leadership",
    description: "Key insights from Bob Iger's Masterclass on building Disney through strategic vision.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/bob-iger-teaches-business-strategy-and-leadership-12d7c9ea00a0",
    category: "Leadership",
  },
  {
    title: "Startup Categories #1: Intro",
    description: "Introduction to understanding different startup categories and evaluation frameworks.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/startup-categories-1-intro-b0941ae14e45",
    category: "Venture Capital",
  },
  {
    title: "Exploring Ruttl: A Deep Dive into UX and Features",
    description: "Product review analyzing Ruttl's approach to design collaboration and feedback tools.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/product-review-2-ruttl-19eab887f7eb",
    category: "Product Strategy",
  },
  {
    title: "Product Review #1: Mailscribe",
    description: "Review of Mailscribe's email productivity tool, covering UX and product positioning.",
    date: "Sep 2022",
    link: "https://jaskay.medium.com/product-review-1-mailscribe-abf59b32804",
    category: "Product Strategy",
  },
  {
    title: "KPCB '22 Product Challenge Response",
    description: "My response to the Kleiner Perkins product design challenge for the 2022 fellowship.",
    date: "Jan 2022",
    link: "https://jaskay.medium.com/kpcb-22-product-challenge-response-972cb76247e6",
    category: "Product Strategy",
  },
  {
    title: "How Design Thinking Can Help You on Your Journey to College",
    description: "Applying design thinking principles to the college application process.",
    date: "Jul 2021",
    link: "https://jaskay.medium.com/how-design-thinking-can-help-you-on-your-journey-to-college-and-life-fe68c9fed48e",
    category: "Design",
  },
  {
    title: "Design4US Experience",
    description: "Reflections on a defining week in my design journey through the Design4US program.",
    date: "Apr 2021",
    link: "https://jaskay.medium.com/design4us-experience-1093bfd6799a",
    category: "Design",
  },
];

export interface BookmarkItem {
  title: string;
  year?: string;
  link?: string;
}

export interface BookmarkFolder {
  label: string;
  items: BookmarkItem[];
}

export const bookmarks: BookmarkFolder[] = [
  {
    label: "Recognition",
    items: [
      { title: "DECA Inc. — SBE Evaluator", year: "2025" },
      { title: "Venture Institute — Venture Fellow", year: "2024" },
      { title: "VC Partners — Venture Capital Associate", year: "2024" },
      { title: "Harvard University — AWS NextGen Fellowship", year: "2023" },
      { title: "Johns Hopkins — Hopstart Pitch Competition Winner", year: "2023" },
      { title: "Blackstone — LaunchPad Winner", year: "2023" },
      { title: "WeSolv — Case Competition Winner", year: "2022" },
      { title: "KeyBank — 4th Position, Case Competition", year: "2022" },
      { title: "NBMBAA — Finalist, MBA Pitch Competition", year: "2022" },
      { title: "HBCUvc — Fellow, Cohort 5", year: "2021" },
      { title: "Stanford University — University Innovation Fellow", year: "2017" },
    ],
  },
  {
    label: "Certifications",
    items: [
      { title: "Anthropic AI Fluency Framework & Foundations", year: "2026" },
      { title: "Anthropic AI Capabilities and Limitations", year: "2026" },
      { title: "Anthropic Claude, Claude Code, Cowork", year: "2026" },
      { title: "Venture Partner Fellowship", year: "2024" },
      { title: "Aha! Product Management Professional", year: "2023" },
      { title: "Program Management for IT Professionals", year: "2023" },
      { title: "Succeeding as a First Time Tech Manager", year: "2023" },
      { title: "Product Management: Building a Product Strategy", year: "2023" },
      { title: "Professional Scrum Master (PSM)", year: "2021" },
      { title: "Scrum: Advanced", year: "2021" },
      { title: "Lean Six Sigma White Belt", year: "2021" },
      { title: "Bloomberg Marketing Certification", year: "2021" },
      { title: "Foundation of Project Management (Google)", year: "2021" },
      { title: "Project Management Essential Certified", year: "2020" },
    ],
  },
  {
    label: "Papers",
    items: [
      { title: "Green Deficits in a Warming World: Urban Greenness Loss, Heat Exposure, and Health Vulnerability across Global Cities (Under Review)", year: "2026" },
      { title: "Health infrastructure lags behind climate-driven health risks across global cities (Under Review)", year: "2026" },
      { title: "Sectoral Decoupling or Structural Lock-in? Global Decomposition of Urban Emissions Drivers (Under Review)", year: "2026" },
      { title: "Multi-Objective Genetic Algorithm Optimization for Energy Access Policy Design in Sub-Saharan Africa (Under Review)", year: "2025" },
      { title: "Gender, Location, and Energy Access Intersectionality in Sub-Saharan Africa (Under Review)", year: "2025" },
      { title: "Urban Energy Transition Patterns and Sustainable Development (Under Review)", year: "2025" },
      { title: "Machine Learning Applications in Analyzing Socioeconomic Determinants of Urban Clean Energy Adoption (Under Review)", year: "2025" },
      { title: "Socioeconomic Determinants and Machine Learning Insights into Clean Energy Transition (Under Review)", year: "2025" },
      { title: "Eyes on Baltimore: Leveraging Surveillance and Community Engagement to Reduce Illegal Dumping", year: "2025", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uiJ5BM4AAAAJ&citation_for_view=uiJ5BM4AAAAJ:UeHWp8X0CEIC" },
      { title: "Evaluating the Impact of Policy Interventions on CO2 Emissions in Sub-Saharan Africa", year: "2024", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uiJ5BM4AAAAJ&citation_for_view=uiJ5BM4AAAAJ:zYLM7Y9cAGgC" },
      { title: "Efficiency of Blockchain Technology on Financial Security: Beyond Online Transaction", year: "2024", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uiJ5BM4AAAAJ&citation_for_view=uiJ5BM4AAAAJ:IjCSPb-OGe4C" },
      { title: "Unveiling Fintech's Frontier: The Power of Embedded Finance and FinSaaS", year: "2024", link: "https://www.researchgate.net/publication/386144935_Unveiling_Fintech's_Frontier_The_Power_of_Embedded_Finance_and_FinSaaS" },
    ],
  },
  {
    label: "Press",
    items: [
      { title: "NSF I-Corps Hub Mid-Atlantic Region", year: "2024", link: "https://www.mtech.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event" },
      { title: "EducatorsTalk Podcast", year: "2023", link: "https://podcasters.spotify.com/pod/show/educatorstalk/episodes/Academic-Excellence-is-for-you-NOT-geniuses-e1vvjr6" },
      { title: "Johns Hopkins Technology Ventures", year: "2023" },
      { title: "Harvard iLab / AWS NextGen", year: "2023", link: "https://innovationlabs.harvard.edu/about/news/25-black-led-startups-selected-for-inaugural-nextgen-accelerator-program/" },
      { title: "Johns Hopkins Hopstart", year: "2023", link: "https://engineering.jhu.edu/cle/hopstart/" },
      { title: "Technically Baltimore", year: "2022" },
      { title: "WeSolv Case Winner", year: "2022", link: "https://medium.com/wesolv/meet-the-winners-of-wesolvs-latest-case-challenge-7b3c0f02bfa0" },
      { title: "HBCUvc Fellowship", year: "2021", link: "https://blog.hbcu.vc/hbcuvc-welcomes-its-fifth-and-largest-class-of-venture-capital-fellows-5cade19616ff" },
      { title: "Honda Quiz Bowl", year: "2018", link: "https://themsuspokesman.com/6929/campus-news/morgan-state-in-the-honda-campus-all-star-challenge/" },
      { title: "Honda Quiz Bowl", year: "2017", link: "https://themsuspokesman.com/6929/campus-news/morgan-state-in-the-honda-campus-all-star-challenge/" },
      { title: "Morgan Means Business", year: "2017", link: "https://www.morgan.edu/news/student-entrepreneurs-show-why-morgan-means-business" },
    ],
  },
  {
    label: "Venture Capital",
    items: [
      { title: "Venture Institute — Training for emerging VC associates", year: "2025" },
      { title: "VC Partners — 6-month fellowship for fund associates and managers", year: "2024" },
      { title: "Oregon Sport Angels — Portfolio monitoring for 31 companies", year: "2023 – 2024" },
      { title: "Mikal Ventures — Venture Capital", year: "2023" },
      { title: "GenZScout — Global VC program with 250+ members", year: "2023" },
      { title: "SupplyChange Capital — Due diligence analyst", year: "2022" },
      { title: "MotivateVC — Due diligence and investment teasers", year: "2022" },
      { title: "HBCUvc — VC Fellowship, Cohort 5", year: "2021 – Present", link: "https://blog.hbcu.vc/hbcuvc-welcomes-its-fifth-and-largest-class-of-venture-capital-fellows-5cade19616ff?gi=bb1fbf6275ab" },
    ],
  },
  {
    label: "Consulting",
    items: [
      { title: "The Butterfly Effect", year: "2024" },
      { title: "Lights Back On", year: "2024" },
      { title: "Brightly", year: "2023" },
      { title: "Johns Hopkins Hospital", year: "2022" },
      { title: "Dynata", year: "2022" },
    ],
  },
  {
    label: "Mentorship",
    items: [
      { title: "Johns Hopkins University — Super Mentor", year: "2025" },
      { title: "Morgan State University", year: "2020 – 2026" },
      { title: "Coppin State University", year: "2024 – 2026" },
      { title: "iMentor", year: "2025 –" },
      { title: "DECA", year: "2025" },
      { title: "Technovation", year: "2025 –" },
      { title: "Trubel", year: "2025" },
      { title: "TMCF", year: "2017" },
      { title: "Maryland Science Olympiad", year: "2016" },
    ],
  },
  {
    label: "Volunteer",
    items: [
      { title: "BisonHacks", year: "2025" },
      { title: "SproutHacks", year: "2025" },
      { title: "DECA Evaluator", year: "2025" },
    ],
  },
  {
    label: "Teaching",
    items: [
      { title: "Morgan State University | Econ 211 — Principles of Macroeconomics", year: "2024 – Present" },
      { title: "Morgan State University | Econ 310 — Economic Activity in the Black Community", year: "2024" },
      { title: "Morgan State University | Econ 323 — Economics of Developing Nations", year: "2025" },
      { title: "Morgan State University | Econ 325 — Labor Economics", year: "2026" },
      { title: "Johns Hopkins University | Professional Presentation", year: "2022" },
      { title: "Johns Hopkins University | Professional Writing and Communication for Engineering Students", year: "2023" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Product leadership content
// ---------------------------------------------------------------------------

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: "7,600+",
    label: "Households impacted",
    detail: "Environmental justice data systems across 153 cities",
  },
  {
    value: "15+",
    label: "Agencies served",
    detail: "Centralized performance platform for city-wide reporting",
  },
  {
    value: "50% → 75%",
    label: "Service completion rate",
    detail: "311 SLA redesign and cross-agency accountability",
  },
  {
    value: "30% / 40%",
    label: "Reporting effort down, engagement up",
    detail: "CitiStat Performance Hub adoption",
  },
  {
    value: "6+ years",
    label: "Across product, data, and engineering",
    detail: "Morgan Stanley, Oracle, City of Baltimore, and independent products",
  },
];

export interface LeadershipPrinciple {
  title: string;
  description: string;
}

export const howIWork: LeadershipPrinciple[] = [
  {
    title: "Frame the problem",
    description:
      "Start with the decision a user or organization is trying to make, not the feature request. Define the problem precisely enough that the wrong solutions become obvious.",
  },
  {
    title: "Build product conviction",
    description:
      "Use data, user evidence, and system constraints to form a defensible point of view — then write it down so the team can argue with it and improve it.",
  },
  {
    title: "Align and lead",
    description:
      "Bring engineering, analytics, and non-technical stakeholders to a shared narrative. In government and enterprise contexts, alignment is the real bottleneck, not code.",
  },
  {
    title: "Ship and learn",
    description:
      "Release the smallest useful version, instrument it, and let adoption and outcome metrics decide what comes next. Standardize what works so it scales.",
  },
];

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceRole[] = [
  {
    company: "City of Baltimore",
    role: "Data Product Analyst — Office of Performance & Innovation",
    period: "2023 – Present",
    highlights: [
      "Owned data products supporting policy decisions across 153 cities and 7,600+ households",
      "Launched the CitiStat performance hub used by 15+ agencies, cutting reporting effort by 30%",
      "Led 311 SLA redesign that lifted service completion rates from under 50% to 75%",
    ],
  },
  {
    company: "Morgan State University",
    role: "Instructor & Data Analyst",
    period: "2020 – Present",
    highlights: [
      "Teach economics courses while building geospatial dashboards for urban research",
      "Translate research data into interactive tools for non-technical stakeholders",
    ],
  },
  {
    company: "Oracle",
    role: "Product Management Intern",
    period: "2021",
    highlights: [
      "Shipped 5 SQL-driven KPI dashboards in APEX and Grafana for real-time operational visibility",
      "Prioritized the highest-leverage metrics over comprehensive coverage to drive adoption",
    ],
  },
  {
    company: "Morgan Stanley",
    role: "Technology Analyst Intern",
    period: "2019",
    highlights: [
      "Built a full-stack server health monitoring platform used for compliance across 3 departments",
      "Delivered executive reporting for Wealth Management leadership",
    ],
  },
  {
    company: "Johns Hopkins Hospital",
    role: "Consultant / Instructor",
    period: "2022 – 2023",
    highlights: [
      "Advised on operational analytics and process improvement",
      "Taught professional communication for engineering students",
    ],
  },
  {
    company: "VMware · Oasis Inc.",
    role: "Analyst & Operations",
    period: "Earlier",
    highlights: [
      "Early experience across enterprise technology and operations that shaped a systems-first approach to product",
    ],
  },
];
