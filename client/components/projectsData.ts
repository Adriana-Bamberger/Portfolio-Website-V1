// projectsData.ts
import wedProImg from '../Images/Projects/WedPro-Clear.png'
import ootdImg from '../Images/Projects/OOTD-Clear.png'
import devAcademyImg from '../Images/Projects/DevAcademy-Clear.png'
import portfolioImg from '../Images/Projects/Portfolio-Clear.png'

export const projects = [
  {
    id: '1',
    title: 'WedPro',
    description:
      'A web application for wedding planning, built with Laravel, Filament and Vue.',
    image: wedProImg,
  },
  {
    id: '2',
    title: 'OOTD',
    description:
      'A native app for Woodrobe management and sharing made with React Native.',
    image: ootdImg,
  },
  {
    id: '3',
    title: 'Dev Academy',
    description:
      'A Bunch of Projects from the coding bootcamp, built with React, TypeScript and many more.',
    image: devAcademyImg,
  },
  {
    id: '4',
    title: 'Portfolio',
    description: 'This website, and its many versions.',
    image: portfolioImg,
  },
]
