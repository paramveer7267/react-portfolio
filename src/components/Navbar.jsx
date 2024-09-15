import React from "react";
import "./css/Navbar.scss"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>PARAMVEER SINGH</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="navbar-toggle">
        <i className="fas fa-moon"></i> {/* Icon for the toggle button */}
      </div>
    </nav>
  );
};

export default Navbar;
