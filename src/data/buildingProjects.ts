export type BuildingProject = {
  name: string;
  description?: string;
  status: "BUILDING" | "PROTOTYPE" | "EXPERIMENT" | "LIVE";
  url?: string;
  links?: { label: string; url: string }[];
  icon: string;
};

export const buildingProjects: BuildingProject[] = [
  {
    name: "Gradezy",
    description: "Assessment intelligence for education.",
    status: "BUILDING",
    url: "https://gradezy-website.vercel.app/",
    icon: "G",
  },
  {
    name: "Ede",
    description: "African NLP experimentation and language tools.",
    status: "EXPERIMENT",
    url: "https://huggingface.co/spaces/jaskay/ede-african-nlp",
    icon: "E",
  },
  {
    name: "Staff Advantage Extension",
    description: "Browser tooling for faster assessment workflows.",
    status: "BUILDING",
    url: "https://microsoftedge.microsoft.com/addons/detail/staffadvantage-grade-fill/iocfhndobdbbiemehcnpfnippohngocn",
    icon: "S",
  },
  {
    name: "CareerFill",
    description: "Tools for making the career application process easier.",
    status: "LIVE",
    links: [
      {
        label: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/careerfill/epjobojmofeagcflodnhnhmbggmjegpd",
      },
      {
        label: "Microsoft Edge Add-ons",
        url: "https://microsoftedge.microsoft.com/addons/detail/careerfill/dcohagjpgmcijgakkkeocggjdookebcg",
      },
    ],
    icon: "C",
  },
  {
    name: "Paperly",
    status: "BUILDING",
    url: "https://paperly-peach.vercel.app/",
    icon: "P",
  },
  {
    name: "VenStudio",
    status: "BUILDING",
    url: "https://venstudio-mu.vercel.app/",
    icon: "V",
  },
  {
    name: "Voyager",
    description: "A new product experiment in progress.",
    status: "PROTOTYPE",
    icon: "V",
  },
  {
    name: "Vigil",
    description:
      "A civic reporting system for getting issues from people to the right place.",
    status: "PROTOTYPE",
    icon: "V",
  },
];
