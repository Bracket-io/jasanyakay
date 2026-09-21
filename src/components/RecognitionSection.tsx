import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Newspaper,
  Users,
} from "lucide-react";

const recognition = [
  {
    organization: "DECA Inc.",
    title: "SBE Evaluator",
    year: "2025",
  },
  {
    organization: "Venture Institute",
    title: "Venture Fellow",
    year: "2024",
  },
  {
    organization: "Johns Hopkins University",
    title: "HopStart Pitch Competition",
    year: "2023",
    distinction: "Winner",
  },
  {
    organization: "Blackstone",
    title: "LaunchPad",
    year: "2023",
    distinction: "Winner",
  },
  {
    organization: "WeSolv",
    title: "Case Competition",
    year: "2022",
    distinction: "Winner",
  },
  {
    organization: "HBCUvc",
    title: "VC Fellowship, Cohort 5",
    year: "2021",
  },
  {
    organization: "Stanford University",
    title: "University Innovation Fellow",
    year: "2017",
  },
];

const stats = [
  {
    number: "14",
    label: "Certifications",
    icon: GraduationCap,
  },
  {
    number: "12",
    label: "Papers",
    icon: BookOpen,
  },
  {
    number: "11",
    label: "Recognition",
    icon: Award,
  },
  {
    number: "8",
    label: "VC engagements",
    icon: BriefcaseBusiness,
  },
  {
    number: "9",
    label: "Mentorship",
    icon: Users,
  },
  {
    number: "11",
    label: "Press features",
    icon: Newspaper,
  },
];

export const RecognitionSection = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Recognition
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The work around the work.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-7 text-muted-foreground">
            A selection of recognition, research, teaching, and professional
            work accumulated across product, technology, education, and
            venture.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-y border-border">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="px-4 py-5 sm:px-5 sm:py-6 border-b sm:border-b-0 border-r border-border last:border-r-0"
              >
                <Icon className="w-4 h-4 text-muted-foreground mb-3" />

                <p className="text-2xl font-semibold tracking-tight">
                  {stat.number}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Recognition */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Selected
              </p>

              <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">
                Recognition
              </h3>
            </div>

            <a
              href="/recognition"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              View all
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {recognition.map((item) => (
              <div
                key={`${item.organization}-${item.title}`}
                className="py-4 sm:py-5 grid grid-cols-[1fr_auto] gap-4"
              >
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {item.organization}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <p className="text-sm sm:text-base font-medium">
                      {item.title}
                    </p>

                    {item.distinction && (
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.12em] font-semibold">
                        {item.distinction}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-xs text-muted-foreground pt-0.5">
                  {item.year}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile link */}
          <a
            href="/recognition"
            className="mt-5 flex sm:hidden items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium"
          >
            View full recognition
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom categories */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {[
            ["Research", "12 papers"],
            ["Teaching", "6 courses"],
            ["Venture", "8 engagements"],
            ["Mentorship", "9 organizations"],
          ].map(([title, count]) => (
            <div key={title} className="bg-background p-5 sm:p-6">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
