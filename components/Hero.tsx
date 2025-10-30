import Image from 'next/image'

export default function Hero() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 pt-16">
      {/* Background Image - Right Side */}
      <div className="absolute inset-x-0 top-16 bottom-0 lg:left-1/2 hidden md:block">
        <Image
          src={`${prefix}/images/football.png`}
          alt="Football"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[9fr_6fr] gap-8 items-start min-h-screen">
          {/* Left Content */}
          <div className="text-left pt-12 pb-16">

            {/* Main Headline */}
            <h1 className="relative z-20 overflow-visible text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.15] font-bold text-white mb-10 md:mb-14 font-display">
              Full-Stack Sports
              <span className="gradient-text relative block overflow-visible pb-2 md:pb-3">Marketing Agency</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-xl leading-relaxed mt-4">
              We build your sports brand through analytics, branding, and digital promotion.<br />
              We make your sports efforts visible and valuable
            </p>

            {/* Single CTA Button */}
            <div className="mb-16">
              <a
                href="https://wa.me/48600608152"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-4 rounded-full bg-transparent border-2 border-indigo-400 text-white text-lg px-10 py-4 transition-colors transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 hover:border-violet-400 hover:text-sky-200 active:scale-[0.98] group"
                aria-label="Contact Us – 10 minutes answer"
              >
                {/* Text wrapper: fixed left edge; real width animates to fit longer text */}
                <span className="relative inline-block h-6 leading-none overflow-hidden whitespace-nowrap align-middle transition-[width] duration-300 ease-out w-[11ch] group-hover:w-[17ch]">
                  {/* Sizing ghosts (invisible but occupy space) */}
                  <span className="invisible block">Contact Us</span>
                  <span className="invisible hidden group-hover:block">10 minutes answer</span>
                  {/* Crossfade overlays */}
                  <span className="absolute inset-0 flex items-center transition-opacity duration-150 ease-out opacity-100 group-hover:opacity-0">
                    Contact Us
                  </span>
                  <span className="absolute inset-0 flex items-center transition-opacity duration-150 ease-out opacity-0 group-hover:opacity-100">
                    10 minutes answer
                  </span>
                </span>
                {/* Icon capsule: arrow 45° by default → 0° on hover */}
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent ring-1 ring-indigo-400/40 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg
                    className="h-4 w-4 transform rotate-45 transition-transform duration-300 ease-out group-hover:rotate-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 6H18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1 Goal</div>
                <div className="text-slate-400 font-medium">Make your sports efforts visible</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3+ Years</div>
                <div className="text-slate-400 font-medium">In Illustration & Design</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">6+ Years</div>
                <div className="text-slate-400 font-medium">In Digital Marketing</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10 Years</div>
                <div className="text-slate-400 font-medium">In Web & Software Development</div>
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

