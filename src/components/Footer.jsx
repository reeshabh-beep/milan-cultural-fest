export default function Footer({ onRegisterClick }) {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="brand-logo" onClick={(e) => scrollTo(e, 'hero')}>
              <span className="logo-sparkle">✦</span>
              <span className="logo-text">MILAN</span>
              <span className="logo-badge">SRMIST</span>
            </a>
            <p className="footer-tagline">
              Where Culture Comes Alive. The annual collegiate cultural festival of SRM Institute
              of Science and Technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" onClick={(e) => scrollTo(e, 'hero')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => scrollTo(e, 'events')}>
                  Featured Events
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, 'about')}>
                  About Milan
                </a>
              </li>
              {onRegisterClick && (
                <li>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={onRegisterClick}
                  >
                    Event Registration
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Festival Context */}
          <div className="footer-info-group">
            <h4 className="footer-heading">Project Notice</h4>
            <p className="footer-note">
              Created for the <strong>SRM DSA Tech Team</strong> Frontend Recruitment Task. Event
              timings and locations are sample data for UI demonstration.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Milan Cultural Festival, SRMIST. Designed with passion.
          </p>
          <div className="footer-social-chips">
            <span className="footer-badge">DSA Tech Team Task</span>
            <span className="footer-badge">Track B • Frontend</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
