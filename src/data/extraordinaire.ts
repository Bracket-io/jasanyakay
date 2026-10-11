export const evidenceCategories = [
  { id: "awards", title: "Awards", description: "Prizes and recognition for work that stood out.", prompt: "Add the award announcement, selection process, scope, and your winning work." },
  { id: "original-contributions", title: "Original Contributions", description: "Ideas, research, and products with a documented impact.", prompt: "Describe what you created, what was original, who used it, and the impact you can document." },
  { id: "critical-role", title: "Critical Role", description: "Responsibilities and outcomes in organisations and teams.", prompt: "Describe your responsibilities, why your role mattered, and specific outcomes with supporting references." },
  { id: "judging", title: "Judging", description: "Evaluating the work of peers, teams, or competitors.", prompt: "Add the invitation, evaluation criteria, and confirmation of completed judging." },
  { id: "high-salary", title: "High Salary", description: "Compensation and relevant comparisons.", prompt: "Summarise the role, period, currency, and comparison source. Keep compensation documents in private storage." },
  { id: "memberships", title: "Memberships", description: "Professional communities and selective associations.", prompt: "Add membership dates, admission requirements, and evidence of how members are selected." },
  { id: "articles", title: "Articles", description: "Authored research, publications, and writing.", prompt: "Add authorship, publication status, venue, date, and a manuscript or published link." },
  { id: "media", title: "Media", description: "Coverage, interviews, and mentions of your work.", prompt: "Add the coverage link, publication, author, date, and the passage discussing your work." },
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

export const evidenceEntries: EvidenceEntry[] = [
  notionEntry("awards", "aws-nextgen", "AWS NextGen", 80, undefined),
  notionEntry("awards", "keybank", "KeyBank", 95, "2ed694b87d358015adaeccb3c42a70e3"),
  notionEntry("awards", "nbmbaa", "NBMBAA", 95, "2ed694b87d35809d9c1fe4de0408d216"),
  notionEntry("awards", "wesolv", "WeSolv", 95, "2ed694b87d3580a2a876c66e35d09af7"),
  notionEntry("awards", "techsgiving", "Techsgiving", 95, "2ed694b87d35804cb7acf141fecec17f"),
  notionEntry("awards", "hopstart", "Hopstart", 95, "2f2694b87d35805ca02cc4f7bf43b73a"),
  notionEntry("awards", "blackstone-launchpad", "Blackstone Launchpad", 80, "2ed694b87d3580cdb5ecf05ef219870e"),
  notionEntry("original-contributions", "baltimore-contribution", "City of Baltimore", 40, "2ed694b87d3580ef91a6cfe5a2d9f94b"),
  notionEntry("original-contributions", "bracket", "Bracket", 60, "2ed694b87d35806ab8aaf26607c67786"),
  notionEntry("original-contributions", "dart-opinion", "Dart — Expert Opinion", 80, "2f1694b87d3580e0a4a2dc17c49c71cb", "Expert opinion"),
  notionEntry("original-contributions", "leo-opinion", "Leo — Expert Opinion", 85, "2f1694b87d3580ac9ebae2eba316b7d8", "Expert opinion"),
  notionEntry("original-contributions", "abbey", "Abbey", undefined, "2ed694b87d358092aba1dfbda8a9e693"),
  notionEntry("critical-role", "baltimore-role", "City of Baltimore", 40, "2fd694b87d358038bf58ec5715301aa6"),
  notionEntry("critical-role", "helium-role", "Helium Health", 50, "2ef694b87d358066a709e6551e30f539"),
  notionEntry("critical-role", "noramay-opinion", "Noramay — Expert Opinion", 80, "2f2694b87d358002b56bddb1eef8941b", "Expert opinion"),
  notionEntry("judging", "business-intelligence-group", "Business Intelligence Group", undefined, "3f2694b87d35800b9007f10f151abbc3"),
  notionEntry("judging", "hbcu-lab", "HBCUvc Lab Fund", 95, "2ed694b87d3580afa7dcffb5ec20954f"),
  notionEntry("judging", "vthacks", "MLH — VTHacks", 100, "2ed694b87d3580978402eebb9011a2b3"),
  notionEntry("judging", "bisonhacks", "MLH — BisonHacks", 60, "2ed694b87d35806991a4e53ca0785195"),
  notionEntry("judging", "sprouthacks", "MLH — SproutHacks", 50, "2ed694b87d35805cae1ef8c53dbda04a"),
  notionEntry("judging", "rsis", "RSIS", 80, "2ed694b87d3580fda7b7ea117bec30e9"),
  notionEntry("judging", "jim-opinion", "Jim — Expert Opinion", 80, "2f1694b87d35809b8747d6f3e9c9d6f3", "Expert opinion"),
  notionEntry("judging", "hadiyah-opinion", "Hadiyah — Expert Opinion", 80, "2f1694b87d3580349399cdb65b6cddea", "Expert opinion"),
  notionEntry("memberships", "nsf-icorps", "NSF I-Corps", 95, "2ed694b87d358043a0a5d0375601a646"),
  notionEntry("memberships", "hbcuvc", "HBCUvc", 95, "2ed694b87d35805aac7fdd1261f74938"),
  notionEntry("memberships", "uif", "UIF", 95, "2ed694b87d3580a18a5fe7807e27b3de"),
  notionEntry("memberships", "leticia-opinion", "Leticia — Expert Opinion", 80, "2f1694b87d35805d995ac934fffc401d", "Expert opinion"),
  notionEntry("memberships", "jainaba-opinion", "Jainaba — Expert Opinion", 80, "2f1694b87d35800f82fcd816b5bd55d7", "Expert opinion"),
  notionEntry("high-salary", "helium-salary", "Helium Health", 80, "2ed694b87d3580abbae3d2770ba9e621"),
  notionEntry("high-salary", "lauren-opinion", "Lauren — Expert Opinion", 80, "2f1694b87d3580ecb7b0e53279380769", "Expert opinion"),
  notionEntry("articles", "elsevier", "Elsevier Journal", 100, "2ed694b87d3580798eefc1ecf2800d59"),
  notionEntry("articles", "blockchain", "Blockchain Journal", 100, "2ed694b87d3580f98d40c765a1e07ff6"),
  notionEntry("articles", "esg", "ESG Article", undefined, "2fd694b87d35802a893bc860c052a7b9"),
  notionEntry("articles", "ssrn", "SSRN Paper", 100, "2ed694b87d3580c99a9de31caa9abee8"),
  notionEntry("articles", "linda-opinion", "Linda — Expert Opinion", 80, "2f1694b87d3580559be5da99224500e6", "Expert opinion"),
  notionEntry("media", "nsf-host", "NSF Host", 100, "2ed694b87d3580f0a5c0d1b22fb89da8"),
  notionEntry("media", "technically", "Technically", 100, "2f2694b87d35802092a3ff471bdfc9c4"),
];

export const recommenderResources = [
  {"label": "Relationship to Recommenders", "url": "https://app.notion.com/p/305694b87d358001af50dff95e7e15a2?pvs=21"},
  {"label": "Leticia Cavagnaro", "url": "https://app.notion.com/p/2f1694b87d35800ca203d7073e07ff14?pvs=21"},
  {"label": "Jainaba Ceesay", "url": "https://app.notion.com/p/2f1694b87d3580df8310ed20910780bf?pvs=21"},
  {"label": "Jim Chi", "url": "https://app.notion.com/p/2ee694b87d358028a7a9d768fdc9dbf0?pvs=21"},
  {"label": "Hadiyah Mujhid", "url": "https://app.notion.com/p/2ee694b87d3580adad2ce0d1a0b7a215?pvs=21"},
  {"label": "Linda Loubert", "url": "https://app.notion.com/p/2ee694b87d35804c98b3cb1d1da6180d?pvs=21"},
  {"label": "Lauren DeLuca", "url": "https://app.notion.com/p/2ee694b87d358031a7ccee2bab5cd6c1?pvs=21"},
  {"label": "Dart Williams", "url": "https://app.notion.com/p/2ee694b87d358036936cf43c619f2305?pvs=21"},
  {"label": "Leo Guystan", "url": "https://app.notion.com/p/2ee694b87d3580ef9c83e228f1845f7e?pvs=21"},
  {"label": "Ayodeji Olubusi", "url": "https://app.notion.com/p/2ee694b87d35801fb6dadac117c84583?pvs=21"},
  {"label": "Noramay Cadena", "url": "https://app.notion.com/p/2ee694b87d358098a1e1c37d7153e0c6?pvs=21"},
];

export const notionArchiveUrl = "https://app.notion.com/p/2ed694b87d3580788d90fbec4c1a48a7?v=2ed694b87d3580769805000c3a4d7c1c&source=copy_link";
