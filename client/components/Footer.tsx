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

  return (
    <div className="text-2xl font-semibold bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-3 md:p-3 lg:p-3 xl:p-3">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Social Icons Left */}
        <div className="flex space-x-4">
          {socialLinks.slice(0, 2).map((link, index) => (
            <SocialIcon
              key={index}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>

        {/* Centered Footer Text */}
        <div className="text-center md:text-left md:mx-4">
          <p className="text-sm md:text-base">
            Tāmaki Makaurau, Aotearoa | New Zealand Citizen |
            adriana@bamberger.nz | 022 470 6342
          </p>
        </div>

        {/* Social Icons Right */}
        <div className="flex space-x-4">
          {socialLinks.slice(2).map((link, index) => (
            <SocialIcon
              key={index}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
