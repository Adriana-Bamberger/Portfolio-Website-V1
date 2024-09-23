import SocialIcon from './SocialIcon'
import Github from '../Images/Social Icons/github-logo.png'
import Linkedin from '../Images/Social Icons/linkedin.png'
import Instagram from '../Images/Social Icons/instagram.png'
import StackOverflow from '../Images/Social Icons/stack-overflow.png'
import GoodReads from '../Images/Social Icons/goodReads.png'
import DownloadCV from '../Images/Social Icons/CV-Download-Icon-black.png'

function HeaderBar() {
  const socialLinks = [
    {
      href: 'https://github.com/Adriana-Bamberger',
      src: Github,
      alt: 'GitHub Icon (Black and White)',
      className: 'social-icon--github',
    },
    {
      href: 'https://nz.linkedin.com/in/adriana-bamberger-a58742205',
      src: Linkedin,
      alt: 'LinkedIn Icon (Black and White)',
      className: 'social-icon--linkedIn',
    },
    {
      href: 'https://www.instagram.com/adri.bamberger/?hl=en',
      src: Instagram,
      alt: 'Instagram Icon (Black and White)',
      className: 'social-icon--instagram',
    },
    {
      href: 'https://stackoverflow.com/users/23250670/adriana-bamberger',
      src: StackOverflow,
      alt: 'Stack Overflow Icon (Black and White)',
      className: 'social-icon--stackOverflow',
    },
    {
      href: 'https://www.goodreads.com/user/show/166058375-adriana-bamberger',
      src: GoodReads,
      alt: 'Good Reads Icon (Black and White)',
      className: 'social-icon--goodReads',
    },
    {
      href: 'https://drive.google.com/file/d/1W6KXj_fydQK3ZhKZGCfOXkeCd5zt-6te/view?usp=sharing',
      src: DownloadCV,
      alt: 'Download CV',
      className: 'social-icon--downloadCv',
    },
  ]
  return (
    <div className="header">
      <span>
        <h1>Adriana Bamberger | Portfolio</h1>
      </span>
      <div className="buttons-container">
        {socialLinks.map((link) => (
          <SocialIcon
            key={link.href}
            href={link.href}
            src={link.src}
            alt={link.alt}
            className={`social-icon ${link.className}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeaderBar
