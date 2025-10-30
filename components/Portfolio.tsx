// Icons replaced with Lineicons

export default function Portfolio() {
  const projects = [
    {
      title: 'Football Club "Dynamo"',
      category: 'Sports Club',
      description: 'Comprehensive rebranding and launch of new marketing strategy',
      image: '/api/placeholder/600/400',
      results: ['+150% online sales growth', '+80% subscriber increase', '+200% media activity'],
      link: '#'
    },
    {
      title: 'Sports Network "Athletics"',
      category: 'Retail Chain',
      description: 'Campaign launch to attract new audience and increase loyalty',
      image: '/api/placeholder/600/400',
      results: ['+120% sales growth', '+90% new customers', '+180% ROI'],
      link: '#'
    },
    {
      title: 'Sports Nutrition Manufacturer',
      category: 'Manufacturer',
      description: 'Positioning among professional athletes and sports enthusiasts',
      image: '/api/placeholder/600/400',
      results: ['+200% brand awareness', '+160% online sales', '+300% social media reach'],
      link: '#'
    },
    {
      title: 'Yoga Studio "Harmony"',
      category: 'Fitness Studio',
      description: 'Creating community ecosystem and growing client base',
      image: '/api/placeholder/600/400',
      results: ['+100% client growth', '+150% membership sales', '+250% engagement'],
      link: '#'
    },
    {
      title: 'Sports Tournament "Championship"',
      category: 'Events',
      description: 'Promotion of international tournament and sponsor attraction',
      image: '/api/placeholder/600/400',
      results: ['5M+ online views', '+50% ticket sales', '15 new sponsors'],
      link: '#'
    },
    {
      title: 'Fitness App "Train"',
      category: 'Technology',
      description: 'Mobile app launch and user base growth',
      image: '/api/placeholder/600/400',
      results: ['+300% installations', '+180% DAU', '+120% Retention'],
      link: '#'
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-slate-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Real results from our marketing campaigns for sports brands
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Sports Clubs', 'Manufacturers', 'Fitness', 'Events', 'Technology'].map((tag, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-slate-900 text-slate-300 ring-1 ring-slate-800 hover:ring-slate-700 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-slate-800 hover:ring-slate-700 transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800/90 text-slate-200 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-slate-700">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 p-2 rounded-full transition-colors group-hover:scale-110 flex items-center justify-center ring-1 ring-slate-700">
                    <i className="lni lni-external-link text-sm"></i>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full text-sky-400 font-semibold hover:text-sky-300 transition-colors flex items-center justify-center group">
                  Learn More
                  <i className="lni lni-arrow-right text-sm ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-secondary text-lg px-12 py-4">
            View All Cases
          </button>
        </div>
      </div>
    </section>
  )
}

