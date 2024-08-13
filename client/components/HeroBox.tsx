// a box with a opening statment, my img and quick link buttons
import img from '../Images/Advertars/3D-Advtar.png'

function HeroBox() {
  return (
    <>
      <div className="box">
        <p className="subheading">
          <b>Kia ora! </b>I&apos;m a Kiwi full-stack developer in Auckland who
          loves blending creativity with technology.{' '}
        </p>
        <div className="hero-box">
          <p>
            I started coding at twelve and honed my skills at Dev Academy
            Aotearoa.
            <br />
            My background in costume creation, retail, and Scouting has given me
            strong collaboration and communication skills. <br />
            I love supportive, collaborative environments and am always eager to
            learn and grow. <br />
            Check out my projects below, or send me a message. Let&apos;s build
            something great together!
          </p>
          <img src={img} alt="cartoon drawing of adriana by adriana" />
        </div>
      </div>
    </>
  )
}
export default HeroBox
