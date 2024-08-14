/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'
import { projects } from './projectsData'

function ProjectsCards() {
  const navigate = useNavigate()

  const handleClick = (id: string) => {
    navigate(`/project-details/${id}`)
  }

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => handleClick(project.id)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
          <h2>{project.title}</h2>
          <hr />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCards
