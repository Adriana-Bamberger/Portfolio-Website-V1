// projectsData.ts
import wedProImg from '../Images/Projects/WedPro-Clear.png'
import ootdImg from '../Images/Projects/OOTD-Clear.png'
import devAcademyImg from '../Images/Projects/DevAcademy-Clear.png'
import portfolioImg from '../Images/Projects/Portfolio-Clear.png'
import filament from '../Images/Skills/Filament.png'
import laravel from '../Images/Skills/Laravel.png'
// import react from '../Images/Skills/react.png'
import reactNative from '../Images/Skills/react-native.png'
import typescript from '../Images/Skills/typescript.png'
import vue from '../Images/Skills/Vue.png'
import githubdesktop from '../Images/Skills/Github-Desktop.png'
import laragon from '../Images/Skills/Laragon.png'
import mysqlworkbench from '../Images/Skills/My-SQL-Workbench.png'
import canva from '../Images/Skills/canva.png'
import expo from '../Images/Skills/expo.png'
import firebase from '../Images/Skills/firebase.png'
import chatgpt from '../Images/Skills/chatgpt.png'
import clipstudio from '../Images/Skills/clipstudiopaint.png'
import docker from '../Images/Skills/docker.png'
import sass from '../Images/Skills/sass.png'
import figma from '../Images/Skills/figma.png'
import vscode from '../Images/Skills/vscode.png'
import tailwind from '../Images/Skills/tailwind.png'
import sketchbook from '../Images/Skills/sketchbook.png'
import knex from '../Images/Skills/knex.png'
import js from '../Images/Skills/js.png'
import html5 from '../Images/Skills/html-5.png'
import google from '../Images/Skills/google.png'
import gemini from '../Images/Skills/gemini.png'
import express from '../Images/Skills/expressJs.png'

export const projects = [
  {
    id: '1',
    title: 'WedPro',
    description:
      'Built a bunch of features for this wonderful startups web application for wedding planning, built with an entirely new to me stack: Filament, Laragon, Laravel, PHP, Tailwind, Vue.js',
    image: wedProImg,
    images: [
      canva,
      filament,
      githubdesktop,
      mysqlworkbench,
      laragon,
      laravel,
      // Add PHP
      // Add Tailwind
      vue,
    ],
  },
  {
    id: '2',
    title: 'OOTD',
    description:
      'A native app for Wardrobe management and sharing, My team learnt and made this in a week as my final project from my time in Dev Academy with React Native and Expo, We had previously only used classic React with TSX, so this was a exciting new challenge.',
    image: ootdImg,
    images: [reactNative, typescript, canva, expo, firebase],
  },
  {
    id: '3',
    title: 'Dev Academy',
    description:
      'An intensive 15-week immersive full stack web development bootcamp, Hands-on challenges, both independently and collaboratively, through group and pair programming sessions. React, TypeScript and many more, focusing on real-world development scenarios. Practiced extensively in Unit Testing, Test Driven Development, Asynchronous Programming Techniques, RESTful APIs, and Git. Emphasized soft skills, empathy, and well-being, learning meditation and integrating agile methodologies into team projects, providing and receiving growth-oriented feedback. Approximately 900 hours of coding',
    image: devAcademyImg,
    images: [
      // HTML5, CSS3 (SCSS/Sass), JavaScript, TypeScript, React, React Native, Node.js, Express.js, NPM, Knex, SQLite3, Docker, Vite, Vitest, Jest, Storybook, Superagent, Supertest, Figma, Canva, and Visual Studio.
      typescript,
      sass,
      docker,
      figma,
      tailwind,
      vscode,
      knex,
      js,
      html5,
      express,
    ],
  },
  {
    id: '4',
    title: 'Portfolio',
    description:
      'This website, and its many versions. As normal it is a work in progress, taking my time to perfect it around my other work projects but I am proud of it. I have learnt a lot about React, TypeScript, and CSS in the process of making it.',
    image: portfolioImg,
    images: [
      typescript,
      sass,
      canva,
      clipstudio,
      chatgpt,
      gemini,
      vscode,
      html5,
      google,
      sketchbook,
    ],
  },
]
