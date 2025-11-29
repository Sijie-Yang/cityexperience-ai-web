import Section from '@/components/Section';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About
          </h1>
          <p className="text-xl text-gray-600">
            Research-driven urban intelligence infrastructure
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Story Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                CityExperience.AI emerged from years of research at the intersection of urban studies, 
                geospatial science, and artificial intelligence. Our work began with fundamental questions 
                about how people experience cities—questions about comfort, accessibility, safety, and 
                spatial equity.
              </p>
              <p>
                Through research on urban comfort, spatial vulnerability indices (SVI), GeoAI, and urban 
                cognition, we developed deep expertise in understanding the complex systems that shape 
                urban life. However, we recognized that much of this knowledge remained inaccessible, 
                locked in academic papers and specialized tools that required significant expertise to use.
              </p>
              <p>
                CityExperience.AI is our answer: we're building the infrastructure to bridge academic 
                research and applied AI, making sophisticated urban intelligence accessible to planners, 
                researchers, policymakers, and citizens worldwide.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Founder
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sijie Yang (Peter Young)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sijie Yang brings a unique interdisciplinary background spanning architecture, space syntax, 
                computer science, and urban analytics. With research experience at leading institutions including 
                the National University of Singapore (NUS), University College London (UCL), and the University 
                of Pennsylvania (UPenn), Sijie has focused on understanding how people perceive, navigate, 
                and experience urban environments.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This background informs CityExperience.AI's approach: combining rigorous research methods 
                with practical AI infrastructure to solve real urban challenges.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Long-Term Vision
            </h2>
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-200">
              <p className="text-xl text-gray-900 font-medium leading-relaxed">
                "Building an Urban Intelligence Operating System for cities worldwide."
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We envision CityExperience.AI as the foundational infrastructure that enables anyone—from 
                city planners to researchers to citizens—to understand, analyze, and improve urban environments. 
                Just as operating systems provide the foundation for computing, we aim to provide the 
                infrastructure layer for urban intelligence, enabling a new generation of applications and 
                services that make cities more livable, equitable, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

