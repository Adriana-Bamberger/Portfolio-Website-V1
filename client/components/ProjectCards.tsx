// Importing images
import project1Img from '../Images/Portfolio-on-github.png'
function ProjectsCards() {
  return (
    <>
      <div>
        <div className="project-box">
          <div className="pink-project">
            <img src={project1Img} alt="The github repo of this portfolio" />
            <p>This component is a WIP</p>
          </div>
          <div className="orange-project">
            <img
              src={project1Img}
              className="project-img"
              alt="The github repo of this portfolio"
            />
            <p>Each project box will animate onto screen and on hover</p>
          </div>
          <div className="yellow-project">
            <img
              src={project1Img}
              className="project-img"
              alt="The github repo of this portfolio"
            />
            <p>Each project will have a description and a link</p>
          </div>
          <div className="green-project">
            <img
              src={project1Img}
              className="project-img"
              alt="The github repo of this portfolio"
            />
            <p>And a size responcive layout.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCards
