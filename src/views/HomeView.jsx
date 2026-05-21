import { getProfile, getProjects } from '../controllers/portfolioController'

function HomeView() {
  const profile = getProfile()
  const projects = getProjects()

  return (
    <main style={{ padding: '2rem' }}>
      <section>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.bio}</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>Projects</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.link}>{project.title}</a> — {project.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default HomeView
