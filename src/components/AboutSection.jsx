export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Heading and Story */}
          <div className="about-main">
            <div className="section-kicker">ABOUT THE FESTIVAL</div>
            <h2 className="section-title">
              A Living Celebration of <br />
              <span className="gradient-text">Youth, Art & Passion</span>
            </h2>
            <p className="about-text">
              Milan is the signature annual cultural festival of SRM Institute of Science and
              Technology. Founded on the spirit of self-expression, Milan serves as an expansive
              stage where young minds break conventional boundaries through music, choreography,
              theatre, and cutting-edge design.
            </p>
            <p className="about-text">
              Every edition brings together college students across diverse disciplines to collaborate,
              compete, and celebrate the shared human language of cultural performance.
            </p>
          </div>

          {/* Right Column: Three Pillars (no fake statistics or sponsors) */}
          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-content">
                <h3 className="pillar-title">Pure Performance</h3>
                <p className="pillar-desc">
                  From high-octane dance battles to acoustic serenades, Milan spotlights raw artistic
                  mastery under stage spotlights.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">✦</div>
              <div className="pillar-content">
                <h3 className="pillar-title">Boundless Creativity</h3>
                <p className="pillar-desc">
                  Providing an open canvas for theatrical narratives, visionary runway couture, and
                  hybrid tech-art expressions.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">⌘</div>
              <div className="pillar-content">
                <h3 className="pillar-title">Student Talent</h3>
                <p className="pillar-desc">
                  Driven entirely by the energy, vision, and collaborative spirit of the student
                  community at SRMIST.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
