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
  evidenceContext?: { text: string; label: string; url: string }[];
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
    "summary": "A coauthored study using Monte Carlo simulations to examine energy consumption and emissions scenarios in Sub-Saharan Africa. It evaluates efficiency and renewable-energy policies as modelling scenarios, rather than claiming observed policy outcomes.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Accepted manuscript, acceptance email, and author-contribution statement explaining my specific research role.",
    "sourceNote": "ORCID lists this work through both Scopus–Elsevier and Web of Science, with the same DOI. These are two source records for one publication. The publisher identifies Sustainable Futures, volume 10, article 100936.",
    "title": "Evaluating the impact of policy interventions on CO₂ emissions in Sub-Saharan Africa",
    "organization": "Sustainable Futures · Elsevier",
    "year": "2025",
    "documents": [
      {
        "label": "Publisher · Article and abstract",
        "url": "https://www.sciencedirect.com/science/article/pii/S2666188825005015"
      },
      {
        "label": "DOI · 10.1016/j.sftr.2025.100936",
        "url": "https://doi.org/10.1016/j.sftr.2025.100936"
      },
      {
        "label": "ORCID · Public research record",
        "url": "https://orcid.org/0009-0005-5732-799X"
      }
    ]
  },
  "blockchain": {
    "summary": "A coauthored paper exploring blockchain-based identity management and financial-data security. It proposes a prototype using distributed records and encryption to protect transactions and user information.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Acceptance correspondence, editorial-review record, and my author-contribution statement.",
    "sourceNote": "ORCID lists a journal article dated November 2, 2025. The NIPES article page names me among five authors and supplies a DOI and PDF. ORCID names the venue as a special-issue preprint platform; editorial status should be supported by the acceptance record.",
    "title": "Efficiency of Blockchain Technology on Financial Security: Beyond Online Transaction",
    "organization": "NIPES JSTR · Special issue",
    "year": "2025",
    "documents": [
      {
        "label": "Publisher · Article and author list",
        "url": "https://journals.nipes.org/index.php/jstrissue/article/view/2285"
      },
      {
        "label": "Manuscript · Publisher PDF",
        "url": "https://journals.nipes.org/index.php/jstrissue/article/download/2285/1408/5458"
      },
      {
        "label": "DOI · 10.37933/nipes/7.4.2025.SI159",
        "url": "https://doi.org/10.37933/nipes/7.4.2025.SI159"
      },
      {
        "label": "ORCID · Public research record",
        "url": "https://orcid.org/0009-0005-5732-799X"
      }
    ]
  },
  "esg": {
    "summary": "An ESG writing entry in my archive. The article’s specific argument, publication venue, and relationship to my work will become clearer once the source is attached.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Exact title, author list, publication date and status, and DOI or manuscript link.",
    "sourceNote": "User-provided archive entry; supporting Notion contents have not been reviewed."
  },
  "ssrn": {
    "summary": "A working-paper record on surveillance, community engagement, and illegal dumping in Baltimore. The title links the research record to my civic analytics work; the manuscript is needed to summarise the methods and findings accurately.",
    "narrative": "Provides space to explain what my research or writing contributes beyond the projects themselves.",
    "artifactNeeded": "Full manuscript, authorship details, version history, and any subsequent acceptance correspondence.",
    "sourceNote": "My public ORCID record lists this as a working paper dated January 14, 2026 and links SSRN abstract 6016134. The SSRN page could not be inspected, so manuscript contents and publication beyond the working-paper record are not verified.",
    "title": "Eyes on Baltimore: Leveraging Surveillance and Community Engagement to Reduce Illegal Dumping",
    "organization": "SSRN · Working paper",
    "year": "2026",
    "documents": [
      {
        "label": "Working paper · SSRN record",
        "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6016134"
      },
      {
        "label": "ORCID · Public research record",
        "url": "https://orcid.org/0009-0005-5732-799X"
      }
    ]
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

const evidenceResearch: Record<string, NonNullable<EvidenceEntry["evidenceContext"]>> = {
  "aws-nextgen": [
    {
      "text": "Harvard Innovation Labs and AWS selected 25 ventures for the inaugural 2023 accelerator. The programme included founder training, travel support, and AWS credits. Abbey VC is listed; personal admission evidence is needed to establish my role.",
      "label": "Harvard · 2023 cohort and programme",
      "url": "https://innovationlabs.harvard.edu/about/news/25-black-led-startups-selected-for-inaugural-nextgen-accelerator-program/"
    }
  ],
  "keybank": [
    {
      "text": "The 18th annual competition in 2022 brought together 25 graduate teams from across the US to address an ESG case. Ohio State’s Fisher College of Business administered the event with KeyBank. This report establishes the event’s scope, but does not name me or confirm fourth place.",
      "label": "Ohio State · 2022 competition report",
      "url": "https://fisher.osu.edu/news/a-continuing-commitment-diversity-equity-and-inclusion-programs"
    }
  ],
  "nbmbaa": [
    {
      "text": "The NBMBAA graduate case competition uses business cases presented to senior executives. My earlier record instead says MBA pitch competition: the invitation or result email must confirm the exact event before these programme details can be attributed to my participation.",
      "label": "NBMBAA · Case competition (event match pending)",
      "url": "https://nbmbaa.org/graduate-case-competition/"
    }
  ],
  "wesolv": [
    {
      "text": "Candidates from more than 20 universities entered the 2022 challenge. Experts evaluated recommendation decks using a scorecard and invited the top three teams to present. The organiser names Kay Jasanya and Katie Jang as the winning team and records a $1,000 team prize.",
      "label": "WeSolv · Evaluation process and named winners",
      "url": "https://medium.com/wesolv/meet-the-winners-of-wesolvs-latest-case-challenge-7b3c0f02bfa0"
    }
  ],
  "hopstart": [
    {
      "text": "The 2023 event involved 35 teams, business plans, industry mentorship, and two pitching rounds. Johns Hopkins names Dwell as the General Ventures II winner and lists me on the team. This establishes a team result; the deck and role statement should establish my contribution.",
      "label": "Johns Hopkins · 2023 competition results",
      "url": "https://hub.jhu.edu/2023/05/16/hopstart-new-venture-challenge/"
    }
  ],
  "business-intelligence-group": [
    {
      "text": "The organiser states that judging committees are assembled for relevant experience and expertise from its panel. This explains the selection approach, but my specific award, year, appointment, and completed reviews still require confirmation.",
      "label": "Business Intelligence Group · Judging philosophy",
      "url": "https://www.bintelligence.com/judges"
    }
  ],
  "hbcu-lab": [
    {
      "text": "HBCUvc describes the Lab Fund as practical investing experience for training participants and reports non-dilutive funding to 23 Black founders, supported by Google for Startups and the MacArthur Foundation. That establishes fund context, not my individual investment decisions.",
      "label": "HBCUvc · Lab Fund background",
      "url": "https://www.hbcu.vc/about"
    }
  ],
  "vthacks": [
    {
      "text": "The organiser’s current guide requires project submission and presentation to judges. The event site identifies VTHacks as Virginia Tech’s hackathon. These current pages provide programme context; the invitation must identify the edition and dates I judged.",
      "label": "VTHacks · Official judging and submission guide",
      "url": "https://vthacks.com/guide"
    }
  ],
  "bisonhacks": [
    {
      "text": "Howard University’s 2025 report describes a 24-hour team hackathon hosted by its Center for Digital Business. It provides contemporaneous institutional context. My invitation, rubric, and completion email should identify my judging work.",
      "label": "Howard University · 2025 event report",
      "url": "https://thedig.howard.edu/all-stories/bisonhacks-meccatech-2025-illustrate-howard-universitys-ingenuity"
    }
  ],
  "sprouthacks": [
    {
      "text": "The organiser’s website lists the February 28–March 2, 2025 event and welcomes participants across skill levels. A judge appointment and completed-review record are needed to establish my role; no acceptance rate or judge selectivity is asserted.",
      "label": "SproutHacks · Official event site",
      "url": "https://www.sprouthacks.ca/"
    }
  ],
  "nsf-icorps": [
    {
      "text": "NSF describes I-Corps as entrepreneurial training connecting research with commercialisation. My available evidence is for regional I-Corps and I-Corps Next, so national Teams awards or admission criteria should not be attributed to my participation.",
      "label": "NSF · Programme overview",
      "url": "https://www.nsf.gov/funding/initiatives/i-corps"
    },
    {
      "text": "The University of Maryland identifies me as a 2023 regional and I-Corps Next participant in its report on the 2024 Black Founders event. This is a named institutional record of participation.",
      "label": "University of Maryland · Named participation record",
      "url": "https://mtechpartnerships.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event"
    }
  ],
  "hbcuvc": [
    {
      "text": "HBCUvc’s 2021 announcement lists 62 fellows from 21 HBCUs and names me in the alumni professional-development track. It establishes cohort membership; the acceptance email and selection criteria can add detail about admission.",
      "label": "HBCUvc · 2021 cohort roster",
      "url": "https://blog.hbcu.vc/hbcuvc-welcomes-its-fifth-and-largest-class-of-venture-capital-fellows-5cade19616ff"
    }
  ],
  "uif": [
    {
      "text": "Morgan State names me among its four new fellows in 2017. The report places the cohort within 224 selected students from 58 institutions in seven countries and identifies Stanford’s d.school as the programme administrator. It does not provide an applicant denominator or acceptance rate.",
      "label": "Morgan State · Named selection and cohort scope",
      "url": "https://www.morgan.edu/news/four-morgan-state-students-named-as-university-innovation-fellows"
    }
  ],
  "nsf-host": [
    {
      "text": "The University of Maryland names me as emcee of the February 5, 2024 Black Founders in I-Corps event at Morgan State. The report identifies participating universities and regional innovation organisations. The programme or recording can show what I actually delivered as host.",
      "label": "University of Maryland · Event and host record",
      "url": "https://mtechpartnerships.umd.edu/news/nsf-i-corps-hub-mid-atlantic-region-partners-host-black-founders-in-i-corps-event"
    }
  ],
  "technically": [
    {
      "text": "The article names me, describes Scribe’s writing-support concept, and records a $1,000 Bear Tank award. It establishes published coverage of my venture and role. No audience reach or circulation figure is claimed without a separate publisher source.",
      "label": "Technically · Original coverage",
      "url": "https://technical.ly/startups/morgan-state-inaugural-bear-tank/"
    }
  ],
  "bracket": [
    {
      "text": "The existing case study describes interviews, product decisions, launch, and retention lessons. It is a first-person work sample rather than independent validation. Dated analytics, user feedback, and adoption records would substantiate its reported outcomes.",
      "label": "Portfolio · Product case study",
      "url": "https://www.kayjasanya.com/project/bracket"
    }
  ],
  "baltimore-contribution": [
    {
      "text": "The résumé provides a starting account of responsibilities and reported results. An employer-authored letter and dated work products should establish ownership, organisational reliance, and observed outcomes independently of this self-authored description.",
      "label": "Portfolio · Existing résumé",
      "url": "https://www.kayjasanya.com/resume"
    }
  ],
  "baltimore-role": [
    {
      "text": "The résumé provides a starting account of responsibilities and reported results. An employer-authored letter and dated work products should establish ownership, organisational reliance, and observed outcomes independently of this self-authored description.",
      "label": "Portfolio · Existing résumé",
      "url": "https://www.kayjasanya.com/resume"
    }
  ],
  "elsevier": [
    {
      "text": "The publisher identifies a 2025 article in Sustainable Futures, volume 10. Its abstract describes 10,000 simulations of emissions under different policy assumptions. This supports the research topic and published venue; it does not establish real-world implementation or my individual share of the work.",
      "label": "Elsevier · Published article",
      "url": "https://www.sciencedirect.com/science/article/pii/S2666188825005015"
    },
    {
      "text": "Scopus–Elsevier and Web of Science supplied ORCID records with the same DOI. They corroborate the bibliographic identity of one work, rather than two publications.",
      "label": "ORCID · Work records and source attribution",
      "url": "https://pub.orcid.org/v3.0/0009-0005-5732-799X/works"
    }
  ],
  "blockchain": [
    {
      "text": "The NIPES publisher page names Oluwakayode Jasanya as a coauthor, dates the article November 2, 2025, and identifies the Landmark University conference special issue. The DOI and linked full text are primary bibliographic artifacts; no impact factor or journal ranking is asserted.",
      "label": "NIPES · Publication record",
      "url": "https://journals.nipes.org/index.php/jstrissue/article/view/2285"
    }
  ],
  "ssrn": [
    {
      "text": "ORCID identifies a working paper and provides an SSRN link. The source is the record owner, not a publisher deposit. This supports identification of the work but is not proof of journal peer review or acceptance.",
      "label": "ORCID · Public work metadata",
      "url": "https://pub.orcid.org/v3.0/0009-0005-5732-799X/works"
    }
  ]
};

export const evidenceEntries: EvidenceEntry[] = [...selectedEntries.map(entry => {
  const details = entryDetails[entry.id];
  return {
    ...entry,
    ...details,
    evidenceContext: evidenceResearch[entry.id] ?? [],
    documents: [...(details?.documents ?? []), ...entry.documents],
  };
}), {
  "id": "prereview",
  "category": "judging",
  "title": "Peer review — PREreview",
  "organization": "PREreview",
  "year": "September–October 2025",
  "status": "Documented",
  "kind": "Achievement",
  "summary": "Eight completed structured open preprint reviews are recorded in ORCID, covering seven distinct paper titles in finance, technology adoption, AI, insurance, and sustainable entrepreneurship. Two dated review records concern the same behavioural-finance paper.",
  "sourceNote": "PREreview supplied these records to ORCID. The public review pages name Oluwakayode Jasanya and expose the completed assessments; each record has a Zenodo DOI. These are open preprint reviews, not claimed appointments as a journal referee.",
  "artifactNeeded": "Any invitation or review-request correspondence that explains how I was asked to review. The public records already document completed review activity.",
  "evidenceContext": [
    {
      "text": "ORCID records reviewer role, completion dates, PREreview as the convening organisation and deposit source, and eight distinct review DOIs. It documents activity completed from September 22 to October 17, 2025.",
      "label": "ORCID · Peer-review records",
      "url": "https://pub.orcid.org/v3.0/0009-0005-5732-799X/peer-reviews"
    },
    {
      "text": "The public structured reviews assess research objectives, methods, conclusions, presentation, and readiness for wider attention. These artifacts show the evaluation performed, while any claim about selection as a reviewer requires separate appointment evidence.",
      "label": "PREreview · Example completed assessment",
      "url": "https://prereview.org/reviews/17379656"
    }
  ],
  "documents": [
    {
      "label": "ORCID · Public record",
      "url": "https://orcid.org/0009-0005-5732-799X"
    },
    {
      "label": "2025-10-17 · A Comprehensive Survey of Cryptocurrency Forecasting: Methods, Trends, and Challenges",
      "url": "https://prereview.org/reviews/17379656"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17379656",
      "url": "https://doi.org/10.5281/zenodo.17379656"
    },
    {
      "label": "2025-10-17 · Key Actors in the Epistemic Community of the Unified Theory of Acceptance and Use of Technology and Their Impact on Sustainable Development Goals",
      "url": "https://prereview.org/reviews/17379729"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17379729",
      "url": "https://doi.org/10.5281/zenodo.17379729"
    },
    {
      "label": "2025-10-06 · Strengthening Consumer Protection Through Enhanced Risk Governance in Financial Services",
      "url": "https://prereview.org/reviews/17276320"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17276320",
      "url": "https://doi.org/10.5281/zenodo.17276320"
    },
    {
      "label": "2025-09-26 · Psychological Biases in Investment Decisions: A Behavioral Finance Approach",
      "url": "https://prereview.org/reviews/17205327"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17205327",
      "url": "https://doi.org/10.5281/zenodo.17205327"
    },
    {
      "label": "2025-09-26 · Preferences and Willingness of Farmers to Participate and Pay for Crop Insurance: Evidence from a Choice Experiment",
      "url": "https://prereview.org/reviews/17204688"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17204688",
      "url": "https://doi.org/10.5281/zenodo.17204688"
    },
    {
      "label": "2025-09-26 · Model for the Adoption of AI Tools in the Software Development Life Cycle: A Framework for Prompt Optimization in LLMs",
      "url": "https://prereview.org/reviews/17205376"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17205376",
      "url": "https://doi.org/10.5281/zenodo.17205376"
    },
    {
      "label": "2025-09-22 · Psychological Biases in Investment Decisions: A Behavioral Finance Approach",
      "url": "https://prereview.org/reviews/17180033"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17180033",
      "url": "https://doi.org/10.5281/zenodo.17180033"
    },
    {
      "label": "2025-09-22 · Sustainable Entrepreneurship in the Western Balkan Countries: Key Constraints",
      "url": "https://prereview.org/reviews/17180078"
    },
    {
      "label": "Review DOI · 10.5281/zenodo.17180078",
      "url": "https://doi.org/10.5281/zenodo.17180078"
    }
  ]
}];
