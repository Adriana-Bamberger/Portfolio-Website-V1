import HeaderBar from './HeaderBar'
import ExprienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import InterestsBox from './InterestsBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
import GlowEffect from '../GlowEffect'

function App() {
  return (
    <>
      <GlowEffect />
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
