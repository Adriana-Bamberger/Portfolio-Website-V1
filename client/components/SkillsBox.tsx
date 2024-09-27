// TODO: Adjust the display frame size that this moves in, make it constant, and update the images - I'm missing a few.
import ArtRage from '../Images/Skills/art-rage.png'
import Canva from '../Images/Skills/canva.png'
import ChatGPT from '../Images/Skills/chatgpt.png'
import ClipStudioPaint from '../Images/Skills/clipstudiopaint.png'
import Docker from '../Images/Skills/docker.png'
import Expo from '../Images/Skills/expo.png'
import Express from '../Images/Skills/expressJs.png'
import Figma from '../Images/Skills/figma.png'
import Firebase from '../Images/Skills/firebase.png'
import Gemini from '../Images/Skills/gemini.png'
import GitHub from '../Images/Skills/Github logo.png'
import Google from '../Images/Skills/google.png'
import HTML from '../Images/Skills/html-5.png'
import JS from '../Images/Skills/js.png'
import Knex from '../Images/Skills/knex.png'
import MediBangPaint from '../Images/Skills/medibangpaint.png'
import ReactNative from '../Images/Skills/react-native.png'
import React from '../Images/Skills/react.png'
import Sass from '../Images/Skills/sass.png'
import SketchBook from '../Images/Skills/sketchbook.png'
import Tailwind from '../Images/Skills/tailwind.png'
import Typescript from '../Images/Skills/typescript.png'
import VSCode from '../Images/Skills/vscode.png'
import Filament from '../Images/Skills/Filament.png'
import GithubDesktop from '../Images/Skills/Github-Desktop.png'
import Laragon from '../Images/Skills/Laragon.png'
import Laravel from '../Images/Skills/Laravel.png'
import MySQL from '../Images/Skills/My-SQL-Workbench.png'
import Vue from '../Images/Skills/Vue.png'

const images = [
  ArtRage,
  Canva,
  ChatGPT,
  ClipStudioPaint,
  Docker,
  Expo,
  Express,
  Figma,
  Firebase,
  Gemini,
  GitHub,
  Google,
  HTML,
  JS,
  Knex,
  MediBangPaint,
  ReactNative,
  React,
  Sass,
  SketchBook,
  Tailwind,
  Typescript,
  VSCode,
  Filament,
  GithubDesktop,
  Laragon,
  Laravel,
  MySQL,
  Vue,

]

function SkillsBox() {
  return (
    <div className="Skillsbox">
      <div className="scroll imgScrollSpeed">
        <div className="scroll-content">
          {images.concat(images).map((img, index) => (
            <img key={index} src={img} alt="" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsBox
