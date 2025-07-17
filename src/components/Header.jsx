import React from 'react'
import '../index.css'
const Header = () => {
  return (
    <>
    <header className="header" id="header">
        <nav className="nav container navbar-expand-lg">
            <a href="#" className="nav__logo navbar-brand ml-3">PARAMVEER SINGH</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default"
                aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" className="nav__link">
                            <i className="uil uil-diary nav__icon"></i>Qualification
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contact Us
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" id="nav-close"></i>
            </div>

            <div className="nav__btns">

                <i data-mode="dark" className="uil uil-moon moon-change-theme" id="theme-button"></i>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header
