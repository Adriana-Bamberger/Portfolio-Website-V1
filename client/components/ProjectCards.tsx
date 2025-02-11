/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { projects } from './projectsData'

function ProjectsCards() {
  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={project.id}
          data-aos="fade-up"
          className={`bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-6 md:p-8 lg:p-10 xl:p-12 flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-1/3 rounded-lg object-cover mr-6"
            loading="lazy"
          />
          <div className="w-2/3">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <hr className="my-2" />
            <p>{project.description}</p>
            <div className="flex flex-wrap mt-4">
              {project.images &&
                project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    loading="lazy"
                    className="h-9 m-1"
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
