import React from "react";
import "./css/Header.scss"; // Import a CSS file for styling

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h2>Welcome to my Portfolio Website!</h2>
        <h1>
          Hey, I'm <br />
          <span className="highlight-text">Paramveer Singh</span>
        </h1>
        <h2 className="role">Computer Science</h2>
        <p>
          An engineer enthusiast about technology and web development.
          Passionate about learning new things. Loves to play games and read books.
        </p>
        <a href="#contact" className="contact-button">
          Contact Me
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
