'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

  const navItems = [
    { name: 'What we do', href: '#what-we-do' },
    { name: 'For Athletes', href: '#for-athletes' },
    { name: 'For Clubs & Organisations', href: '#for-clubs' },
    { name: 'For Events', href: '#for-events' },
    { name: 'Junior Sport', href: '#junior-sport' },
    { name: 'Why Us', href: '#why-us' },
  ]

  return (
    <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src={`${prefix}/images/logoblack.png`}
                  alt="Sportvisible Logo"
                  width={180}
                  height={48}
                  priority
                  className="h-12 w-auto object-contain invert"
                />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA removed */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-950 border-t border-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-200 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

