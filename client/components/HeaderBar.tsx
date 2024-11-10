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
    },
    {
      href: 'https://nz.linkedin.com/in/adriana-bamberger-a58742205',
      src: Linkedin,
      alt: 'LinkedIn Icon (Black and White)',
    },
    {
      href: 'https://www.instagram.com/adri.bamberger/?hl=en',
      src: Instagram,
      alt: 'Instagram Icon (Black and White)',
    },
    {
      href: 'https://stackoverflow.com/users/23250670/adriana-bamberger',
      src: StackOverflow,
      alt: 'Stack Overflow Icon (Black and White)',
    },
    {
      href: 'https://www.goodreads.com/user/show/166058375-adriana-bamberger',
      src: GoodReads,
      alt: 'Good Reads Icon (Black and White)',
    },
    {
      href: 'https://drive.google.com/file/d/1W6KXj_fydQK3ZhKZGCfOXkeCd5zt-6te/view?usp=sharing',
      src: DownloadCV,
      alt: 'Download CV',
    },
  ]
  return (
    <div className="bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-2.5 flex justify-between items-center md:mx-6 md:my-4 lg:mx-8 lg:my-6 xl:mx-10 xl:my-8 2xl:mx-12 2xl:my-10">
      <span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Adriana Bamberger | Portfolio
        </h1>
      </span>
      <div className="flex gap-2 md:gap-4">
        {socialLinks.map((link) => (
          <SocialIcon
            key={link.href}
            href={link.href}
            src={link.src}
            alt={link.alt}
          />
        ))}
      </div>
    </div>
  )
}

export default HeaderBar
