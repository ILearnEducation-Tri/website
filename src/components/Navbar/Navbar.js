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
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container">
                <Link class="navbar-brand" to="/"><img src="/logo192.png" class="header_logo" alt="ILearn"/></Link>
                <button onClick={handleTogglerClick} class={`navbar-toggler ${isExpanded ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded={isExpanded} aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>                        
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#process">Process</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
  )
}
