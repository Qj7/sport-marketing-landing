'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
// Send icon replaced with Lineicons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here will be form submission logic
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hryhorii@sportvisible.media',
      link: 'mailto:hryhorii@sportvisible.media'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+48 600 608 152',
      link: 'https://wa.me/48600608152'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Warsaw, Aleje Jerozolimskie 1',
      link: 'https://maps.google.com'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Let's Start <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to boost your sports brand? Contact us to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Us
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We are always ready to discuss your project and offer the optimal solution.
                We will respond within 24 hours to any questions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors group ring-1 ring-slate-800"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-violet-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{info.title}</div>
                    <div className="text-slate-300">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-slate-900 rounded-xl p-6 ring-1 ring-slate-800">
              <h4 className="font-bold text-white mb-4">Working Hours</h4>
              <div className="space-y-2 text-slate-300">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 3:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-200 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-200 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 group"
              >
                Send Request
                <i className="lni lni-send ml-2 text-lg group-hover:translate-x-1 transition-transform"></i>
              </button>

              <p className="text-sm text-slate-400 text-center">
                By clicking the button, you agree to the privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

