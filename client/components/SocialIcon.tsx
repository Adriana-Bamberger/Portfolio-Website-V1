import React from 'react'

interface SocialIconProps {
  href: string
  src: string
  alt: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img className="social-icon__image" src={src} alt={alt} loading="lazy" />
  </a>
)

export default SocialIcon
