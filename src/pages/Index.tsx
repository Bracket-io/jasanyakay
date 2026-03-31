import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { selectedWork } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      <section className="mb-24">
        <h1 className="text-3xl font-bold tracking-tight mb-1">KAY JASANYA</h1>
        <p className="text-muted-foreground mb-8">Data Product Manager</p>
        <p className="text-lg leading-relaxed mb-8 max-w-[600px]">
          Building products at the intersection of
          <br />
          data, behavior, and decision-making.
        </p>
        <div className="flex gap-6">
          <Link to="/work" className="text-sm underline hover:text-muted-foreground">
            View Work
          </Link>
          <Link to="/about" className="text-sm underline hover:text-muted-foreground">
            About Me
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Selected Work
        </h2>
        <div className="space-y-8">
          {selectedWork.map((project) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="block group"
            >
              <h3 className="text-base font-bold group-hover:underline">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.subtitle} — {project.year}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
