import { getExperience, getEducation } from '../controllers/portfolioController'
import './ExperienceView.css'

export default function ExperienceView() {
  const experience = getExperience()
  const education = getEducation()

  return (
    <section id="experience" className="experience section" style={{ background: '#0d0d1a' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
        </div>

        <div className="timeline-grid">
          <div className="timeline-col">
            <h3 className="timeline-heading">
              <span className="timeline-icon">💼</span> Work Experience
            </h3>
            <div className="timeline">
              {experience.map((exp, i) => (
                <div key={i} className="timeline-item" style={{ '--color': exp.color }}>
                  <div className="timeline-dot" style={{ background: exp.color }} />
                  <div className="timeline-card">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <div className="timeline-company" style={{ color: exp.color }}>{exp.company}</div>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-col">
            <h3 className="timeline-heading">
              <span className="timeline-icon">🎓</span> Education
            </h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <div key={i} className="timeline-item" style={{ '--color': edu.color }}>
                  <div className="timeline-dot" style={{ background: edu.color }} />
                  <div className="timeline-card">
                    <div className="timeline-period">{edu.period}</div>
                    <h4 className="timeline-role">{edu.degree}</h4>
                    <div className="timeline-company" style={{ color: edu.color }}>{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cert-section">
              <h3 className="timeline-heading" style={{ marginTop: '2rem' }}>
                <span className="timeline-icon">🏆</span> Achievements
              </h3>
              {['Best Developer Award 2023', 'Open Source Contributor', 'Hackathon Winner 2022', 'AWS Certified Developer'].map((cert, i) => (
                <div key={i} className="cert-item">
                  <span className="cert-star">⭐</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
