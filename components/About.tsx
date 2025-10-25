import { CheckCircle, Users, Award, Target } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Users,
      number: '150+',
      label: 'Happy Clients',
      description: 'From startups to top sports brands'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Awards & Prizes',
      description: 'Recognition in sports marketing industry'
    },
    {
      icon: Target,
      number: '300%',
      label: 'Average ROI Growth',
      description: 'Measurable results for our clients'
    }
  ]

  const values = [
    'Innovative marketing approaches',
    'Data and analytics-based decisions',
    'Transparency and honesty in work',
    'Long-term partnership relationships'
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-primary-600 font-semibold text-lg">About Team</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-display">
                Experts in Sports <span className="gradient-text">Marketing</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a team of professionals with years of experience in sports marketing.
              Our expertise covers all aspects of promoting sports brands,
              from strategic planning to implementing creative campaigns.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand the specifics of the sports industry and know how to create
              effective marketing solutions that will lead to growth
              in brand awareness and increased revenue.
            </p>

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Principles:</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Stats and Visual */}
          <div>
            {/* Achievement Cards */}
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Photo Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Our Expert Team</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

