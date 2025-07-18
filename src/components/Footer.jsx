import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#634ade] text-white py-20 md:py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-y-0">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Paramveer Singh
          </h1>
          <p className="text-md">Software Engineer and Developer</p>
        </div>

        {/* Middle Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            About Me
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            My Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/paramveer7267"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/paramveer7267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://x.com/pvnation3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="hover:scale-125 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/pv_nation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="hover:scale-125 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center mt-8 text-sm">
        © Paramveer Singh. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
