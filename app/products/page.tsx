import Section from '@/components/Section';

interface ProductDetail {
  title: string;
  pitch: string;
  features: string[];
  users: string[];
}

const products: ProductDetail[] = [
  {
    title: 'UrbanRAG',
    pitch: 'Geospatial RAG Engine that enables intelligent retrieval and reasoning over urban spatial data.',
    features: [
      'Vector-based geospatial data indexing and retrieval',
      'Multi-modal urban data integration (maps, satellite imagery, POI data)',
      'Natural language query interface for urban questions',
      'Context-aware reasoning over spatial relationships',
      'Scalable architecture for large-scale urban datasets',
    ],
    users: [
      'Urban researchers and academics',
      'City planning departments',
      'Geospatial data analysts',
      'Urban AI developers',
    ],
  },
  {
    title: 'City Atlas',
    pitch: 'Global City Comparison Platform with standardized indicators, interactive maps, and cross-city analytics.',
    features: [
      'Comprehensive city indicators database (safety, walkability, green space, etc.)',
      'Interactive multi-city comparison tools',
      'Standardized metrics across global cities',
      'Visual mapping and dashboard interfaces',
      'Export capabilities for research and planning',
    ],
    users: [
      'Urban planners and policymakers',
      'International development organizations',
      'Real estate and investment analysts',
      'Academic researchers',
    ],
  },
  {
    title: 'City Routes',
    pitch: 'Experience-based Routing System prioritizing comfort, green spaces, and safety over shortest distance.',
    features: [
      'Multi-criteria routing algorithms (comfort, green, safety)',
      'Real-time route optimization',
      'Accessibility-focused pathfinding',
      'Integration with mobility platforms',
      'Customizable routing preferences',
    ],
    users: [
      'Mobility and navigation companies',
      'Accessibility advocates',
      'Urban transportation planners',
      'End users seeking better routes',
    ],
  },
  {
    title: 'City GPT',
    pitch: 'City-focused AI Assistant providing conversational urban intelligence and city knowledge.',
    features: [
      'Natural language understanding of urban concepts',
      'Multi-city knowledge base',
      'Conversational interface for city questions',
      'Integration with UrbanRAG for accurate responses',
      'Support for planning, research, and citizen inquiries',
    ],
    users: [
      'Citizens and community groups',
      'Urban planning consultants',
      'Students and educators',
      'City information services',
    ],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Products
          </h1>
          <p className="text-xl text-gray-600">
            Building the infrastructure for urban intelligence
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto space-y-16">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
            >
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-8 h-full border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {product.pitch}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Intended Users
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.users.map((user, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center border border-gray-200">
                  <span className="text-gray-400 text-sm">Product Visualization</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

