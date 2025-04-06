// app/blog/[id]/page.tsx
import { posts } from '@/lib/content';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '../markdownRender';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      <time className="text-sm text-muted-foreground block mb-8">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}
