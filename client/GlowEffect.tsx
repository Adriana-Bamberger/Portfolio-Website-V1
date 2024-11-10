import React, { useEffect } from 'react'
// import './main.scss'

const GlowEffect: React.FC = () => {
  useEffect(() => {
    const glow = document.createElement('div')
    glow.classList.add('glow')
    document.body.appendChild(glow)

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.pageX}px`
      glow.style.top = `${e.pageY}px`
      glow.style.opacity = '1'
    }

    const handleMouseOut = () => {
      glow.style.opacity = '0'
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.removeChild(glow)
    }
  }, [])

  return null
}

export default GlowEffect
