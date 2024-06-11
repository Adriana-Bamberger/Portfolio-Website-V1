// Importing images
import project1Img from '../Images/Portfolio-on-github.png'
function ProjectsCards() {
  return (
    <>
      <div>
        <div className="project-box">
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
        </div>
      </div>
    </>
  )
}

export default ProjectsCards