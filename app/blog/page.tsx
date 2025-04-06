import Link from 'next/link';
import { posts } from '@/lib/content';

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2">Thoughts on development, design, and more.</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link 
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer  bg-card hover:bg-accent/50 transition-colors"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
            <time className="text-sm text-muted-foreground mt-2 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}