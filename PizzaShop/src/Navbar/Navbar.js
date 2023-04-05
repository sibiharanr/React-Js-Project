import React from 'react'
import Logo from "../Assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {

  return (
    <div className="Navbar">
      <div className="Left">

        <img src={Logo} alt="Logo"/>
        
        <div className="Right">          
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/About"> About </Link>
          <Link to="Contact"> Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar