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
        <p className="subheading">
          Kia ora! I'm a full-stack developer with a passion for creative
          problem-solving.{' '}
        </p>
        <div className="hero-box">
          <p>
            My background in costume creation, specialist retail, and volunteer
            work for Scouting translates well to web development, fostering
            strong collaboration and communication skills for dynamic, diverse
            teams. <br />
            An interest in coding was sparked by an introductory course I took
            at age twelve, which recently led me to the Dev Academy bootcamp.{' '}
            <br />
            Now, I'm eager to leverage my adaptability and technical skills to
            build creative web applications.
            <br /> My projects that explore React and React Native can be found
            on my GitHub and portfolio. <br />
            As a continuous learner, I'm drawn to inclusive and supportive
            environments that embrace exploration and new challenges.
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
