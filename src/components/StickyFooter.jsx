import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
const StickyFooter = () => {
  return (
    <footer className="fixed md:hidden bottom-0 w-full bg-gray-200 text-black py-4 px-6 flex justify-between items-center z-50">
      <p className="text-sm">Paramveer Singh</p>

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
    </footer>
  );
};

export default StickyFooter;
