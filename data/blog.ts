export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

// All blog posts data
export const blogPosts: BlogPost[] = [
  {
    slug: 'city-atlas-global-comparison',
    title: 'City Atlas: Comparing Cities Across the Globe',
    date: '2025-01-20',
    summary: 'How City Atlas enables standardized comparison of urban indicators across global cities, helping researchers and planners understand urban patterns and make data-driven decisions.',
    content: `
      <p>One of the biggest challenges in urban research and planning is the lack of standardized data across cities. How do you compare walkability in Tokyo with walkability in New York? How can planners in Singapore learn from green space initiatives in Copenhagen?</p>
      
      <p>City Atlas solves this problem by providing a comprehensive platform for multi-city comparison with standardized indicators and metrics.</p>
      
      <h2>Standardized Urban Indicators</h2>
      
      <p>City Atlas collects and normalizes data across multiple dimensions:</p>
      <ul>
        <li><strong>Safety:</strong> Crime rates, lighting quality, pedestrian safety metrics</li>
        <li><strong>Walkability:</strong> Sidewalk coverage, pedestrian infrastructure, accessibility</li>
        <li><strong>Green Spaces:</strong> Park coverage, tree canopy, urban biodiversity</li>
        <li><strong>Accessibility:</strong> Public transit coverage, mobility options, universal design</li>
        <li><strong>Economic:</strong> Cost of living, job accessibility, economic opportunities</li>
      </ul>
      
      <h2>Interactive Comparison Tools</h2>
      
      <p>Our platform allows users to:</p>
      <ul>
        <li>Compare up to five cities side-by-side</li>
        <li>Visualize differences through interactive maps and charts</li>
        <li>Export data for research and analysis</li>
        <li>Track changes over time</li>
      </ul>
      
      <h2>Use Cases</h2>
      
      <p>City Atlas serves diverse users:</p>
      <ul>
        <li><strong>Urban Planners:</strong> Benchmark their city against global best practices</li>
        <li><strong>Researchers:</strong> Access standardized data for comparative studies</li>
        <li><strong>Policymakers:</strong> Identify areas for improvement and learn from successful cities</li>
        <li><strong>Real Estate:</strong> Understand urban quality of life indicators</li>
      </ul>
      
      <p>By making urban data comparable and accessible, City Atlas empowers evidence-based decision-making for better cities worldwide.</p>
      
      <p>Try exploring City Atlas and let us know what insights you discover!</p>
    `,
  },
  {
    slug: 'launching-cityexperience-ai',
    title: 'Launching CityExperience.AI',
    date: '2025-01-15',
    summary: 'Introducing CityExperience.AI - our vision for democratizing urban intelligence through AI. Learn about our mission to make cities more understandable, accessible, and equitable.',
    content: `
      <p>We&apos;re excited to announce the launch of CityExperience.AI, a platform dedicated to making urban intelligence accessible to everyone.</p>
      
      <p>Our mission is simple yet ambitious: &quot;Let everyone understand, experience, and design cities with AI.&quot; Cities are complex systems that shape our daily lives, yet understanding them requires expertise across multiple domains. We believe that AI can bridge this gap.</p>
      
      <p>CityExperience.AI combines cutting-edge geospatial reasoning, urban analytics, and conversational intelligence to create tools that help planners, researchers, and citizens make better decisions about urban environments.</p>
      
      <p>This is just the beginning. We&apos;re building the infrastructure for a more intelligent, equitable, and accessible urban future.</p>
    `,
  },
  {
    slug: 'what-is-urbanrag',
    title: 'What is UrbanRAG?',
    date: '2025-01-10',
    summary: 'Exploring the concept of Geospatial RAG (Retrieval-Augmented Generation) and how UrbanRAG enables intelligent reasoning over urban spatial data. A deep dive into our core technology.',
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
  {
    slug: 'from-research-to-infrastructure',
    title: 'From Urban Comfort Research to Urban AI Infrastructure',
    date: '2025-01-05',
    summary: 'The journey from academic research on urban comfort, spatial vulnerability, and GeoAI to building applied AI infrastructure for cities worldwide.',
    content: `
      <p>CityExperience.AI has its roots in academic research on urban comfort, spatial vulnerability indices (SVI), GeoAI, and urban cognition.</p>
      
      <p>Through years of research at institutions like NUS, UCL, and UPenn, we&apos;ve developed deep expertise in understanding how people experience cities. However, we realized that much of this knowledge remained locked in academic papers and specialized tools.</p>
      
      <p>Our goal is to bridge the gap between academic research and applied AI infrastructure. We&apos;re taking insights from urban comfort research, spatial analysis, and cognitive mapping, and building them into accessible, scalable AI tools.</p>
      
      <p>This infrastructure approach allows us to serve not just researchers, but planners, policymakers, developers, and citizens who need urban intelligence in their daily work and lives.</p>
    `,
  },
];

// Helper function to get all posts (for listing page)
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all slugs (for static generation)
export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

