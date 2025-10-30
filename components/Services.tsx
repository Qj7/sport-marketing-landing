import { Briefcase, Palette, Globe, Camera, Megaphone, DollarSign } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Marketing & Strategy',
      description: 'We create strategies that grow your brand, engage your community, and deliver results.',
      features: ['Brand Audit', 'Market Research', 'Channel Selection', 'Campaign Planning']
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'We build strong visual identities that make your sports brand stand out and stay memorable.',
      features: ['Logo & Identity Design', 'Brandbook & Guidelines', 'Visual Communication', 'Merch Design & Promo Kit']
    },
    {
      icon: Globe,
      title: 'Web & Social Media',
      description: 'We create and manage your brand\'s digital presence — from websites to social media — to grow and engage your sports community.',
      features: ['Website & Landing Page Development', 'UX/UI Design', 'Social Media Management & Analytics', 'Content Planning & Scheduling']
    },
    {
      icon: Camera,
      title: 'Content Production',
      description: 'We create engaging content that tells your story and drives community connection.',
      features: ['Photo & Video Production', 'Editing & Motion Design', 'Graphic Design & Infographics', 'Storytelling & Copywriting']
    },
    {
      icon: Megaphone,
      title: 'Digital Promotion',
      description: 'We boost your sports brand online through targeted campaigns and social media strategies that reach the right audience.',
      features: ['SEO & Content Promotion', 'Targeted Ads (Meta, TikTok, VK, Google)', 'Social Media Advertising']
    },
    {
      icon: DollarSign,
      title: 'Sales & Performance',
      description: 'We help your sports brand convert interest into sales and track what really works.',
      features: ['Lead Generation', 'Sales Funnel Optimization', 'CRM & Analytics', 'Performance Tracking']
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

