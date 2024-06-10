//The header bar that has my title and buttons
function HeaderBar() {
  return (
    <>
      <div className="header">
        <span className="site-header">Adriana Bamberger | Portfolio</span>
        <div className="buttons-container">
          {' '}
          <button className="button-1">Experience</button>
          <button className="button-2">Projects</button>
          <button className="button-3">Other Things</button>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
