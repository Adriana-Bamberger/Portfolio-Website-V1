import Github from '../Images/github-logo.png'
import Linkedin from '../Images/linkedin-black.png'
import Instagram from '../Images/instagram-black.png'
import StackOverflow from '../Images/stack-overflow-black.png'
import GoodReads from '../Images/goodReads-black.png'
import DownloadCV from '../Images/Download-cv.png'

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
    href: 'https://drive.google.com/file/d/1iagpXERR6W1qiFfLOncFBi0Ogm_3chTY/view?usp=sharing',
    src: DownloadCV,
    alt: 'Download CV',
    className: 'social-icon--downloadCv',
  },
]

function HeaderBar() {
  return (
    <div className="header">
      <span className="header-title">Adriana Bamberger | Portfolio - WIP </span>
      <div className="buttons-container">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`social-icon ${link.className}`}>
              <img
                className="social-icon__image"
                src={link.src}
                alt={link.alt}
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeaderBar

{
  /* Gmail is very slow to do the link, not sure it's worth having.
          <a href="mailto:adriana@bamberger.nz">
            <div className="social-icon social-icon--gmail">
              <img
                className="social-icon__image"
                src={Gmail}
                alt="Gmail Icon (Black and White)"
              />
            </div>
          </a> */
}
