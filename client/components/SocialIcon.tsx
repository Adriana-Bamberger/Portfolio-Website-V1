import React from 'react'

interface SocialIconProps {
  href: string
  src: string
  alt: string
  className?: string
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  src,
  alt,
  className,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className={`social-icon ${className}`}>
      <img className="social-icon__image" src={src} alt={alt} loading="lazy" />
    </div>
  </a>
)

export default SocialIcon
