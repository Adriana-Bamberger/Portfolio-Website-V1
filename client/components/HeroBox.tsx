// a box with a opening statment, my img and quick link buttons
import img from '../Images/Adrib_logo.png'
function HeroBox() {
  return (
    <>
      <div className="box-to-glow glow hero-box">
        <div>
          <h1>Heya!</h1>
          <p>
            A bunch of text will go here, We're talking only a sentance about
            this long, It's just so that people can get an idea of what I have
            to offer, It should have something funny included its like the
            opening phrase in a book its gotta catch the eye of the person
            reading it right away. <br />I might even put some buttons below so
            that you can navitage to socials...
          </p>
        </div>

        <img src={img} alt="cartoon drawing of adriana by adriana" />
      </div>
    </>
  )
}
export default HeroBox
