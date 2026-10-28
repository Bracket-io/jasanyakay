import type { Project } from "@/data/projects";
import { WorkCard } from "./WorkCard";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return <WorkCard project={project} index={index} />;
}
