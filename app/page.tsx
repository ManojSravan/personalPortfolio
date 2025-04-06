'use client';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { posts, projects } from '@/lib/content';
import { Meteors } from '@/components/magicui/meteors';
import FeaturedSection from '@/components/featuredSection';

export default function Home() {
  const featuredPosts = posts.filter(post => post.featured);
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <main>
     <div className="meteors flex justify-center">
     <Meteors number={100}/>
     </div>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Manoj Sravan</h1>
          <p className="text-lg text-muted-foreground mt-4">
            I'm a full-stack developer and a freelancer, I help businesses build their online presence and provide efficient solutions to start-ups to boost their workflow.
          </p>
        </div>
        <div className="flex justify-between items-center flex-col">
              <FeaturedSection />
          </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-1">
            {featuredProjects.map((project) => (
              <div key={project.id} className="p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-md cursor-pointer  bg-card">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Featured Writing</h2>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
              View all →
            </Link>
          </div>
          <div className="space-y-2">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="block p-3 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-md cursor-pointer  transition-colors"
              >
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/ManojSravan">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://linkedin.com/in/manojsravan">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="https://x.com/manojsravan19">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="mailto:workwithmanojsravan@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}