import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeShaderComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let container: HTMLElement
    let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let uniforms: { [key: string]: { type: string; value: any } }
    let texture: THREE.Texture,
      rtTexture: THREE.WebGLRenderTarget,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      rtTexture2: THREE.WebGLRenderTarget
    const newmouse: { x: number; y: number } = { x: 0, y: 0 }

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
      container = containerRef.current!
      camera = new THREE.Camera()
      camera.position.z = 1

      scene = new THREE.Scene()

      const geometry = new THREE.PlaneGeometry(2, 2)

      rtTexture = new THREE.WebGLRenderTarget(
        window.innerWidth * 0.2,
        window.innerHeight * 0.2,
      )
      // Remove the declaration and assignment of rtTexture2

      uniforms = {
        u_time: { type: 'f', value: 1.0 },
        u_resolution: {
          type: 'v2',
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
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

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      renderer = new THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)

      window.addEventListener('mousemove', onMouseMove, false)
    }

    function onMouseMove(event: MouseEvent) {
      newmouse.x = (event.clientX / window.innerWidth) * 2 - 1
      newmouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      uniforms.u_mouse.value.x = newmouse.x
      uniforms.u_mouse.value.y = newmouse.y
    }

    function animate() {
      requestAnimationFrame(animate)
      render()
    }

    function render() {
      uniforms.u_time.value += 0.05
      renderer.render(scene, camera)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
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
