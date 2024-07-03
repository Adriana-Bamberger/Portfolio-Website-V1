// A box react component for me to list out all the skills hard and soft that I have.
// Imports to be added soon
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
//Holy crap that's a lot/
function SkillsBox() {
  return (
    <div className="dark-box">
      <h1>Skills</h1>
      <ul>
        <li>
          <b>Front-End Development: </b>React (1000+ hours), React Native,
          HTML5, CSS3 (SCSS/Sass), JavaScript, TypeScript
        </li>
        <li>
          <b>Version Control:</b> Git
        </li>
        <li>
          <b>Communication & Collaboration:</b> Excellent communication and
          collaboration skills, honed through project leadership and teaching
          experience.
        </li>
        <li>
          <b>Problem-Solving & Adaptability:</b> Proven ability to solve
          problems, adapt to new technologies, and work effectively in
          fast-paced environments.
        </li>
        <li>
          <b>Customer Service:</b> Strong customer service skills with a focus
          on understanding client needs and exceeding expectations.
        </li>
        <li>
          <b>Time Management & Organization:</b> Skilled at prioritizing tasks,
          managing deadlines, and working effectively under pressure.
        </li>
        <li>
          <b>Creative Technologist:</b> Experience in web development and a
          background in costume creation allows me to translate creative visions
          into functional and visually appealing web applications.
        </li>
      </ul>
      <div className="scroll imgBox imgScrollSpeed">
        <div>
          <img src={ArtRage} alt="" />
          <img src={Canva} alt="" />
          <img src={ChatGPT} alt="" />
          <img src={ClipStudioPaint} alt="" />
          <img src={Docker} alt="" />
          <img src={Expo} alt="" />
          <img src={Express} alt="" />
          <img src={Figma} alt="" />
          <img src={Firebase} alt="" />
          <img src={Gemini} alt="" />
          <img src={GitHub} alt="" />
          <img src={Google} alt="" />
          <img src={HTML} alt="" />
          <img src={JS} alt="" />
          <img src={Knex} alt="" />
          <img src={MediBangPaint} alt="" />
          <img src={ReactNative} alt="" />
          <img src={React} alt="" />
          <img src={Sass} alt="" />
          <img src={SketchBook} alt="" />
          <img src={Tailwind} alt="" />
          <img src={Typescript} alt="" />
          <img src={VSCode} alt="" />
        </div>
      </div>
    </div>
  )
}
export default SkillsBox
