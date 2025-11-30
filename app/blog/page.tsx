import Link from 'next/link';
import Section from '@/components/Section';
import { getAllPosts } from '@/data/blog';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Insights on urban intelligence, GeoAI, and city technology
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <time className="text-sm text-gray-500">{formatDate(post.date)}</time>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.summary}</p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

