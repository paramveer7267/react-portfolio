import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolios = [
  {
    date: "January 2026",
    title: "KC Healthcare",
    description:
      "Developed a responsive medical platform for KC healthcare with booking of the medical operations and services",
    link: "https://kchealthcare.clinic/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/kchealthcare.png",
  },
  {
    date: "November 2025",
    title: "Afeska",
    description:
      "Designed and developed Afeska, a modern agency website showcasing web development, mobile app solutions, and digital services with a responsive and user-focused design.",
    link: "https://www.afeska.com/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/afeska.png",
  },
  {
    date: "September 2025",
    title: "MobileZone",
    description:
      "Developed a responsive e-commerce platform for MobileZone with repair booking, device trading, and real-time inventory management.",
    link: "https://mobilezone.co.nz/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/mobilezone.png",
  },
  {
    date: "June 2025",
    title: "FAMFLIX - Video Streaming App",
    description:
      "Developed a modern movie streaming web app built for film lovers.",
    link: "https://famflix-1ssd.onrender.com/login?email=test@example.com&password=Test@123",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/famflix.png",
  },
  {
    date: "April 2025",
    title: "Trackify - Smart Ticket Management System",
    description:
      "Design a Ticket management system to create, assign, delete tickets respective of the role of the user.",
    link: "https://trackify-o7sp.onrender.com/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/Trackify.png",
  },
  {
    date: "September 2024",
    title: "Taskify - A TodoApp",
    description:
      "Built a Todo App for tasks management with CRUD capabilities.",
    link: "https://todoapp-frontend-k3ut.onrender.com/",
    img: "https://raw.githubusercontent.com/paramveer7267/logos/main/taskify.png",
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

      <div className="shadow-2xl max-w-4xl min-h-[420px] flex flex-col px-4 mx-2 rounded-2xl md:pl-100 py-10 md:pr-20">
        <AnimatePresence mode="wait">
          {portfolios.map(({ date, title, description, link, img }, index) =>
            showIndex === index ? (
              <>
                <div className="shadow-2xl left-[-20px] md:absolute top-40 rounded-xl">
                  <img
                    src={img}
                    className="md:w-110 md:h-80 w-full h-60 rounded-xl"
                    alt={title}
                  />
                </div>
                <motion.div
                  key={index}
                  className="flex gap-10 "
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="gap-y-7 flex flex-col pt-4 items-center">
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
                      className="text-2xl font-semibold text-center"
                    >
                      {title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-md text-gray-500 text-center"
                    >
                      {description}
                    </motion.p>

                    <motion.a
                      transition={{ duration: 0.5, delay: 0.6 }}
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
            ) : null,
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
