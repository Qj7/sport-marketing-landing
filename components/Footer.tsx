import { Mail, Phone, MapPin } from 'lucide-react'
// Social icons replaced with Lineicons

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Strategic Planning',
    'Performance Marketing',
    'Community Management',
    'PR & Media',
    'Ambassadors & Influencers',
    'Branding & Creative',
  ]

  const socialLinks = [
    { iconClass: 'lni lni-facebook-filled', href: '#', label: 'Facebook' },
    { iconClass: 'lni lni-twitter-filled', href: '#', label: 'Twitter' },
    { iconClass: 'lni lni-instagram-filled', href: '#', label: 'Instagram' },
    { iconClass: 'lni lni-linkedin-original', href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="text-2xl font-bold gradient-text font-display mb-4">
                  SportPro
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Professional marketing solutions for sports brands,
                  teams and athletes. Brand awareness growth and revenue increase.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <i className={`${social.iconClass} text-lg group-hover:scale-110 transition-transform`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:hello@sportpro.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    hello@sportpro.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    New York, Sports Avenue, 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SportPro Marketing. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

