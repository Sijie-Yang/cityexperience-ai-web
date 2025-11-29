import Link from 'next/link';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const products = [
    {
      title: 'UrbanRAG',
      description: 'Geospatial RAG Engine for intelligent urban data retrieval and reasoning.',
    },
    {
      title: 'City Atlas',
      description: 'Global City Comparison with multi-city indicators and interactive maps.',
    },
    {
      title: 'City Routes',
      description: 'Comfort, Green, and Safety-based routing for better urban navigation.',
    },
    {
      title: 'City GPT',
      description: 'City-focused AI assistant for conversational urban intelligence.',
    },
  ];

  const roadmap = {
    '2025': [
      'UrbanRAG MVP launch',
      'City Atlas beta release',
      'Research partnerships',
    ],
    '2026': [
      'City Routes integration',
      'City GPT public beta',
      'Multi-city expansion',
    ],
    '2027': [
      'Global platform launch',
      'Enterprise solutions',
      'Open API ecosystem',
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white geo-grid">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            CityExperience.AI
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">
            Urban Intelligence for Human Experience
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered platform for understanding, experiencing, and designing cities. 
            Combining geospatial reasoning, urban analytics, and conversational intelligence 
            to make cities more accessible and equitable.
          </p>
          <Link
            href="#"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Updates
          </Link>
        </div>
      </Section>

      {/* What is CityExperience.AI Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What is CityExperience.AI?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI Geospatial Reasoning</h3>
                  <p className="text-gray-600">
                    UrbanRAG engine enables intelligent retrieval and reasoning over geospatial urban data, 
                    making complex city information accessible through natural language.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multi-City Atlas</h3>
                  <p className="text-gray-600">
                    City Atlas provides comprehensive global city comparison with standardized indicators, 
                    interactive maps, and cross-city analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Experience-Based Routing</h3>
                  <p className="text-gray-600">
                    City Routes offers comfort, green, and safety-based routing algorithms that prioritize 
                    human experience over shortest distance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Conversational Urban Intelligence</h3>
                  <p className="text-gray-600">
                    City GPT serves as a city-focused AI assistant, answering questions about urban environments, 
                    planning, and city life through natural conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Products Section */}
      <Section className="bg-gray-50">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Core Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Why it Matters Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why it Matters
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Understanding Cities</h3>
              <p>
                Cities are complex systems that shape our daily lives, yet understanding them requires 
                expertise across multiple domains. CityExperience.AI democratizes urban knowledge, 
                making sophisticated urban analytics accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reducing Inequality</h3>
              <p>
                By prioritizing comfort, accessibility, and safety in routing and urban analysis, 
                we help identify and address spatial inequalities. Our tools support more equitable 
                urban planning and decision-making.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supporting Stakeholders</h3>
              <p>
                From urban planners and researchers to city governments, mobility companies, and citizens, 
                CityExperience.AI provides the infrastructure needed to make data-driven decisions 
                that improve urban quality of life.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Roadmap Preview Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Roadmap Preview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(roadmap).map(([year, milestones]) => (
              <div key={year} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">{year}</h3>
                <ul className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-700">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

