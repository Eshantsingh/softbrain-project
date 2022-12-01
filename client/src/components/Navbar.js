import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
 

const Navbar =()=>{
    return(
        <>
   <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to ="/">
      <img src={logo} alt="logo"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to ="/"><span className="uper">Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/about"><span className="uper">About</span> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/services"><span className="uper">Services</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/contact"><span className="uper">Contact</span> </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to ="/login"><span className="uper">Login</span></NavLink>
        </li>

      
      </ul>

    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar