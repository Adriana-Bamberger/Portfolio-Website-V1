// Importing images
import project1Img from '../Images/Portfolio-on-github.png'
function ProjectsCards() {
  return (
    <>
      <div>
        <div className="project-box">
          <div className='pink-project'>
          <img
            src={project1Img}
            alt="The github repo of this portfolio"
          />
          </div>
          <div className='orange-project'>
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
          </div>
          <div className="yellow-project">
          <img
            src={project1Img}
            className="project-img"
            alt="The github repo of this portfolio"
          />
          </div>
          <div className='green-project'>
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

export default ProjectsCards