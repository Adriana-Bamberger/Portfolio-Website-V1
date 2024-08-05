import * as THREE from 'three'

let container: HTMLElement
let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer
let uniforms: any
let texture: THREE.Texture,
  rtTexture: THREE.WebGLRenderTarget,
  rtTexture2: THREE.WebGLRenderTarget
const newmouse = { x: 0, y: 0 }

const divisor = 1 / 10
const loader = new THREE.TextureLoader()

loader.setCrossOrigin('anonymous')
loader.load(
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
  (tex) => {
    texture = tex
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.minFilter = THREE.LinearFilter
    init()
    animate()
  },
)

function init() {
  container = document.getElementById('container')!

  camera = new THREE.Camera()
  camera.position.z = 1

  scene = new THREE.Scene()

  const geometry = new THREE.PlaneBufferGeometry(2, 2)

  rtTexture = new THREE.WebGLRenderTarget(
    window.innerWidth * 0.2,
    window.innerHeight * 0.2,
  )
  rtTexture2 = new THREE.WebGLRenderTarget(
    window.innerWidth * 0.2,
    window.innerHeight * 0.2,
  )

  uniforms = {
    u_time: { type: 'f', value: 1.0 },
    u_resolution: { type: 'v2', value: new THREE.Vector2() },
    u_noise: { type: 't', value: texture },
    u_buffer: { type: 't', value: rtTexture.texture },
    u_mouse: { type: 'v2', value: new THREE.Vector2() },
    u_renderpass: { type: 'b', value: false },
  }

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader')!.textContent!,
    fragmentShader: document.getElementById('fragmentShader')!.textContent!,
  })
  material.extensions.derivatives = true

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)

  container.appendChild(renderer.domElement)

  onWindowResize()
  window.addEventListener('resize', onWindowResize, false)

  document.addEventListener('pointermove', (e) => {
    const ratio = window.innerHeight / window.innerWidth
    newmouse.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio
    newmouse.y = ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1
    e.preventDefault()
  })
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  uniforms.u_resolution.value.x = renderer.domElement.width
  uniforms.u_resolution.value.y = renderer.domElement.height

  rtTexture.setSize(window.innerWidth * 0.2, window.innerHeight * 0.2)
  rtTexture2.setSize(window.innerWidth * 0.2, window.innerHeight * 0.2)
}

function animate() {
  requestAnimationFrame(animate)
  render()
}

function render() {
  uniforms.u_time.value += 0.05
  uniforms.u_mouse.value.x += (newmouse.x - uniforms.u_mouse.value.x) * divisor
  uniforms.u_mouse.value.y += (newmouse.y - uniforms.u_mouse.value.y) * divisor

  renderer.setRenderTarget(rtTexture)
  renderer.render(scene, camera)

  uniforms.u_renderpass.value = true
  uniforms.u_buffer.value = rtTexture.texture

  renderer.setRenderTarget(null)
  renderer.render(scene, camera)
}

function captureFrame() {
  // Implement capturing frame logic if needed
}

function startCapture() {
  // Implement start capturing logic if needed
}

function stopCapture() {
  // Implement stop capturing logic if needed
}

window.addEventListener('keyup', (e) => {
  if (e.key === 'c') {
    captureFrame()
  }
})
