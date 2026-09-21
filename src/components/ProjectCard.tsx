import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      onClick={handleClick}
      className={`group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 ${
        project.liveUrl
          ? "cursor-pointer hover:-translate-y-1 hover:shadow-xl"
          : ""
      }`}
    >
      {project.image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">{project.name}</h2>

          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {project.status}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="mt-6 text-sm font-medium">
            Open project ↗
          </div>
        )}
      </div>
    </article>
  );
}