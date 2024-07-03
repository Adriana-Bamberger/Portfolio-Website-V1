//The header bar that has my title and buttons
//Importing the Button images.
import github from '../Images/github-logo.png'
import Linkedin from '../Images/linkedin-black.png'
import Instagram from '../Images/instagram-black.png'
import Gmail from '../Images/gmail-black.png'
import StackOverflow from '../Images/stack-overflow-black.png'
import GoodReads from '../Images/goodReads-black.png'
function HeaderBar() {
  const cvDownloadUrl =
    'https://drive.google.com/file/d/1zx22_dCGr4YnZ6O81ZJzWKJy1ny3yUa4/view?usp=sharing'
  return (
    <>
      <div className="header">
        <span className="header-title">Adriana Bamberger | Portfolio</span>
        <div>
          <div className="buttons-container">
            <div className="social-icon social-icon--github">
              <img
                className="social-icon__image"
                src={github}
                alt="GitHub Icon (Black and White)"
              />
            </div>
            <div className="social-icon social-icon--linkedIn">
              <img
                className="social-icon__image"
                src={Linkedin}
                alt="Linked In Icon (Black and White)"
              />
            </div>
            <div className="social-icon social-icon--instagram">
              <img
                className="social-icon__image"
                src={Instagram}
                alt="Instagram Icon (Black and White)"
              />
            </div>
            <div className="social-icon social-icon--gmail">
              <img
                className="social-icon__image"
                src={Gmail}
                alt="Gmail Icon (Black and White)"
              />
            </div>
            <div className="social-icon social-icon--stackOverflow">
              <img
                className="social-icon__image"
                src={StackOverflow}
                alt="Stack Overflow Icon (Black and White)"
              />
            </div>
            <div className="social-icon social-icon--goodReads">
              <img
                className="social-icon__image"
                src={GoodReads}
                alt="Good Reads Icon (Black and White)"
              />
            </div>
            {/* <a href={cvDownloadUrl} className="button">
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
