import { Download } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-y-8 max-w-5xl mx-auto py-15"
    >
      <h1 className="text-5xl font-semibold">About</h1>
      <p className="text-md text-gray-600">My Introduction</p>
      <img src="/me.jpg" alt="" className="w-90 h-110 rounded-xl" />
      <p className="text-gray-500 text-xl">
        I possess a diverse skill set that includes proficiency in C++,
        JavaScript, Web development and WordPress allowing me to create dynamic
        and functional websites and applications. My strong foundation in data
        structures and algorithms (C++) showcases my problem-solving abilities.
        Moreover, my excellent communication, leadership, and sales and
        marketing skills enable me to effectively convey ideas, guide teams, and
        promote products or services, making me an asset in collaborative
        environments. Aside from that I like to read, draw and play games.
      </p>
      <div className="text-center">
        <h2 className="font-bold text-2xl">05+</h2>
        <p className="text-gray-400">Completed Projects</p>
      </div>
      <span>
        <Link
          to="https://drive.google.com/file/d/1gDAMERa_LguRk1Mnx7tUfV92Wh0NzrWj/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          <button className="bg-[#634ADE] hover:bg-[#5139C6] hover:scale-110 transition-all  cursor-pointer gap-2 text-white flex mx-auto rounded-md px-6 py-4 items-center">
            Download CV <Download size={22} />
          </button>
        </Link>
      </span>
    </div>
  );
};

export default About;
