import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 lg:left-1/2">
        <Image
          src="https://www.pngall.com/wp-content/uploads/13/Spiderman-Logo-PNG-Cutout.png"
          alt="Spiderman Logo"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-left py-16">
            {/* Spacer */}
            <div className="mb-16"></div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-display">
              Boost Your
              <span className="gradient-text block">Sports Brand</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-xl leading-relaxed">
              We create powerful marketing strategies for sports teams,
              brands and athletes. Brand awareness growth and revenue increase.
            </p>

            {/* Single CTA Button */}
            <div className="mb-16">
              <button className="btn-outline text-lg px-10 py-4 group">
                <i className="lni lni-play mr-2 text-lg group-hover:scale-110 transition-transform"></i>
                View Cases
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</div>
                <div className="text-gray-600 font-medium">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5 Years</div>
                <div className="text-gray-600 font-medium">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image will be background */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}

