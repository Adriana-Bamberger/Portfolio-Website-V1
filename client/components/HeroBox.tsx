// a box with a opening statment, my img and quick link buttons
import img from '../Images/Adrib_logo.png'
import github from '../Images/github-logo.png'
import Linkedin from '../Images/linkedin-black.png'
import Instagram from '../Images/instagram-black.png'
import Gmail from '../Images/gmail-black.png'
import StackOverflow from '../Images/stack-overflow-black.png'
import GoodReads from '../Images/goodReads-black.png'
function HeroBox() {
  return (
    <>
      <div className="dark-box-to-glow glow">
        <h1>Heya!</h1>
        <div className="hero-box">
          <p>
            A bunch of text will go here, Were talking only a sentance about
            this long, Its just so that people can get an idea of what I have to
            offer, It should have something funny included its like the opening
            phrase in a book its gotta catch the eye of the person reading it
            right away. <br />I might even put some buttons below so that you
            can navitage to socials...
          </p>
          <img src={img} alt="cartoon drawing of adriana by adriana" />
        </div>
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
      </div>
    </>
  )
}
export default HeroBox
