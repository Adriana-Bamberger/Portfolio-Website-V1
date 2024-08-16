import { useParams } from 'react-router-dom'
import { projects } from './projectsData.ts'

function ProjectDetails() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((project) => project.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} loading="lazy" />
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectDetails
