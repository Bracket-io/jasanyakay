import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Work</h1>
      <p className="text-muted-foreground mb-12">
        Selected projects across product, data, and venture capital.
      </p>

      <div className="space-y-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/project/${project.slug}`}
            className="block group"
          >
            <h2 className="text-base font-bold group-hover:underline">
              {project.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-1">
              {project.subtitle}
            </p>
            <p className="text-sm text-muted-foreground">{project.year}</p>
            <span className="text-xs text-foreground group-hover:underline mt-1 inline-block">
              → View Project
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Work;
