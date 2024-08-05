//Imports
import HeaderBar from './HeaderBar'
import ExprienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import InterestsBox from './InterestsBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
import ThreeShaderComponent from './ThreeShaderComponent'
//This rendors the whole page
function App() {
  return (
    <>
      <ThreeShaderComponent />
      <HeaderBar />
      <HeroBox />
      <ProjectsBox />
      <ExprienceBox />
      <SkillsBox />
      <InterestsBox />
      <Footer />
    </>
  )
}

export default App
