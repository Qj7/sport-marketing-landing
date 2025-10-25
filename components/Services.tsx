import { Target, Users, TrendingUp, Megaphone, Zap, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'We develop comprehensive marketing strategies to achieve your goals.',
      features: ['Market Analysis', 'Target Audience', 'Positioning', 'KPI Metrics']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'We create and develop active communities around your brand.',
      features: ['SMM Strategy', 'Content Planning', 'Crisis Management', 'Opinion Leaders']
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'We maximize ROI through effective advertising campaigns.',
      features: ['Search Advertising', 'Display Advertising', 'Analytics', 'Optimization']
    },
    {
      icon: Megaphone,
      title: 'PR & Media',
      description: 'We increase brand awareness through quality PR.',
      features: ['Press Releases', 'Media Partnerships', 'Crisis PR', 'Events']
    },
    {
      icon: Zap,
      title: 'Ambassadors & Influencers',
      description: 'We work with famous athletes and influencers.',
      features: ['Ambassador Selection', 'Influencer Campaigns', 'Content Collaborations', 'Measurable Results']
    },
    {
      icon: Award,
      title: 'Branding & Creative',
      description: 'We create recognizable visual style and creative campaigns.',
      features: ['Logo & Branding', 'Creative Concepts', 'Video Production', 'Photo Production']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions for sports brands of any scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-secondary text-lg px-12 py-4">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

