import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeaderBar from './HeaderBar'
import ExperienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import InterestsBox from './InterestsBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
import GlowEffect from '../GlowEffect'
import ProjectDetails from './ProjectDetails'

function App() {
  return (
    <Router>
      <GlowEffect />
      <HeaderBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBox />
              <ProjectsBox />
              <ExperienceBox />
              <SkillsBox />
              <InterestsBox />
            </>
          }
        />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
