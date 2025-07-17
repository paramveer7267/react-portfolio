import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolios = [
  {
    date: "April 2025",
    title: "Trackify - Smart Ticket Management System",
    description:
      "Design a Ticket management system to create, assign, delete tickets respective of the role of the user.",
    link: "https://trackify-o7sp.onrender.com/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/Trackify.png",
  },
  {
    date: "July 2024",
    title: "FAMFLIX - Video Streaming App",
    description:
      "Developed a modern movie streaming web app built for film lovers.",
    link: "https://famflix-1ssd.onrender.com/login?email=test@example.com&password=Test@123",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/famflix.png",
  },
  {
    date: "May 2024",
    title: "React Project Manager",
    description:
      "Manage your projects and add tasks for the specific projects.",
    link: "https://project-management-react-coyy39rtl-paramveer7267s-projects.vercel.app/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/reactproject",
  },
];

const Portfolio = () => {
  const [showIndex, setIndex] = useState(0);

  return (
    <div
      id="portfolio"
      className="flex flex-col items-center gap-y-8 max-w-5xl mx-auto pb-20 relative"
    >
      <h1 className="text-5xl font-semibold">Portfolio</h1>
      <p className="text-md text-gray-600">My Recent Works</p>

      <div className="shadow-xl max-w-4xl min-h-[420px] flex rounded-2xl pl-100 py-10 pr-30">
        <AnimatePresence mode="wait">
          {portfolios.map(({ date, title, description, link, img }, index) =>
            showIndex === index ? (
              <>
                <div className="shadow-2xl left-[-40px] absolute top-40 rounded-xl">
                  <img
                    src={img}
                    className="w-120 h-80 rounded-xl"
                    alt={title}
                  />
                </div>
                <motion.div
                  key={index}
                  className="flex gap-10 items-start"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="gap-y-7 flex flex-col">
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg text-gray-400"
                    >
                      {date}
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-2xl font-semibold"
                    >
                      {title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-md text-gray-500"
                    >
                      {description}
                    </motion.p>

                    <motion.a
                      initial={{ opacity: 0, y:0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      href={link}
                      target="_blank"
                      rel="noopener"
                      className="bg-[#634ade] items-center rounded-4xl px-8 py-4 shadow-[0_4px_20px_#634ade80] transform transition-all cursor-pointer hover:scale-110 flex w-40 gap-2 text-white justify-center"
                    >
                      <p className="text-lg">Live</p>
                      <Play className="size-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Bottom navigation buttons */}
      <div className="flex gap-6">
        {[...Array(portfolios.length)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white rounded-lg bg-[#634ade] cursor-pointer transform transition-all hover:scale-120 ${
              showIndex === index ? "scale-120" : ""
            }`}
            onClick={() => setIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
