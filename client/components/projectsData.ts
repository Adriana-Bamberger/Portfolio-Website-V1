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
      'A web application for wedding planning, built with Laravel, Filament and Vue.',
    image: wedProImg,
    images: [
      laravel,
      vue,
      githubdesktop,
      canva,
      laragon,
      mysqlworkbench,
      filament,
    ],
  },
  {
    id: '2',
    title: 'OOTD',
    description:
      'A native app for Woodrobe management and sharing made with React Native.',
    image: ootdImg,
    images: [reactNative, typescript, canva, expo, firebase],
  },
  {
    id: '3',
    title: 'Dev Academy',
    description:
      'A Bunch of Projects from the coding bootcamp, built with React, TypeScript and many more.',
    image: devAcademyImg,
    images: [
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
    description: 'This website, and its many versions.',
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
