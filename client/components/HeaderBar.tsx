//The header bar that has my title and buttons
//Importing the Button images.
import github from '../Images/github-logo.png'
import Linkedin from '../Images/linkedin-black.png'
import Instagram from '../Images/instagram-black.png'
import StackOverflow from '../Images/stack-overflow-black.png'
import GoodReads from '../Images/goodReads-black.png'
import DownloadCV from '../Images/Download-cv.png'
function HeaderBar() {
  const cvDownloadUrl =
    'https://drive.google.com/file/d/1iagpXERR6W1qiFfLOncFBi0Ogm_3chTY/view?usp=sharing'
  return (
    <>
      <div className="header">
        {/* Title */}
        <span className="header-title">Adriana Bamberger | Portfolio - WIP </span>
        {/* Other Website Links */}
        <div className="buttons-container">
          {/* GitHub */}
          <a
            href="https://github.com/Adriana-Bamberger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon social-icon--github">
              <img
                className="social-icon__image"
                src={github}
                alt="GitHub Icon (Black and White)"
              />
            </div>
          </a>
          {/* Linked In */}
          <a
            href="https://nz.linkedin.com/in/adriana-bamberger-a58742205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon social-icon--linkedIn">
              <img
                className="social-icon__image"
                src={Linkedin}
                alt="Linked In Icon (Black and White)"
              />
            </div>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adri.bamberger/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon social-icon--instagram">
              <img
                className="social-icon__image"
                src={Instagram}
                alt="Instagram Icon (Black and White)"
              />
            </div>
          </a>
          {/* Gmail is very slow to do the link, not sure it's worth having.
          <a href="mailto:adriana@bamberger.nz">
            <div className="social-icon social-icon--gmail">
              <img
                className="social-icon__image"
                src={Gmail}
                alt="Gmail Icon (Black and White)"
              />
            </div>
          </a> */}
          {/* Stack Overflow */}
          <a
            href="https://stackoverflow.com/users/23250670/adriana-bamberger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon social-icon--stackOverflow">
              <img
                className="social-icon__image"
                src={StackOverflow}
                alt="Stack Overflow Icon (Black and White)"
              />
            </div>
          </a>
          {/* Good Reads */}
          <a
            href="https://www.goodreads.com/user/show/166058375-adriana-bamberger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon social-icon--goodReads">
              <img
                className="social-icon__image"
                src={GoodReads}
                alt="Good Reads Icon (Black and White)"
              />
            </div>
          </a>
          {/* Download CV */}
          <a href={cvDownloadUrl} target="_blank" rel="noopener noreferrer">
            <div className="social-icon social-icon--downloadCv">
              <img
                className="social-icon__image"
                src={DownloadCV}
                alt="Download CV"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
