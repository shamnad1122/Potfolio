import { getProfile } from '../controllers/portfolioController'
import './AboutView.css'

export default function AboutView() {
  const profile = getProfile()

  const stats = [
    { value: '5+', label: 'Years Experience', color: '#7c3aed' },
    { value: '50+', label: 'Projects Done', color: '#ec4899' },
    { value: '30+', label: 'Happy Clients', color: '#06b6d4' },
    { value: '10+', label: 'Technologies', color: '#10b981' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I <span className="gradient-text">Am</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-visual">
            <div className="avatar-wrapper">
              <div className="avatar-ring ring-1" />
              <div className="avatar-ring ring-2" />
              <div className="avatar-ring ring-3" />
              <div className="avatar-inner">
                <img
                  className="avatar-photo"
                  src="/assets/profile.jpg"
                  alt="Profile"
                />
              </div>
              <div className="avatar-badge badge-react">⚛️ React</div>
              <div className="avatar-badge badge-node">🟢 Node</div>
              <div className="avatar-badge badge-db">🍃 MongoDB</div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-heading">
              Full Stack Developer based in <span style={{ color: '#ec4899' }}>Kerala, India</span>
            </h3>
            <p className="about-bio">{profile.bio}</p>
            <p className="about-bio">
              I specialize in building end-to-end web applications — from pixel-perfect UIs to robust backend systems. 
              When I'm not coding, I'm exploring new technologies and contributing to open source.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <span>{profile.email}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>{profile.location}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <span>{profile.phone}</span>
              </div>
            </div>

            <a href={profile.resume} download className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
              Download Resume ↓
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-card" style={{ '--accent': s.color }}>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
