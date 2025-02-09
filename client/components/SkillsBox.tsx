import apollo from '../Images/Skills/apollo.png'
import artRage from '../Images/Skills/artRage.png'
import aws from '../Images/Skills/aws.png'
import canva from '../Images/Skills/canva.png'
import chilliCreme from '../Images/Skills/chilliCreme.png'
import clipStudioPaint from '../Images/Skills/clipStudioPaint.png'
import conflunece from '../Images/Skills/confluence.png'
import csharp from '../Images/Skills/csharp.png'
import docker from '../Images/Skills/docker.png'
import dotNet from '../Images/Skills/dotNet.png'
import expo from '../Images/Skills/expo.png'
import expressJs from '../Images/Skills/expressJs.png'
import figma from '../Images/Skills/figma.png'
import filament from '../Images/Skills/filament.png'
import firebase from '../Images/Skills/firebase.png'
import gitHub from '../Images/Skills/gitHub.png'
import gitHubDesktop from '../Images/Skills/gitHubDesktop.png'
import gmail from '../Images/Skills/gmail.png'
import google from '../Images/Skills/google.png'
import graphql from '../Images/Skills/graphql.png'
import hotChoc from '../Images/Skills/hotChoc.png'
import html5 from '../Images/Skills/html5.png'
import jenkins from '../Images/Skills/jenkins.png'
import jira from '../Images/Skills/jira.png'
import js from '../Images/Skills/js.png'
import knex from '../Images/Skills/knex.png'
import laragon from '../Images/Skills/laragon.png'
import laravel from '../Images/Skills/laravel.png'
import mediBangPaint from '../Images/Skills/mediBangPaint.png'
import mySqlWorkbench from '../Images/Skills/mySqlWorkbench.png'
import node from '../Images/Skills/node.png'
import npm from '../Images/Skills/npm.png'
import openTel from '../Images/Skills/openTel.png'
import reactJs from '../Images/Skills/reactJs.png'
import reactNative from '../Images/Skills/reactNative.png'
import sass from '../Images/Skills/sass.png'
import sketchbook from '../Images/Skills/sketchbook.png'
import sqLite from '../Images/Skills/sqLite.png'
import storybook from '../Images/Skills/storybook.png'
import tailwind from '../Images/Skills/tailwind.png'
import typescript from '../Images/Skills/typescript.png'
import vite from '../Images/Skills/vite.png'
import vitest from '../Images/Skills/vitest.png'
import vsCode from '../Images/Skills/vsCode.png'
import vueJs from '../Images/Skills/vueJs.png'
import yarn from '../Images/Skills/yarn.png'

const images = [
  // These are in a certain order to make the marquee animation look good and to keep context for the items grouped together
  clipStudioPaint,
  mediBangPaint,
  artRage,
  sketchbook,
  google,
  gmail,
  canva,
  figma,
  sass,
  tailwind,
  html5,
  js,
  typescript,
  reactJs,
  vueJs,
  node,
  expressJs,
  knex,
  reactNative,
  expo,
  vitest,
  storybook,
  vite,
  npm,
  yarn,
  jenkins,
  docker,
  firebase,
  sqLite,
  mySqlWorkbench,
  laravel,
  laragon,
  filament,
  graphql,
  apollo,
  chilliCreme,
  hotChoc,
  openTel,
  jira,
  gitHubDesktop,
  vsCode,
  gitHub,
  conflunece,
  csharp,
  dotNet,
  aws,
]

function SkillsBox() {
  return (
    <div className="bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-3 md:p-6 lg:p-8 xl:p-10 relative overflow-hidden">
      <div className="flex space-x-6 animate-marquee">
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Skill icon ${index}`}
            className="w-12 h-auto"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsBox
