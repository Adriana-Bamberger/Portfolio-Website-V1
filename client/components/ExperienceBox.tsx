// A box for my exprience infomation
import { useState } from 'react'
function ExprienceBox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const experiences = [
    {
      type: 'h3',
      content:
        'TRAINEE: FULL STACK WEB DEVELOPMENT | Dev Academy Aotearoa | March 2024 - July 2024',
    },
    {
      type: 'p',
      content:
        '➔ An intensive 15-week full immersive software web development bootcamp that mimics a real-life development environment as closely as possible. The course taught us a modern web development stack using technologies such as  <b>HTML5, CSS3 (SCSS/Sass), JavaScript, TypeScript, React, React Native, Node.js, Express.js, NPM, Knex, SQLite3, Docker, Vite, Vitest, Jest, Storybook, Superagent, Supertest, Figma, Canva,</b> and<b> Visual Studio.</b> I learned by doing and exploring;  <b>Unit testing, Test Driven Development, Asynchronous Programming Techniques, RESTful APIs,</b> and<b> GitHub.</b> Approximately 1000 hours of coding. <br /> ➔ We were given hands-on challenges to do on our own, in groups, or with pair programming. <br /> ➔ The program strongly emphasized human skills, empathy, and well-being. Every Friday, we would join forces and build applications in teams of four. This gave me opportunities to practice giving and receiving growth feedback and working in teams using agile methodology. <br /> ➔ For our final project, my team of five learned to use React Native and built an iOS app in less than a week. Our approach was to divide and conquer the app components. I was responsible for the planning, documentation, navigation, front end testing, and making sure our backend components worked with our front end components. It was an awesome experience to sample a bit of native app development, and it was great fun to pick up a new framework and figure it out with my teammates.',
    },
    {
      type: 'h3',
      content: 'SENIOR SALES CONSULTANT | Tile Space | July 2023 - March 2024',
    },
    {
      type: 'p',
      content:
        'Technical sales, POS Systems, creating 3D renders of rooms for customers giving and receiving design input. Using enterprise resource planning, customer relationship management, and 3D rendering software to give outstanding customer service, keeping in touch with the design-to-construction-completion process. In store merchandising, marketing, baristaing, and cash flow management.',
    },
    {
      type: 'h3',
      content:
        'SNOW, CAMPING, AND HIKING SPECIALIST, RETAIL | Torpedo 7 | October 2022 - July 2023',
    },
    {
      type: 'p',
      content:
        'Leveraging in-depth knowledge of camping, snow, hiking, and biking gear, Trained through Torpedo 7 Red Seed program and extensive supplier sessions with top outdoor brands, delivered exceptional customer service, building rapport and recommending the perfect gear for each need. Supported store operations with merchandising, fitting services, communications, and warranty processing.',
    },
    {
      type: 'h3',
      content: 'Career Break | July 2022 - October 2022',
    },
    {
      type: 'p',
      content:
        'Spent three months focusing on creative pursuits, changing residences, and recovering from a minor surgery',
    },
    {
      type: 'h3',
      content:
        'SEWING SPECIALIST, RETAIL | Spotlight | February 2022 - July 2022',
    },
    {
      type: 'p',
      content:
        'Interdepartmental, store, and customer communications, technical sales, and stock management.',
    },
    {
      type: 'h3',
      content: 'SKI INSTRUCTOR | Snowplanet | 2020 - 2021',
    },
    {
      type: 'p',
      content:
        'Planning and delivering high risk ski lessons for under-fives, through to intermediate levels. Customer service and multi-tasking, flexibility under pressure, knowledge and skill of snow sports, and its terminology. Communicating customer feedback, team messages, plans, and comments to the appropriate people on and off the snow to ensure everything ran smoothly.',
    },
    {
      type: 'h3',
      content:
        'Kaipara Coast Plant Centre and Sculpture Gardens | April 2020 - February 2022',
    },
    {
      type: 'p',
      content:
        'Sole charge café running, barista service, Plant nursery and large sculpture art sales and support.',
    },
  ]
  return (
    <>
      <div className="light-box">
        <h1>Education and Experience</h1>
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
                <h3 className="hover-effect">{element.content}</h3>
              </div>
            )
          } else if (element.type === 'p') {
            const isActive = activeIndex === index - 1

            return (
              <p
                key={index}
                className={isActive ? 'active-content' : 'hidden-content'}
                dangerouslySetInnerHTML={{ __html: element.content }} // Yes I'm using dangerously set inner html even though I know it's not best prastice. Just want to get this website up and running.
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
