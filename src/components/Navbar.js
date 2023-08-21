import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Portfolio">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{flexGrow:"0"}} id="navbarNavAltMarkup">
        
      <div className="navbar-nav" style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px"}}>
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">About</a>
        <a className="nav-link" href="/">Contact Me</a>
      </div>
    </div>
  </div>
</nav>  </div>
  )
}

export default Navbar
