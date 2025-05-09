import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props){
  return (
  <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href="#">{props.title}</a>
    {/* <Link className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} to="/">{props.title}</Link> */}
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/">Home</Link> */}
          <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        {/* <li className='nav-item'>
            <Link  className={`nav-link text-${props.mode === 'light'?'dark':'light'}`} to="/about">About</Link>
        </li> */}

      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

<div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggalmode} type="checkbox" role="switch" id="switchCheckDefault"></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable dark mode</label>
</div>


    </div>
  </div>
</nav>
  )
}

// Navbar.PropTypes = {
//   title : PropTypes.string,
//   aboutText:PropTypes.string
// }

// Navbar.defaultProps = {
//   title : 'set title here',
//   aboutText : 'About text here'
// };
