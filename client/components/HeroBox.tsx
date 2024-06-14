// a box with a opening statment, my img and quick link buttons
import img from '../Images/Adrib_logo.png'
import github from
function HeroBox() {
  return (
    <>
      <div className="dark-box-to-glow glow">
      <h1>Heya!</h1>
        <div className='hero-box'>
          <p>
            A bunch of text will go here, We're talking only a sentance about
            this long, It's just so that people can get an idea of what I have
            to offer, It should have something funny included its like the
            opening phrase in a book its gotta catch the eye of the person
            reading it right away. <br />I might even put some buttons below so
            that you can navitage to socials...
          </p>
        <img src={img} alt="cartoon drawing of adriana by adriana" />
      </div>
      {/* Social media icons */}
      <div class="social-icon social-icon--facebook">
  <img class="social-icon__image" src="path/to/facebook-bw.png" alt="Facebook Icon (Black and White)">
</div>
<div class="social-icon social-icon--twitter">
  <img class="social-icon__image" src="path/to/twitter-bw.png" alt="Twitter Icon (Black and White)">
</div>

      </div>
    </>
  )
}
export default HeroBox
