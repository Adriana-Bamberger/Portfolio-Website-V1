import img from '../Images/Advertars/3D-Advtar.png'

function HeroBox() {
  return (
    <>
      <div className="bg-white bg-opacity-10 border border-white border-opacity-0 rounded-custom backdrop-blur-sm mx-10 my-5 p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex flex-row justify-center items-center">
          <div className="relative flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-xl">
                <b>
                  <em>Kia ora! Hallo! Hiya! </em>
                </b>{' '}
              </p>
              <p>
                {' '}
                I&apos;m a kiwi web developer who loves to code, design, and
                solve problems as much as I love stitching together creative
                projects - and trust me, I&apos;ve sewn up plenty!
                <br /> Before web development, I ran my own professional
                costuming business, so bringing ideas to life is kind of my
                thing.
                <br />
                <br /> Whether it&apos;s front-end or full-stack, I&apos;m all
                about turning ideas into pixel-perfect, user-friendly creations.
                I enjoy collaborating with awesome people, thinking outside the
                (code)box, and building tools that actually make life easier.
                Always learning, always growing—and having fun while I&apos;m at
                it!
              </p>
            </div>
            <img
              src={img}
              alt="cartoon drawing of adriana by adriana"
              loading="lazy"
              className="absolute right-8 translate-y-1/4 max-w-xs max-h-96 md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroBox
