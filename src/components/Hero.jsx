export default function Hero({ onRegisterClick, onSelectCategory }) {
  const scrollToEvents = (e) => {
    if (e) e.preventDefault()
    const element = document.getElementById('events')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = (e) => {
    if (e) e.preventDefault()
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleChipClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category)
    }
    scrollToEvents()
  }

  const categories = [
    { name: 'Dance', symbol: '⚡' },
    { name: 'Music', symbol: '♬' },
    { name: 'Drama', symbol: '🎭' },
    { name: 'Fashion', symbol: '✦' },
    { name: 'Technical', symbol: '⌘' },
  ]

  return (
    <section id="hero" className="hero-section">
      {/* Decorative background glow accents */}
      <div className="hero-glow hero-glow-top" aria-hidden="true" />
      <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          {/* Eyebrow Label */}
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span className="badge-text">SRMIST PRESENTS</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Where Culture <br />
            <span className="gradient-text">Comes Alive.</span>
          </h1>

          {/* Short Description */}
          <p className="hero-description">
            Experience the pulse of collegiate expression at Milan — SRM Institute of Science
            and Technology&apos;s annual cultural festival. Uniting students across the nation to
            celebrate music, dance, theatre, fashion, and artistic innovation.
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#events" className="btn btn-primary" onClick={scrollToEvents}>
              <span>Explore Events</span>
              <svg
                className="btn-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a href="#about" className="btn btn-secondary" onClick={scrollToAbout}>
              About The Fest
            </a>

            {onRegisterClick && (
              <button
                type="button"
                className="btn btn-outline hero-reg-btn"
                onClick={onRegisterClick}
              >
                Quick Register
              </button>
            )}
          </div>

          {/* Category Filter Chips (Interactive: filters & scrolls to events) */}
          <div className="hero-chips" aria-label="Browse Artforms">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className="hero-chip"
                onClick={() => handleChipClick(cat.name)}
                title={`Explore ${cat.name} events`}
              >
                <span className="chip-symbol">{cat.symbol}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Visual Card Frame */}
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card-wrapper">
            <div className="visual-card">
              <div className="visual-card-inner">
                <div className="visual-art-pattern" />
                <div className="visual-overlay" />
                <div className="visual-badge">
                  <span className="visual-badge-dot"></span>
                  <span>SRM Cultural Festival</span>
                </div>
                <div className="visual-footer">
                  <div className="visual-logo-mark">MILAN</div>
                  <div className="visual-tagline">Creativity • Passion • Spotlight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
