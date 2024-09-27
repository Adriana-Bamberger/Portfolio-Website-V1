import img from '../Images/Advertars/3D-Advtar.png'

function HeroBox() {
  return (
    <>
      <div className="box hero-box">
        <div className="text-continer">
          <p className="subheading">
            <b>
              <em>Kia ora! Hallo! Hiya! </em>
            </b>{' '}
          </p>
          <p>
            {' '}
            I&apos;m a kiwi web developer who loves to code, design, and solve
            problems as much as I love stitching together creative projects -
            and trust me, I&apos;ve sewn up plenty!
            <br /> Before web development, I ran my own professional costuming
            business, so bringing ideas to life is kind of my thing.
            <br />
            <br /> Whether it&apos;s front-end or full-stack, I&apos;m all about
            turning ideas into pixel-perfect, user-friendly creations. I enjoy
            collaborating with awesome people, thinking outside the (code)box,
            and building tools that actually make life easier. Always learning,
            always growing—and having fun while I&apos;m at it!
          </p>
        </div>
        <img
          src={img}
          alt="cartoon drawing of adriana by adriana"
          loading="lazy"
        />
      </div>
    </>
  )
}
export default HeroBox
