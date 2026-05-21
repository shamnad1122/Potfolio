import { useState } from 'react'
import { getProfile } from '../controllers/portfolioController'
import './ContactView.css'

export default function ContactView() {
  const profile = getProfile()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <p className="section-sub">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">Let's talk about your project</h3>
            <p className="contact-text">
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs some creative work, I'd love to hear about it.
            </p>

            <div className="contact-cards">
              <a href={`mailto:${profile.email}`} className="contact-card">
                <div className="contact-card-icon" style={{ background: 'rgba(124, 58, 237, 0.15)', color: '#a78bfa' }}>📧</div>
                <div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">{profile.email}</div>
                </div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f9a8d4' }}>📍</div>
                <div>
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">{profile.location}</div>
                </div>
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-card-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#67e8f9' }}>💻</div>
                <div>
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">github.com/shamnad1122</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {sent ? '✅ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>Designed & Built by <span className="gradient-text">Shamnad</span> · {new Date().getFullYear()}</p>
      </footer>
    </section>
  )
}
