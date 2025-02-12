import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'



export const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleTogglerClick = () => {
      setIsExpanded((prev) => !prev);
    };
    
  return (
    <header  id="myHeader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="/logo192.png" className="header_logo" alt="ILearn"/></Link>
                <button onClick={handleTogglerClick} className={`navbar-toggler ${isExpanded ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded={isExpanded} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#process">Process</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
  )
}
