import { useState, useEffect } from 'react'

export default function Navbar({ onRegisterClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  const scrollToSection = (e, id) => {
    e.preventDefault()
    closeMenu()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRegisterFromNav = () => {
    closeMenu()
    if (onRegisterClick) {
      onRegisterClick()
    }
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={(e) => scrollToSection(e, 'hero')}>
          <span className="logo-sparkle">✦</span>
          <span className="logo-text">MILAN</span>
          <span className="logo-badge">SRMIST</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a
            href="#hero"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'hero')}
          >
            Home
          </a>
          <a
            href="#events"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            Events
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a
            href="#events"
            className="btn btn-secondary nav-cta"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            Explore Events
          </a>

          {onRegisterClick && (
            <button
              type="button"
              className="btn btn-primary nav-reg-btn"
              onClick={handleRegisterFromNav}
            >
              Register
            </button>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          <a
            href="#hero"
            className="mobile-nav-link"
            onClick={(e) => scrollToSection(e, 'hero')}
          >
            Home
          </a>
          <a
            href="#events"
            className="mobile-nav-link"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            Events
          </a>
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
          <div className="mobile-drawer-actions">
            <a
              href="#events"
              className="btn btn-secondary mobile-cta"
              onClick={(e) => scrollToSection(e, 'events')}
            >
              Explore Events
            </a>
            {onRegisterClick && (
              <button
                type="button"
                className="btn btn-primary mobile-cta"
                onClick={handleRegisterFromNav}
              >
                Register Now
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
