import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import Typewriter from "../components/Typewriter";
const Home = () => {
  return (
    <div id="home" className="flex justify-center md:gap-x-20 md:mr-20 py-25">
      {/* Social Icons Column */}
      <div className="flex flex-col gap-y-6 pt-20 flex-shrink-0 mx-4 md:mx-0">
        <Link
          to="https://github.com/paramveer7267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" className="size-6 shrink-0" alt="GitHub" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/paramveer7267/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" className="size-6 shrink-0" alt="LinkedIn" />
        </Link>
        <Link
          to="https://x.com/pvnation3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.png" className="size-6 shrink-0" alt="Twitter" />
        </Link>
        <Link
          to="https://www.instagram.com/pv_nation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/instagram.png"
            className="size-6 shrink-0"
            alt="Instagram"
          />
        </Link>
      </div>

      {/* Main Content Column */}
      <div className="flex flex-col text-center gap-y-8 md:px-40 max-w-4xl">
        <h3 className="text-gray-600">Welcome to my Portfolio Website!</h3>
        <h1 className="text-5xl text-gray-500 font-bold">Hey I'm</h1>
        <Typewriter
          words={[
            "Paramveer Singh",
            "Computer Science Engineer",
            "Web Developer",
            "Problem Solver",
          ]}
        />
        <p className="text-xl text-gray-600">
          An engineer enthusiast about technology and web development.
          Passionate about learning new things. Loves to play games and read
          books.
        </p>
        <span>
          <button className="bg-[#634ade] hover:bg-[#5139C6] cursor-pointer gap-2 text-white flex mx-auto rounded-md px-6 py-4 items-center">
            Contact Me
            <Send size={22} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Home;
