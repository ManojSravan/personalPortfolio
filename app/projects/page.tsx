import Link from "next/link";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2">
          A collection of my work and side projects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer  rounded-lg   bg-card"
          >
            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">
              {project.description}
            </p>
            <div className="flex gap-4 mt-4">
              
              {project.link ? (
                <Link href={project.link}>Visit Project</Link>
              ) : project.caseStudy ? (
                <Link
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Case Study
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
