import "./styles.css"

// Icons Component
const Icon = ({ name }) => {
  const icons = {
    users: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" className="icon">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  }
  return icons[name] || null
}

const StatCard = ({ icon, number, label }) => (
  <div className="stat-card">
    <div className="stat-icon">
      <Icon name={icon} />
    </div>
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
)

const StudyPathCard = ({ title, subtitle, features, variant }) => (
  <div className={`study-path-card ${variant}`}>
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <span className="check-icon">
            <Icon name="check" />
          </span>
          {feature}
        </li>
      ))}
    </ul>
    <button className="explore-btn">Explore Path →</button>
  </div>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon name={icon} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="learn-more">
      Learn more →
    </a>
  </div>
)

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">IELTS Master</div>
        <nav className="nav">
          <a href="#">Practice Tests</a>
          <a href="#">Resources</a>
          <a href="#">Community</a>
        </nav>
        <button className="sign-in-btn">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Master IELTS with
              <br />
              <span>Confidence & Strategy</span>
            </h1>
            <p>
              Join our comprehensive IELTS preparation platform trusted by over 50,000 students worldwide. Get
              personalized study plans, expert guidance, and guaranteed results.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Start Free Trial →</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
            <p className="hero-note">• No credit card required • 7-day free trial • Cancel anytime</p>
          </div>
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-main">8.0</div>
              <div className="stat-desc">Average Band Score</div>
            </div>
            <div className="stat-box">
              <div className="stat-main">95%</div>
              <div className="stat-desc">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Trusted by Students Worldwide</h2>
        <p>Join our growing community of successful IELTS test-takers</p>
        <div className="stats-grid">
          <StatCard icon="users" number="50,000+" label="Active students" />
          <StatCard icon="star" number="95%" label="Success Rate" />
          <StatCard icon="users" number="1,000+" label="Practice Tests" />
          <StatCard icon="star" number="15,000+" label="Band 7+ Achievers" />
          <StatCard icon="clock" number="2M+" label="Study Hours" />
          <StatCard icon="globe" number="120+" label="Global Reach" />
        </div>
      </section>

      {/* Study Paths Section */}
      <section className="study-paths">
        <h2>Choose Your Study Path</h2>
        <p>Tailored preparation programs for your specific needs</p>
        <div className="paths-grid">
          <StudyPathCard
            title="Academic IELTS"
            subtitle="Perfect for university admissions and professional registration"
            features={[
              "University-focused reading materials",
              "Academic writing tasks",
              "Research-based topics",
              "Professional vocabulary focus",
            ]}
            variant="blue"
          />
          <StudyPathCard
            title="General Training"
            subtitle="Ideal for migration and work opportunities"
            features={[
              "Everyday English practice",
              "Work-related scenarios",
              "Social context writing tasks",
              "Practical vocabulary focus",
            ]}
            variant="purple"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <span className="features-label">FEATURES</span>
          <h2>Everything You Need to Excel</h2>
          <p>
            Our platform combines advanced technology with expert guidance to provide you with the most effective IELTS
            preparation experience.
          </p>
        </div>
        <div className="features-grid">
          {[
            {
              icon: "star",
              title: "AI-Powered Learning",
              description: "Smart algorithms that analyze your performance and provide personalized study plans",
            },
            {
              icon: "users",
              title: "Live Mock Tests",
              description: "Time-bound practice tests with scoring and detailed performance analysis",
            },
            // Add more features as needed
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to start your IELTS journey?</h2>
          <p>Get started today with our free practice tests.</p>
          <button className="primary-btn">Start Free Trial →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">IELTS Master</div>
            <p>
              Your trusted companion for IELTS preparation. Achieve your target score with our comprehensive study
              resources.
            </p>
          </div>
          <div className="footer-section">
            <h3>RESOURCES</h3>
            <a href="#">Practice Tests</a>
            <a href="#">Study Materials</a>
          </div>
          <div className="footer-section">
            <h3>SUPPORT</h3>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">© 2024 IELTS Master. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App

