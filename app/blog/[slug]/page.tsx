import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '@/components/Section';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const posts: Record<string, BlogPost> = {
  'launching-cityexperience-ai': {
    slug: 'launching-cityexperience-ai',
    title: 'Launching CityExperience.AI',
    date: '2025-01-15',
    summary: 'Introducing CityExperience.AI - our vision for democratizing urban intelligence through AI.',
    content: `
      <p>We're excited to announce the launch of CityExperience.AI, a platform dedicated to making urban intelligence accessible to everyone.</p>
      
      <p>Our mission is simple yet ambitious: "Let everyone understand, experience, and design cities with AI." Cities are complex systems that shape our daily lives, yet understanding them requires expertise across multiple domains. We believe that AI can bridge this gap.</p>
      
      <p>CityExperience.AI combines cutting-edge geospatial reasoning, urban analytics, and conversational intelligence to create tools that help planners, researchers, and citizens make better decisions about urban environments.</p>
      
      <p>This is just the beginning. We're building the infrastructure for a more intelligent, equitable, and accessible urban future.</p>
    `,
  },
  'what-is-urbanrag': {
    slug: 'what-is-urbanrag',
    title: 'What is UrbanRAG?',
    date: '2025-01-10',
    summary: 'Exploring the concept of Geospatial RAG and how UrbanRAG enables intelligent reasoning over urban spatial data.',
    content: `
      <p>UrbanRAG is our geospatial retrieval-augmented generation engine, designed specifically for urban data.</p>
      
      <p>Traditional RAG systems work well with text, but cities are inherently spatial. UrbanRAG extends RAG principles to handle geospatial data, including maps, satellite imagery, POI data, and spatial relationships.</p>
      
      <p>Key capabilities include:</p>
      <ul>
        <li>Vector-based indexing of geospatial features</li>
        <li>Multi-modal data integration</li>
        <li>Context-aware spatial reasoning</li>
        <li>Natural language query interface</li>
      </ul>
      
      <p>This enables users to ask complex questions about cities in natural language and receive accurate, spatially-aware responses.</p>
    `,
  },
  'from-research-to-infrastructure': {
    slug: 'from-research-to-infrastructure',
    title: 'From Urban Comfort Research to Urban AI Infrastructure',
    date: '2025-01-05',
    summary: 'The journey from academic research to building applied AI infrastructure for cities.',
    content: `
      <p>CityExperience.AI has its roots in academic research on urban comfort, spatial vulnerability indices (SVI), GeoAI, and urban cognition.</p>
      
      <p>Through years of research at institutions like NUS, UCL, and UPenn, we've developed deep expertise in understanding how people experience cities. However, we realized that much of this knowledge remained locked in academic papers and specialized tools.</p>
      
      <p>Our goal is to bridge the gap between academic research and applied AI infrastructure. We're taking insights from urban comfort research, spatial analysis, and cognitive mapping, and building them into accessible, scalable AI tools.</p>
      
      <p>This infrastructure approach allows us to serve not just researchers, but planners, policymakers, developers, and citizens who need urban intelligence in their daily work and lives.</p>
    `,
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

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

