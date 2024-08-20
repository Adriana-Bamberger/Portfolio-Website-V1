import SocialIcon from './SocialIcon'
import Insta from '../Images/Social Icons/instagram.png'
import LinkedIn from '../Images/Social Icons/linkedin.png'
import WeChat from '../Images/Social Icons/wechat.png'
import Github from '../Images/Social Icons/github-logo.png'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://github.com/Adriana-Bamberger',
      src: Github,
      alt: 'Github Logo Button',
    },
    {
      href: 'https://nz.linkedin.com/in/adriana-bamberger-a58742205',
      src: LinkedIn,
      alt: 'LinkedIn Logo Button',
    },
    {
      href: 'https://www.instagram.com/adri.bamberger/?hl=en',
      src: Insta,
      alt: 'Insta Logo Button',
    },
    {
      href: 'https://wechat.com/adriana-bamberger',
      src: WeChat,
      alt: 'WeChat Logo Button',
    },
  ]

  const firstTwoLinks = socialLinks.slice(0, 2)
  const lastTwoLinks = socialLinks.slice(2)

  return (
    <div className="box footer">
      {firstTwoLinks.map((link) => (
        <SocialIcon
          key={link.href}
          href={link.href}
          src={link.src}
          alt={link.alt}
        />
      ))}
      <h3>
        Tāmaki Makaurau, Aotearoa | New Zealand Citizen | adriana@bamberger.nz |
        022 470 6342
      </h3>
      {lastTwoLinks.map((link) => (
        <SocialIcon
          key={link.href}
          href={link.href}
          src={link.src}
          alt={link.alt}
        />
      ))}
    </div>
  )
}

export default Footer
