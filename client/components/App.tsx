import HeaderBar from './HeaderBar'
import ExperienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import InterestsBox from './InterestsBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
import GlowEffect from '../GlowEffect'

function App() {
  return (
    <div className="background-container">
      <GlowEffect />
      <HeaderBar />
      <HeroBox />
      <ProjectsBox />
      <ExperienceBox />
      <SkillsBox />
      <InterestsBox />
      <Footer />
    </div>
  )
}

export default App
