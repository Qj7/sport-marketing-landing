'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false)
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

  const navItems = [
    {
      name: 'What we do',
      href: '#what-we-do',
      submenu: [
        { name: 'Marketing Analytics & Promotion', href: '#marketing-analytics' },
        { name: 'Brand Design & Identics', href: '#brand-design' },
        { name: 'Landing Pages & Social Media touchpoints', href: '#landing-pages' },
        { name: 'Content Creation', href: '#content-creation' },
        { name: 'Digital Promotion', href: '#digital-promotion' },
        { name: 'Sales', href: '#sales' },
      ]
    },
    { name: 'For Athletes', href: '#for-athletes' },
    { name: 'For Clubs & Organisations', href: '#for-clubs' },
    { name: 'For Events Child Sport', href: '#for-events' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src={`${prefix}/images/logoblack.png`}
                  alt="SportPro Logo"
                  width={180}
                  height={48}
                  priority
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setIsWhatWeDoOpen(true)}
                onMouseLeave={() => item.submenu && setIsWhatWeDoOpen(false)}
              >
                {item.submenu ? (
                  <>
                    <button className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center gap-1">
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isWhatWeDoOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 bg-transparent z-50"
                        onMouseEnter={() => setIsWhatWeDoOpen(true)}
                        onMouseLeave={() => setIsWhatWeDoOpen(false)}
                      >
                        <div className="bg-white rounded-lg shadow-lg py-2 border">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 text-sm"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary">
              Start Project
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isWhatWeDoOpen && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button className="btn-primary w-full">
                  Start Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

