//The header bar that has my title and buttons
function HeaderBar() {
  return (
    <>
      <div className="header">
        <span className="site-header">Adriana Bamberger | Portfolio</span>
        <div className="buttons-container">
          {' '}
          <button className="button">Experience</button>
          <button className="button">Projects</button>
          <button className="button">Other Things</button>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
