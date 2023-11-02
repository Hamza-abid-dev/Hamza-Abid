import '../Components-CSS/Navbar.css';
// import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbarr'>
    <nav id="navvv" className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 ">
  <div className="container py-2">
    <a className="navbar-brand fw-semibold " href="/#"><span className='navheading'>HAMZA ABID</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
        <li className="nav-item mx-4">
          <a id='anch' className="nav-link active text-decoration-none" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-decoration-none" href="#about">About Me</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-decoration-none" href="#services">Services</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-decoration-none" href="#work">Work</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-decoration-none" href="#contact">Contact Me</a>
        </li>
      </ul>
      <li className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <a id='chat' href="#contact"><button className="btn btn-primary px-4 rounded-5 py-2">Let's Chat</button></a>
      </li>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
