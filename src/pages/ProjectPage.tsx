import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/work" className="text-sm underline mt-4 inline-block">
          ← Back to Work
        </Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link
        to="/work"
        className="text-xs text-muted-foreground hover:text-foreground hover:underline mb-10 inline-block"
      >
        ← Back to Work
      </Link>

      <h1 className="text-2xl font-bold tracking-tight mb-6">{project.title}</h1>

      {/* Metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-sm border-t border-b border-border py-6">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Role</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Scope</p>
          <p>{project.scope}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Timeline</p>
          <p>{project.timeline}</p>
        </div>
      </div>

      {/* Context */}
      <Section title="Context">
        <p>{project.context}</p>
      </Section>

      {/* Problem */}
      <Section title="Problem">
        <p>{project.problem}</p>
      </Section>

      {/* Role */}
      <Section title="Role">
        <p>{project.roleDescription}</p>
      </Section>

      {/* Approach */}
      <Section title="Approach">
        <ul className="space-y-1">
          {project.approach.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Solution */}
      <Section title="Solution">
        <ul className="space-y-1">
          {project.solution.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Outcome */}
      <Section title="Outcome">
        <ul className="space-y-1">
          {project.outcome.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
      {title}
    </h2>
    <div className="text-sm leading-relaxed">{children}</div>
  </section>
);

export default ProjectPage;
