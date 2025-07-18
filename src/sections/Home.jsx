import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import Typewriter from "../components/Typewriter";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div id="home" className="flex justify-center md:gap-x-20 md:mr-20 py-15 md:py-25 ">
      {/* Social Icons Column */}
      <div className="hidden md:flex flex-col gap-y-6 pt-20 flex-shrink-0 mx-4 md:mx-0">
        <Link
          to="https://github.com/paramveer7267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/paramveer7267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link
          to="https://x.com/pvnation3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </Link>
        <Link
          to="https://www.instagram.com/pv_nation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </div>

      {/* Main Content Column */}
      <div className="flex flex-col text-center gap-y-8 md:px-40 px-4 max-w-4xl">
        <h3 className="text-gray-600">Welcome to my Portfolio Website!</h3>
        <h1 className="text-4xl md:text-5xl text-gray-500 font-bold">
          Hey I'm
        </h1>
        <Typewriter
          words={[
            "Paramveer Singh",
            "Computer Science Engineer",
            "Web Developer",
            "Problem Solver",
          ]}
        />
        <p className="text-lg md:text-xl text-gray-600">
          An engineer enthusiast about technology and web development.
          Passionate about learning new things. Loves to play games and read
          books.
        </p>

        <Link
          to="tel:9541528256"
          className="bg-[#634ade] hover:bg-[#5139C6] hover:scale-110 transition-all transform cursor-pointer gap-2 text-white flex w-40 justify-center mx-auto  rounded-md px-6 py-4 items-center"
        >
          <p>Contact Me</p>
          <Send size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
