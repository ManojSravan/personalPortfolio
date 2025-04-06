import { projects } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-lg text-muted-foreground mt-2">{project.description}</p>
      </header>

      <div className="flex gap-4">
        {project.link && (
          <Button asChild>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              View Source
            </Link>
          </Button>
        )}

        {project.caseStudy && (
          <Button variant="secondary" asChild>
            <Link href={project.caseStudy} target="_blank" rel="noopener noreferrer">
              Read Case Study
            </Link>
          </Button>
        )}

        <Button variant="outline" asChild>
          <Link href="/projects">All Projects</Link>
        </Button>
      </div>
    </article>
  );
}

// Required for static export builds
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
