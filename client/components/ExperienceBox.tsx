import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

function ExprienceBox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const experiences = [
    {
      type: 'h3',
      content:
        'Research And Development Intern | WedPro | August 2024 - Present',
    },
    {
      type: 'p',
      content:
        '• Remote Project research and development </br> • Designing wireframes and project components using Canva and Figma </br> •  Crash speed learning from provided resources and applying new skills. </br> • Learning and using Laragon, Laravel, Vue.js, Filament PHP, MySQL, and MySQL Workbench.',
    },
    {
      type: 'h3',
      content:
        'Trainee: Full Stack Web Development | Dev Academy Aotearoa |  March 2024 - July 2024',
    },
    {
      type: 'p',
      content:
        '•  An intensive 15-week immersive full stack web development bootcamp focusing on real-world development scenarios. <br/> <b>HTML5, CSS3 (SCSS/Sass), JavaScript, TypeScript, React, React Native, Node.js, Express.js, NPM, Knex, SQLite3, Docker, Vite, Vitest, Jest, Storybook, Superagent, Supertest, Figma, Canva,</b> and <b>Visual Studio.</b> Practiced extensively in <b>Unit Testing, Test Driven Development, Asynchronous Programming Techniques, RESTful APIs,</b> and <b>Git.</b> <br/> Approximately 900 hours of coding. <br/> •  Hands-on challenges, both independently and collaboratively, through group and pair programming sessions. <br/> •  Emphasized soft skills, empathy, and well-being, learning meditation and integrating agile methodologies into team projects. Participated weekly in team-based application development exercises, providing and receiving growth-oriented feedback. <br/> •  Learned how to use and developed a <b>React Native</b> iOS application with <b>Firebase</b> and <b>EXPO</b> with a team of five within a week for our final project. Managed planning, documentation, navigation, and front-end testing, and ensured seamless integration of back-end and front-end components.',
    },
    {
      type: 'h3',
      content: 'Senior Sales Consultant | Tile Space | July 2023 - March 2024 ',
    },
    {
      type: 'p',
      content:
        ' •  Technical sales, POS systems, creating 3D renders of rooms for customers, giving and receiving design input. <br/> •  Using enterprise resource planning, customer relationship management, and 3D rendering software to give outstanding customer service, keeping in touch with the design-to-construction-completion process. <br/> •  In store merchandising, marketing, baristaing, and cash flow management.',
    },
    {
      type: 'h3',
      content:
        'Snow, Camping, and Hiking Specialist, Retail | Torpedo 7 | October 2022 - July 2023',
    },
    {
      type: 'p',
      content:
        '• Drew on my Scouting background and underwent training from top outdoor brands. <br/> • Exceptional customer service, built rapport, and recommended the perfect gear for each need. <br/> • Supported store operations with merchandising, fitting services, communications, and warranty processing. <br/> • Passed on my knowledge through thrice weekly 20 minute hands on lessons that involved presentation, activities, retrospectives, and a friendly competition on new products, systems or technology.',
    },
    {
      type: 'h3',
      content: 'Creative Director | Zideways | July 2022 - October 2022',
    },
    {
      type: 'p',
      content:
        'As a jobby I was curating custom costumes and props for various clients around the globe. This is something I want to casually continue in the future. Experimented with 3D rendering software <b>CLO3D</b> used and automated the <b>Google Workspace</b> and <b>Meta suite</b> to manage all business elements. I delivered to many customers on time and on budget.',
    },
    {
      type: 'h3',
      content:
        'Sewing Specialist, Retail |  Spotlight | February 2022 - July 2022',
    },
    {
      type: 'p',
      content:
        'My role was till sales, interdepartmental, and store communications. <br/> Because I love sewing so much I stepped in to help with more technical sales, helping customers of all skill levels, Providing personalized project guidance, including: <br/> •  Selecting suitable sewing patterns, fabrics, and notions. <br/> •  Translated technical sewing instructions into clear, actionable steps. <br/> •  Compiled material lists and project timelines, helping customers succeed through ongoing support and troubleshooting assistance.',
    },
    {
      type: 'h3',
      content: 'Ski Instructor | Snowplanet | 2020 - 2021',
    },
    {
      type: 'p',
      content:
        '•  Planning and delivering high risk ski lessons for under-fives, through to intermediate levels. <br/> •  Customer service and multi-tasking, flexibility under pressure, knowledge and skill of snow sports. <br/> •  Communicating customer feedback, team messages, plans, and comments to the appropriate people on and off the snow to ensure everything ran smoothly.',
    },
    {
      type: 'h3',
      content:
        'Kaipara Coast Plant Centre and Sculpture Gardens | April 2020 - February 2022',
    },
    {
      type: 'p',
      content:
        'Sole charge café running, barista service, Plant nursery and large sculpture art sales and support. <br/> I learnt a lot and have many fun stories from my time there.',
    },
  ]
  return (
    <>
      <div className="box">
        <h1>Experience</h1>
        {experiences.map((element, index) => {
          if (element.type === 'h3') {
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                role="button"
                tabIndex={0}
                className={isActive ? 'active-heading' : ''}
              >
                <h3 className="hover-effect">
                  {isActive ? (
                    <ChevronUpIcon className="icon" />
                  ) : (
                    <ChevronDownIcon className="icon" />
                  )}
                  {element.content}
                </h3>
              </div>
            )
          } else if (element.type === 'p') {
            const isActive = activeIndex === index - 1

            return (
              <p
                key={index}
                className={isActive ? 'active-content' : 'hidden-content'}
                dangerouslySetInnerHTML={{ __html: element.content }}
              />
            )
          }
          return null
        })}
      </div>
    </>
  )
}

export default ExprienceBox
