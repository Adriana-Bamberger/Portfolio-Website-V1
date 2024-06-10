// Importing images
import project1Img from '../Images/Portfolio-on-github.png'
// A box that shows scrolling images of the projects I've worked on before
function ProjectsBox() {
  return (
    <>
      <div className="dark-box">
        <h1>Projects</h1>
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
      </div>
    </>
  )
}
export default ProjectsBox
