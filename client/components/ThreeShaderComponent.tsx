import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ThreeShaderComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [renderer, setRenderer] = React.useState<THREE.WebGLRenderer | null>(
    null,
  )

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Setup Three.js scene
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)
    setRenderer(renderer)

    // Load textures
    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin('anonymous')
    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.minFilter = THREE.LinearFilter

        // Setup shaders
        const uniforms = {
          u_time: { value: 1.0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_noise: { value: texture },
          u_buffer: { value: null as THREE.Texture | null },
          u_mouse: { value: new THREE.Vector2(0, 0) },
          u_renderpass: { value: false },
        }

        const vertexShader = `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `

        const fragmentShader = `
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;
        uniform sampler2D u_noise;
        uniform sampler2D u_buffer;
        uniform bool u_renderpass;
        // Your shader code here
        void main() {
          // Shader code
        }
      `

        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
        })

        const geometry = new THREE.PlaneBufferGeometry(2, 2)
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
gaa
        // Handle resizing
        const onResize = () => {
          const width = container.clientWidth
          const height = container.clientHeight
          renderer.setSize(width, height)
          uniforms.u_resolution.value.set(width, height)
        }
        window.addEventListener('resize', onResize)
        onResize()

        // Animation loop
        const animate = (time: number) => {
          requestAnimationFrame(animate)
          uniforms.u_time.value = time * 0.001
          renderer.render(scene, camera)
        }
        requestAnimationFrame(animate)

        // Clean up on unmount
        return () => {
          window.removeEventListener('resize', onResize)
          container.removeChild(renderer.domElement)
        }
      },
    )
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        touchAction: 'none',
      }}
    />
  )
}

export default ThreeShaderComponent
