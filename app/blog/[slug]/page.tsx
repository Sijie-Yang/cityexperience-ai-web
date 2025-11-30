import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '@/components/Section';
import { getPostBySlug, getAllSlugs } from '@/data/blog';

// Generate static params for all blog posts
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug: slug,
  }));
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Section>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 mb-6 inline-block text-sm font-medium"
          >
            ← Back to Blog
          </Link>
          
          <article className="bg-white">
            <div className="mb-6">
              <time className="text-sm text-gray-500">{formatDate(post.date)}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul>li]:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </Section>
    </div>
  );
}

