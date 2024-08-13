//My footer with all the inport contact deatils on it.
//Import Images
import Insta from '../Images/instagram.png'
import Messenger from '../Images/messenger.png'
import linkedIn from '../Images/linkedin.png'
import weChat from '../Images/wechat.png'
function Footer() {
  return (
    <>
      <div className="box footer">
        <img
          className="social-icon__image"
          src={Messenger}
          alt="Messenger Logo Button"
        />
        <img
          className="social-icon__image"
          src={Insta}
          alt="Insta Logo Button"
        />
        <h3>
          Tāmaki Makaurau, Aotearoa | New Zealand Citizen | adriana@bamberger.nz
          | 022 470 6342
        </h3>
        <img
          className="social-icon__image"
          src={linkedIn}
          alt="LinkedIn Logo Button"
        />
        <img
          className="social-icon__image"
          src={weChat}
          alt="We Chat Logo Button"
        />
      </div>
    </>
  )
}
export default Footer
