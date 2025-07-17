import React from 'react'

const Home = () => {
  return (
    
    <section className="home section" id="home">
            <div className="home__container">

                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/paramveer-singh-529766245/" target="_blank"
                            className="home__social-icon" id="myLinkedIn">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="https://www.instagram.com/pv_nation/" target="_blank" className="home__social-icon"
                            id="myInstagram">
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://github.com/paramveer7267" target="_blank" className="home__social-icon"
                            id="myGithub">
                            <i className="uil uil-github-alt"></i>
                        </a>

                        <a href="https://www.facebook.com/paramveer.singh.75873708" target="_blank"
                            className="home__social-icon" id="myFacebook">
                            <i className="uil uil-facebook-f"></i>
                        </a>


                    </div>
                </div>

                <div className="home__data">
                    <small className="home__welcome s-color"> Welcome to my Portfolio Website! </small>
                    <h1 className="home__title"> Hey I'm </h1>
                    <div id="typewriter"></div>
                    <h3 className="home__subtitle" id="home-bio">An engineer enthusiast about technology and web
                        development. Passionate on learning new. Loves to play Games and read books </h3>
                    <a href="#contact" id="button1" className="button button--flex">
                        Contact Me <i className="uil uil-message button__icon"></i>
                    </a>
                </div>

            </div>

            <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                    {/* <!-- <span className="home__scroll-name"> Scroll Down </span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i> --> */}
                </a>
            </div>
        </section>
  )
}

export default Home
