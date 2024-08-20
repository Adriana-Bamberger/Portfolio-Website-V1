// Currently not in separate components as per best prastice, but can be refactored to be in separate components later if needed.
import React from 'react'
import Insta from '../Images/Social Icons/instagram.png'
import LinkedIn from '../Images/Social Icons/linkedin.png'
import WeChat from '../Images/Social Icons/wechat.png'
import Github from '../Images/Social Icons/github-logo.png'

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

const Footer: React.FC = () => (
  <div className="box footer">
    <SocialIcon
      href="https://github.com/Adriana-Bamberger"
      src={Github}
      alt="Github Logo Button"
    />
    <SocialIcon
      href="https://nz.linkedin.com/in/adriana-bamberger-a58742205"
      src={LinkedIn}
      alt="LinkedIn Logo Button"
    />
    <h3>
      Tāmaki Makaurau, Aotearoa | New Zealand Citizen | adriana@bamberger.nz |
      022 470 6342
    </h3>
    <SocialIcon
      href="https://www.instagram.com/adri.bamberger/?hl=en"
      src={Insta}
      alt="Insta Logo Button"
    />
    <SocialIcon
      href="https://u.wechat.com/kAwZCbgHLMQFM09IJLbae1s?s=1"
      src={WeChat}
      alt="We Chat Logo Button"
    />
  </div>
)

export default Footer
