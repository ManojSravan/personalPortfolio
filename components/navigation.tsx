"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
    
    <nav className="flex gap-4">
      <Link 
        href="/" 
        className={cn(
          "text-sm transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Home
      </Link>
      <Link 
        href="/blog" 
        className={cn(
          "text-sm transition-colors hover:text-primary",
          pathname === "/blog" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Blog
      </Link>
      <Link 
        href="/projects" 
        className={cn(
          "text-sm transition-colors hover:text-primary",
          pathname === "/projects" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Projects
      </Link>
    </nav>
    </>
  );
}