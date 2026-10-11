export const evidenceCategories = [
  { id: "awards", title: "Awards", description: "Prizes and recognition for work that stood out.", prompt: "Add the award announcement, selection process, scope, and your winning work." },
  { id: "original-contributions", title: "Original Contributions", description: "Ideas, research, and products with a documented impact.", prompt: "Describe what you created, what was original, who used it, and the impact you can document." },
  { id: "critical-role", title: "Critical Role", description: "Responsibilities and outcomes in organisations and teams.", prompt: "Describe your responsibilities, why your role mattered, and specific outcomes with supporting references." },
  { id: "judging", title: "Judging", description: "Evaluating the work of peers, teams, or competitors.", prompt: "Add the invitation, evaluation criteria, and confirmation of completed judging." },
  { id: "memberships", title: "Membership", description: "Professional communities and selective associations.", prompt: "Add membership dates, admission requirements, and evidence of how members are selected." },
  { id: "articles", title: "Articles", description: "Authored research, publications, and writing.", prompt: "Add authorship, publication status, venue, date, and a manuscript or published link." },
  { id: "media", title: "Media", description: "Coverage, interviews, and mentions of your work.", prompt: "Add the coverage link, publication, author, date, and the passage discussing your work." },
  { id: "high-salary", title: "High Salary", description: "Compensation and relevant comparisons.", prompt: "Summarise the role, period, currency, and comparison source. Keep compensation documents in private storage." },
] as const;

export type EvidenceCategory = typeof evidenceCategories[number]["id"];
export interface EvidenceEntry {
  id: string;
  category: EvidenceCategory;
  title: string;
  organization?: string;
  year?: string;
  summary?: string;
  impact?: string;
  status: "Needs elaboration" | "Collecting evidence" | "Documented";
  documents: { label: string; url: string }[];
  nextStep?: string;
  progress?: number;
  kind?: "Achievement" | "Expert opinion";
  narrative?: string;
  artifactNeeded?: string;
  sourceNote?: string;
  sections?: { title: string; body: string }[];
}

// Progress values are transcribed from the supplied Notion labels, not verified readiness.
// Category assignments follow the pasted grouping and can be adjusted here.
const notionEntry = (
  category: EvidenceCategory, id: string, title: string, progress?: number,
  notionId?: string, kind: EvidenceEntry["kind"] = "Achievement",
): EvidenceEntry => ({
  id, category, title, progress, kind, status: "Needs elaboration",
  documents: notionId ? [{ label: "Notion source", url: `https://app.notion.com/p/${notionId}?pvs=21` }] : [],
});

const selectedEntries: EvidenceEntry[] = [
  notionEntry("awards", "aws-nextgen", "AWS NextGen", 80, undefined),
  notionEntry("awards", "keybank", "KeyBank", 95, "2ed694b87d358015adaeccb3c42a70e3"),
  notionEntry("awards", "nbmbaa", "NBMBAA", 95, "2ed694b87d35809d9c1fe4de0408d216"),
  notionEntry("awards", "wesolv", "WeSolv", 95, "2ed694b87d3580a2a876c66e35d09af7"),
  notionEntry("awards", "hopstart", "Hopstart", 95, "2f2694b87d35805ca02cc4f7bf43b73a"),
  notionEntry("original-contributions", "baltimore-contribution", "City of Baltimore", 40, "2ed694b87d3580ef91a6cfe5a2d9f94b"),
  notionEntry("original-contributions", "bracket", "Bracket", 60, "2ed694b87d35806ab8aaf26607c67786"),
  notionEntry("critical-role", "baltimore-role", "City of Baltimore", 40, "2fd694b87d358038bf58ec5715301aa6"),
  notionEntry("judging", "business-intelligence-group", "Business Intelligence Group", undefined, "3f2694b87d35800b9007f10f151abbc3"),
  notionEntry("judging", "hbcu-lab", "HBCUvc Lab Fund", 95, "2ed694b87d3580afa7dcffb5ec20954f"),
  notionEntry("judging", "vthacks", "MLH — VTHacks", 100, "2ed694b87d3580978402eebb9011a2b3"),
  notionEntry("judging", "bisonhacks", "MLH — BisonHacks", 60, "2ed694b87d35806991a4e53ca0785195"),
  notionEntry("judging", "sprouthacks", "MLH — SproutHacks", 50, "2ed694b87d35805cae1ef8c53dbda04a"),
  notionEntry("memberships", "nsf-icorps", "NSF I-Corps", 95, "2ed694b87d358043a0a5d0375601a646"),
  notionEntry("memberships", "hbcuvc", "HBCUvc", 95, "2ed694b87d35805aac7fdd1261f74938"),
  notionEntry("memberships", "uif", "UIF", 95, "2ed694b87d3580a18a5fe7807e27b3de"),
  notionEntry("articles", "elsevier", "Elsevier Journal", 100, "2ed694b87d3580798eefc1ecf2800d59"),
  notionEntry("articles", "blockchain", "Blockchain Journal", 100, "2ed694b87d3580f98d40c765a1e07ff6"),
  notionEntry("articles", "esg", "ESG Article", undefined, "2fd694b87d35802a893bc860c052a7b9"),
  notionEntry("articles", "ssrn", "SSRN Paper", 100, "2ed694b87d3580c99a9de31caa9abee8"),
  notionEntry("media", "nsf-host", "NSF Host", 100, "2ed694b87d3580f0a5c0d1b22fb89da8"),
  notionEntry("media", "technically", "Technically", 100, "2f2694b87d35802092a3ff471bdfc9c4"),
];

export const notionArchiveUrl = "https://app.notion.com/p/2ed694b87d3580788d90fbec4c1a48a7?v=2ed694b87d3580769805000c3a4d7c1c&source=copy_link";

export const retiredEvidenceIds = ["techsgiving", "blackstone-launchpad", "dart-opinion", "leo-opinion", "abbey", "helium-role", "noramay-opinion", "rsis", "jim-opinion", "hadiyah-opinion", "leticia-opinion", "jainaba-opinion", "helium-salary", "lauren-opinion", "linda-opinion"];

export const archiveNarrative = {
  title: "Turning evidence into better decisions.",
  summary: "My work connects product development, public-sector analytics, and entrepreneurship. I build tools that help people act on information, translate complex data into operational decisions, and contribute to communities developing the next generation of ventures.",
  chapters: [
    { title: "Build", body: "From Bracket’s financial decision tools to Baltimore’s civic analytics, the through-line is making information useful in practice." },
    { title: "Deliver", body: "The record connects hands-on product discovery with responsibility for workflows, reporting, and coordination across organisations." },
    { title: "Contribute", body: "Competition results, fellowships, judging, research, and public coverage add context to the work and show how it reaches beyond individual projects." },
  ],
};

const entryDetails: Record<string, Partial<EvidenceEntry>> = {
  "aws-nextgen": {
    "summary": "My existing résumé records a 2023 Harvard/AWS NextGen fellowship. Harvard’s announcement lists Abbey VC among the 25 ventures selected for the inaugural accelerator.",
    "narrative": "Connects venture building with external selection and founder development. The public announcement establishes venture selection; my acceptance record should establish my participation.",
    "artifactNeeded": "Personal acceptance letter or certificate linking me to Abbey VC and the 2023 cohort.",
    "sourceNote": "Harvard announcement and existing résumé; the announcement names the venture rather than me.",
    "year": "2023",
    "organization": "Harvard Innovation Labs / AWS",
    "documents": [
      {
        "label": "Key artifact · Harvard cohort announcement",
        "url": "https://innovationlabs.harvard.edu/about/news/25-black-led-startups-selected-for-inaugural-nextgen-accelerator-program/"
      },
      {
        "label": "Context · My résumé",
        "url": "https://www.kayjasanya.com/resume"
      }
    ]
  },
  "keybank": {
    "summary": "My earlier portfolio records fourth place in the 2022 KeyBank Case Competition. This entry captures competitive business analysis and presentation experience.",
    "narrative": "Adds a specific competition result to the record of analytical problem-solving.",
    "artifactNeeded": "Official results naming the team, plus the case presentation and my role.",
    "sourceNote": "Result recorded in my earlier portfolio; organiser confirmation still needed.",
    "year": "2022",
    "documents": [
      {
        "label": "Context · Earlier portfolio",
        "url": "https://jasanyakay.netlify.app/"
      }
    ]
  },
  "nbmbaa": {
    "summary": "My earlier portfolio records finalist status in a 2022 NBMBAA MBA pitch competition. The final presentation and result will provide the detail behind this recognition.",
    "narrative": "Connects entrepreneurial ideas with external evaluation in a competitive setting.",
    "artifactNeeded": "Finalist announcement, competition name, team roster, and pitch deck.",
    "sourceNote": "Finalist status recorded in my earlier portfolio; organiser confirmation still needed.",
    "year": "2022",
    "documents": [
      {
        "label": "Context · Earlier portfolio",
        "url": "https://jasanyakay.netlify.app/"
      }
    ]
  },
  "wesolv": {
    "summary": "Katie Jang and I won WeSolv’s 2022 Marketing and Communications Strategy Case Challenge. We researched the target audience and presented practical recommendations for engaging users.",
    "narrative": "Shows the application of research and product thinking to a real business problem, with an organiser-published result.",
    "artifactNeeded": "Winning presentation and a short account of my individual contribution.",
    "sourceNote": "WeSolv’s announcement names both teammates, describes the challenge, and records a $1,000 team prize.",
    "year": "2022",
    "organization": "WeSolv",
    "documents": [
      {
        "label": "Key artifact · WeSolv winner announcement",
        "url": "https://medium.com/wesolv/meet-the-winners-of-wesolvs-latest-case-challenge-7b3c0f02bfa0"
      }
    ]
  },
  "hopstart": {
    "summary": "I was a member of Dwell, the team named as the 2023 HopStart General Ventures II winner. The venture proposed a platform connecting renters and landlords for medium-term housing.",
    "narrative": "Links product development to an externally judged venture outcome, with a university record naming me on the team.",
    "artifactNeeded": "Pitch deck, award record, and an explanation of my individual role.",
    "sourceNote": "Johns Hopkins’ published results identify Dwell and name me among its team members.",
    "year": "2023",
    "organization": "Johns Hopkins University",
    "documents": [
      {
        "label": "Key artifact · Johns Hopkins results",
        "url": "https://hub.jhu.edu/2023/05/16/hopstart-new-venture-challenge/"
      }
    ]
  },
  "baltimore-contribution": {
    "summary": "At the City of Baltimore, I used service data and analytics to help frame operational responses to illegal dumping and improve reporting. My résumé records analysis of more than 41,000 service records.",
    "narrative": "The contribution story is how analysis became a usable decision process: the method, the tool, and the decisions it informed.",
    "artifactNeeded": "Dated analytical report or dashboard, methodology, and evidence of adoption.",
    "sourceNote": "Based on my existing résumé; underlying reports and independent outcome evidence are still needed.",
    "year": "2024–2025",
    "organization": "City of Baltimore",
    "impact": "The résumé describes interventions projected to reduce incidents by 25%. This is a projection, not a demonstrated reduction; supporting reports should distinguish forecasts from observed results.",
    "documents": [
      {
        "label": "Context · My résumé",
        "url": "https://www.kayjasanya.com/resume"
      }
    ]
  },
  "bracket": {
    "summary": "I founded Bracket to help young people turn fragmented financial information into practical decisions. The project case study records interviews with 20+ students, rapid prototyping, and more than 100 early users.",
    "narrative": "Shows a complete product-development sequence: identify a decision problem, research it, build a focused experience, and learn from real use.",
    "artifactNeeded": "Product walkthrough, dated discovery notes, and anonymised usage and retention evidence.",
    "sourceNote": "Based on my existing product case study; usage figures are self-reported.",
    "year": "2025",
    "impact": "Early uptake established interest, while churn highlighted retention problems. The strongest account includes both the initial adoption and what the usage data changed about the product.",
    "documents": [
      {
        "label": "Work sample · Bracket case study",
        "url": "https://www.kayjasanya.com/project/bracket"
      }
    ]
  },
  "baltimore-role": {
    "summary": "As a Data Product Manager at the City of Baltimore, I worked across analytics, service workflows, reporting, and implementation. My résumé describes reporting used across 15+ agencies and coordination across operational and executive teams.",
    "narrative": "The role story focuses on responsibility: what I owned, who relied on it, and how my decisions affected delivery. It complements the separate account of my analytical contribution.",
    "artifactNeeded": "Employer letter defining my responsibilities, organisation chart, and independently supported delivery outcomes.",
    "sourceNote": "Based on my existing résumé; employer confirmation is still needed.",
    "year": "2024–2025",
    "organization": "City of Baltimore",
    "documents": [
      {
        "label": "Context · My résumé",
        "url": "https://www.kayjasanya.com/resume"
      }
    ]
  },
  "business-intelligence-group": {
    "summary": "My archive lists Business Intelligence Group under judging. This record will bring together the appointment, the work evaluated, and confirmation of completed reviews.",
    "narrative": "Adds the evaluator perspective to my experience as a builder: how I assess ideas and provide reasoned feedback.",
    "artifactNeeded": "Invitation or appointment, dated judging rubric, and organiser confirmation of completed evaluations.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "hbcu-lab": {
    "summary": "My archive lists HBCUvc Lab Fund under judging. This record will bring together the appointment, the work evaluated, and confirmation of completed reviews.",
    "narrative": "Adds the evaluator perspective to my experience as a builder: how I assess ideas and provide reasoned feedback.",
    "artifactNeeded": "Invitation or appointment, dated judging rubric, and organiser confirmation of completed evaluations.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "vthacks": {
    "summary": "My archive lists MLH — VTHacks under judging. This record will bring together the appointment, the work evaluated, and confirmation of completed reviews.",
    "narrative": "Adds the evaluator perspective to my experience as a builder: how I assess ideas and provide reasoned feedback.",
    "artifactNeeded": "Invitation or appointment, dated judging rubric, and organiser confirmation of completed evaluations.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "bisonhacks": {
    "summary": "My archive lists MLH — BisonHacks under judging. This record will bring together the appointment, the work evaluated, and confirmation of completed reviews.",
    "narrative": "Adds the evaluator perspective to my experience as a builder: how I assess ideas and provide reasoned feedback.",
    "artifactNeeded": "Invitation or appointment, dated judging rubric, and organiser confirmation of completed evaluations.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "sprouthacks": {
    "summary": "My archive lists MLH — SproutHacks under judging. This record will bring together the appointment, the work evaluated, and confirmation of completed reviews.",
    "narrative": "Adds the evaluator perspective to my experience as a builder: how I assess ideas and provide reasoned feedback.",
    "artifactNeeded": "Invitation or appointment, dated judging rubric, and organiser confirmation of completed evaluations.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "nsf-icorps": {
    "summary": "I participated in regional I-Corps and I-Corps Next in 2023. The University of Maryland’s account of the 2024 Black Founders event identifies that participation and my role as event emcee.",
    "narrative": "Connects founder experience with structured customer discovery and engagement in the innovation community.",
    "artifactNeeded": "Programme completion record and examples of customer discovery work.",
    "sourceNote": "University of Maryland event report confirms the programme participation and emcee role.",
    "year": "2023",
    "documents": [
      {
        "label": "Key artifact · University of Maryland report",
        "url": "https://mtechpartnerships.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event"
      }
    ]
  },
  "hbcuvc": {
    "summary": "I joined HBCUvc’s fifth fellowship cohort in 2021. The organisation’s announcement names me in its alumni professional-development track.",
    "narrative": "Connects my product and founder experience with venture evaluation and a sustained interest in expanding access to entrepreneurship.",
    "artifactNeeded": "Acceptance record, selection criteria, and a concise account of fellowship activities.",
    "sourceNote": "HBCUvc’s published cohort announcement names me.",
    "year": "2021",
    "documents": [
      {
        "label": "Key artifact · HBCUvc cohort announcement",
        "url": "https://blog.hbcu.vc/hbcuvc-welcomes-its-fifth-and-largest-class-of-venture-capital-fellows-5cade19616ff"
      }
    ]
  },
  "uif": {
    "summary": "My résumé records participation in the 2017 University Innovation Fellows programme, representing Morgan State University. The university published an announcement about its selected students.",
    "narrative": "Provides an early chapter in a continuing interest in innovation, entrepreneurship, and institutional change.",
    "artifactNeeded": "Personal fellowship confirmation and examples of the initiatives I helped deliver.",
    "sourceNote": "Existing résumé and Morgan State’s programme announcement.",
    "year": "2017",
    "documents": [
      {
        "label": "Key artifact · Morgan State announcement",
        "url": "https://www.morgan.edu/news/four-morgan-state-students-named-as-university-innovation-fellows"
      }
    ]
  },
  "elsevier": {
    "summary": "An Elsevier journal entry in my research archive. The exact paper title, journal, authorship, and publication status still need to be linked before its contribution can be summarised accurately.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Exact title, author list, publication date and status, and DOI or manuscript link.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "blockchain": {
    "summary": "A blockchain research entry in my archive, connecting the research strand of my work with digital systems. The exact paper and my contribution still need to be confirmed.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Exact title, author list, publication date and status, and DOI or manuscript link.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "esg": {
    "summary": "An ESG writing entry in my archive. The article’s specific argument, publication venue, and relationship to my work will become clearer once the source is attached.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Exact title, author list, publication date and status, and DOI or manuscript link.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "ssrn": {
    "summary": "An SSRN paper entry in my archive. The manuscript will establish its research question, findings, and my contribution; the repository listing alone should not be treated as confirmation of journal publication.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Exact title, author list, publication date and status, and DOI or manuscript link.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "nsf-host": {
    "summary": "The University of Maryland reported on the February 2024 Black Founders in I-Corps event and identified me as its emcee. This is a public record of my involvement in the regional entrepreneurship community.",
    "narrative": "Shows public-facing contribution to the same founder ecosystem in which I developed my own ventures.",
    "artifactNeeded": "Event programme or recording showing my contribution alongside the published report.",
    "sourceNote": "University of Maryland’s event report names me and describes the event.",
    "year": "2024",
    "documents": [
      {
        "label": "Key artifact · Published event report",
        "url": "https://mtechpartnerships.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event"
      }
    ]
  },
  "technically": {
    "summary": "Technically’s report on Morgan State’s inaugural Bear Tank competition names me as a Scribe cofounder and describes the writing-support app. It records a $1,000 award supporting the venture.",
    "narrative": "Provides independent coverage connecting my founder role, the problem the product addressed, and external recognition.",
    "artifactNeeded": "The published article, plus product materials clarifying my contribution.",
    "sourceNote": "Technically’s original report names me, describes Scribe, and records the award.",
    "documents": [
      {
        "label": "Key artifact · Technically coverage",
        "url": "https://technical.ly/startups/morgan-state-inaugural-bear-tank/"
      }
    ]
  }
};

export const evidenceEntries: EvidenceEntry[] = selectedEntries.map(entry => {
  const details = entryDetails[entry.id];
  return {
    ...entry,
    ...details,
    documents: [...(details?.documents ?? []), ...entry.documents],
  };
});
