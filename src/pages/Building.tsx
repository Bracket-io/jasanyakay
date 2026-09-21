import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { buildingProjects } from "@/data/buildingProjects";

const Building = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <section className="max-w-[900px] mx-auto px-5 sm:px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Building
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Things I’m building.
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
              Products, experiments, and tools I’m currently working on.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {buildingProjects.map((project, index) => {
              const card = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-sm font-semibold">
                        {project.icon}
                      </div>

                      <div>
                        <p className="font-semibold tracking-tight">
                          {project.name}
                        </p>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </div>

                    {project.url ? (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </div>

                  <p className="mt-7 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-medium tracking-[0.14em] text-muted-foreground">
                      {project.status}
                    </span>

                    {project.url && (
                      <span className="flex items-center gap-1.5 text-xs font-medium">
                        Open
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                </>
              );

              if (project.url) {
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group min-h-[210px] rounded-2xl border border-border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-muted/30 hover:shadow-sm active:scale-[0.99]"
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div
                  key={project.name}
                  className="min-h-[210px] rounded-2xl border border-border p-5 sm:p-6 opacity-75"
                >
                  {card}
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12">
            <p className="text-xs sm:text-sm text-muted-foreground">
              More experiments coming soon.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Building;