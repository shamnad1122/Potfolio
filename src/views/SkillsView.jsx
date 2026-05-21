import { getSkills } from '../controllers/portfolioController'
import './SkillsView.css'

export default function SkillsView() {
  const skills = getSkills()

  return (
    <section id="skills" className="skills section" style={{ background: '#0d0d1a' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">What I <span className="gradient-text">Work With</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={skill.name} className="skill-card" style={{ '--delay': `${i * 0.1}s`, '--color': skill.color }}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%`, background: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud">
          {['Git', 'AWS', 'Linux', 'REST API', 'GraphQL', 'Redux', 'Tailwind', 'Jest', 'CI/CD', 'Figma', 'Webpack', 'Nginx'].map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
