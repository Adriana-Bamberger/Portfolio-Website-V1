//Imports
import HeaderBar from './HeaderBar'
import ExprienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import AboutBox from './AboutBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
//This rendors the whole page
function App() {
  return (
    <>
      <HeaderBar />
      <HeroBox />
      <AboutBox />
      <ProjectsBox />
      <ExprienceBox />
      <SkillsBox />
      <Footer />
    </>
  )
}

export default App
