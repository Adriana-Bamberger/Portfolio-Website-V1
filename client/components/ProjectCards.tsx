/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom'
import { projects } from './projectsData'

function ProjectsCards() {
  // const navigate = useNavigate()

  // const handleClick = (id: string) => {
  //   navigate(`/project-details/${id}`)
  // }

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          // onClick={() => handleClick(project.id)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
            loading="lazy"
          />
          <div className="project-content">
            <h2>{project.title}</h2>
            <hr />
            <p>{project.description}</p>
            <div>
              {project.images &&
                project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    loading="lazy"
                    style={{ height: '50px', margin: '5px' }}
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCards
