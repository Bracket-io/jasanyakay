import { useState } from "react";
import { BuildCollection } from "@/components/BuildCollection";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { AxiomFeature } from "@/components/AxiomFeature";
import { WorkCard } from "@/components/WorkCard";

const categories = [
  "All",
  "Church Tech",
  ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
];

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const axiomVisible = active === "All" || active === "Church Tech";
  const visibleCount = filtered.length + (axiomVisible ? 1 : 0);

  return (
    <Layout>
      <header className="page-intro"><p className="eyebrow">The selected portfolio</p><h1>A body of work.<br /><em>A way of thinking.</em></h1><p>From financial decisions to city services: the problems I chose, the trade-offs I made, and what happened next.</p></header>

      <div className="work-page-sections"><a href="#case-studies">Selected projects <span>05</span></a><a href="#more-builds">More builds <span>06</span></a></div>
      <section id="case-studies" aria-labelledby="case-studies-heading">
      <h2 id="case-studies-heading" className="eyebrow mb-7">Selected projects & case studies</h2>
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat!)}
            aria-pressed={active === cat}
            className={`text-xs px-3 py-1.5 border transition-colors ${
              active === cat
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-5" role="status">{visibleCount} {visibleCount === 1 ? "project" : "projects"}{active !== "All" ? ` · ${active}` : ""}</p>
      <h2 className="sr-only">Project case studies</h2>
      {axiomVisible && <div className="mb-14"><AxiomFeature /></div>}
      <div className="project-grid">
        {filtered.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}
      </div>


      </section>
      <BuildCollection />
    </Layout>
  );
};

export default Work;
