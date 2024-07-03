// a box with a opening statment, my img and quick link buttons
import img from '../Images/Adrib_logo.png'

function HeroBox() {
  return (
    <>
      <div className="dark-box-to-glow glow">
        <p className="subheading">
          <b>Kia ora! </b>I'm a full-stack developer with a passion for creative
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
      </div>
    </>
  )
}
export default HeroBox
