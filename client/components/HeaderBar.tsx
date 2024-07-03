//The header bar that has my title and buttons
function HeaderBar() {
  const cvDownloadUrl =
    'https://drive.google.com/file/d/1zx22_dCGr4YnZ6O81ZJzWKJy1ny3yUa4/view?usp=sharing'
  return (
    <>
      <div className="header">
        <span className="site-header">Adriana Bamberger | Portfolio</span>
        <div className="buttons-container">
          {' '}
          <button className="button">Experience</button>
          <button className="button">Projects</button>
          <a href={cvDownloadUrl} className="button">
            Download CV
          </a>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
