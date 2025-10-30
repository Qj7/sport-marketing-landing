import { CheckCircle, Users, Award, Target } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: Users,
      title: 'We love sports. 💙',
      text:
        'In all its forms, disciplines, and expressions. We understand and share the dedication you put into your journey.'
    },
    {
      icon: Award,
      title: 'We’ve got the skills. ⚙️',
      text:
        'Not just sports skills — we also know how to design, code, and create engaging content.'
    },
    {
      icon: Target,
      title: 'You can count on us. 💪',
      text:
        'We’re down-to-earth and reliable. We reply to messages quickly and clearly, and we always keep our promises.'
    }
  ]

  const values = [
    'Honesty — we help, not push or sell.',
    'Human Approach — easy to reach, easy to work with.',
    'Tailored Experience — what fits you, not one-size-fits-all.',
    'Pay for Results — we love money, but good Karma comes first.'
  ]

  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="text-sky-400 font-semibold text-lg">Why Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">
                Experts in Sports <span className="gradient-text">Marketing</span>
              </h2>
            </div>

            {/* Introductory text removed as requested */}

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Our principles</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                    <span className="text-slate-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/48600608152"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group"
            >
              <i className="lni lni-whatsapp text-lg"></i>
              <span className="inline group-hover:hidden">Contact Us</span>
              <span className="hidden group-hover:inline">10 minutes answer</span>
            </a>
          </div>

          {/* Stats and Visual */}
          <div>
            {/* Achievement Cards */}
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-2xl p-6 ring-1 ring-slate-800 hover:ring-slate-700 transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-slate-300 text-sm leading-relaxed">
                        {achievement.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team photo block removed as requested */}
          </div>
        </div>
      </div>
    </section>
  )
}

