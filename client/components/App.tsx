import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect } from 'react'
import HeaderBar from './HeaderBar'
import ExperienceBox from './ExperienceBox'
import ProjectsBox from './ProjectsBox'
import InterestsBox from './InterestsBox'
import SkillsBox from './SkillsBox'
import Footer from './Footer'
import HeroBox from './HeroBox'
import GlowEffect from '../GlowEffect'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <div className="bg-background-large bg-cover bg-fixed md:bg-background-large lg:bg-background-extra-large xl:bg-background-large 2xl:bg-background-large text-white">
      <div className="font-poppins overflow-hidden m-0 p-0"></div>
      <GlowEffect />
      <HeaderBar />
      <HeroBox />
      <ProjectsBox />
      <SkillsBox />
      <InterestsBox />
      <ExperienceBox />
      <Footer />
      <div className="overflow-hidden m-0 p-0"></div>
    </div>
  )
}
