import React from "react";
import { Link } from "react-router-dom";
import "./SubNavbar.css";

export const SubNavbar = () => {
  return (
    <header id="myHeader">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center">
            {/* Left: Company Icon */}
            <Link className="navbar-brand" to="/">
  <img src="/logo192.png" className="w-50 w-sm-25 w-xs-10" alt="ILearn" />
</Link>



          {/* Center: Company Name */}
          <h1 className="m-0  d-none d-sm-block transform-head">
            <span className="text-secondary custom-text">I Learn</span>{" "}
            <span className="text-black custom-text">Education</span>
          </h1>

          {/* Right: Home Icon with Text */}
          <Link className="nav-link d-flex flex-column align-items-center g-0" to="/">
  <i className="fas fa-home text-secondary fa-3x fa-sm-2x"></i>
  <p className="m-0 text-secondary small-screen-text">Home</p>
</Link>


        </div>
      </nav>
    </header>
  );
};
