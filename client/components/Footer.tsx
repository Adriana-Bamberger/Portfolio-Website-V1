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
    <footer className="box footer">
      <div className="footer-content">
        <div className="social-icons-left">
          <SocialIcon href={socialLinks[0].href} src={socialLinks[0].src} alt={socialLinks[0].alt} />
          <SocialIcon href={socialLinks[1].href} src={socialLinks[1].src} alt={socialLinks[1].alt} />
        </div>
        <div className="footer-text">
          <p>Tāmaki Makaurau, Aotearoa | New Zealand Citizen | adriana@bamberger.nz |
        022 470 6342</p>
        </div>
        <div className="social-icons-right">
          <SocialIcon href={socialLinks[2].href} src={socialLinks[2].src} alt={socialLinks[2].alt} />
          <SocialIcon href={socialLinks[3].href} src={socialLinks[3].src} alt={socialLinks[3].alt} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
