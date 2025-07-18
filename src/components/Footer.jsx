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
    <div className="bg-[#634ade] min-h-70 flex flex-col">
      <div className=" flex text-white justify-center py-15 gap-x-10">
        <div>
          <h1 className="text-3xl font-semibold">Paramveer Singh</h1>
          <p className="text-md">Software Engineer and Developer</p>
        </div>
        <Link
          to="about"
          id="about"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          About Me
        </Link>
        <Link
          to="portfolio"
          id="portfolio"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          My Portfolio
        </Link>
        <Link
          to="contact"
          id="contact"
          className="cursor-pointer"
          smooth={true}
          duration={500}
        >
          Contact Me
        </Link>
        <Link
          to="https://github.com/paramveer7267"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/paramveer7267/"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link
          to="https://x.com/pvnation3"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </Link>
        <Link
          to="https://www.instagram.com/pv_nation/"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </div>
      <p className="text-white inline text-center">PS. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
