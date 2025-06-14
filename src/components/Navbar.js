import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props){
  return (
  <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href="#">{props.title}</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        
         


      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

<div className="d-flex">
  <div className="bg-primary rounded mx-2" onClick={()=>{props.toggalmode (null)}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
</div>

<div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}` }>
  <input className="form-check-input" onClick={props.toggalmode} type="checkbox" role="switch" id="switchCheckDefault"  style={{cursor:'pointer'}}></input>
  <label className="form-check-label" htmlFor="switchCheckDefault">Toggal Mode</label>
</div>


    </div>
  </div>
</nav>
  )
}


