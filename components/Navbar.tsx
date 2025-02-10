'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const basePath = process.env.NODE_ENV === 'production' ? '/personalweb' : '';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={`${basePath}/`} 
            className="flex items-center space-x-3 group"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              LeonG7
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href={`${basePath}/works`}>作品集</NavLink>
            <NavLink href={`${basePath}/blog`}>博客</NavLink>
            <button className="nav-button">
              联系我
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md shadow-lg">
          <MobileNavLink href={`${basePath}/works`}>作品集</MobileNavLink>
          <MobileNavLink href={`${basePath}/blog`}>博客</MobileNavLink>
          <button className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
            联系我
          </button>
        </div>
      </div>
    </nav>
  )
}

// 导航链接组件
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-primary transition-colors duration-300 
                 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
    >
      {children}
    </Link>
  )
}

// 移动端导航链接组件
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
    >
      {children}
    </Link>
  )
} 