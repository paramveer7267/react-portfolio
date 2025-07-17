// components/Qualification.tsx
import {
  GraduationCap,
  Calendar,
  Rocket,
  CalendarArrowDown,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const education = [
  {
    year: "2025",
    title: "Bachelor in Engineering",
    subtitle: "Bharati Vidyapeeth’s College of Engineering, New Delhi",
    description: "Computer Science Engineering.",
  },
  {
    year: "2021",
    title: "High School",
    subtitle: "St. Peter's Higher Secondary School",
    description: "Studied PCM, Computer Science, and English.",
  },
  {
    year: "2019",
    title: "Secondary School",
    subtitle: "St. Peter's Higher Secondary School",
    description: "",
  },
];
const certificates = [
  {
    year: "2024",
    title: "Full Stack Web Developer",
    link: "https://drive.google.com/file/d/1wSYqp_zfi3pvkd_jYCoPbkFPx2kZOUqk/view?usp=drive_link",
    button: "Web Dev",
    description:
      "HTML , CSS , Javascript , Nodejs , Express , MongoDB , React from Udemy",
  },
  {
    year: "2023",
    title: "Data structures & Algorithms",
    link: "https://drive.google.com/file/d/11iPH1yU55OkLiwCtYUu5qKWCnqK6x9xA/view?usp=drive_link",
    button: "DSA",
    description: "In C++ by Coding Ninjas",
  },
  {
    year: "2023",
    title: "Programming in C++",
    link: "https://drive.google.com/file/d/1ZhcQ39nmGDnAqy0Vwo9Gnhukt7vJ6ZDH/view?usp=drive_link",
    button: "C++",
    description: "By Coding Ninjas",
  },
];

const Qualification = () => {
  const [calHover, setCalHover] = React.useState(null);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return (
    <div
      id="qualification"
      className="flex flex-col items-center gap-y-8 max-w-5xl mx-auto py-25"
    >
      <h1 className="text-5xl font-semibold">Qualification</h1>
      <p className="text-md text-gray-600">My Personal Journey</p>
      <div className="flex gap-30">
        <div>
          <div className="flex gap-2 text-[#634ade]">
            <GraduationCap size={35} />
            <h1 className="text-3xl">Education</h1>
          </div>
          <div className="flex justify-center min-h-screen py-10 gap-x-10">
            <div className="relative flex flex-col items-center">
              {/* Timeline Items */}
              {education.map(({ year }) => (
                <div key={year} className="flex flex-col items-center z-10">
                  {/* Top connector */}
                  <div className="w-px h-20 bg-indigo-400/70" />

                  {/* Icon and Year */}
                  <div className="flex flex-row items-center bg-gray-50 py-2 px-2 z-10">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600">
                      {year}
                    </span>
                  </div>
                  {/* Bottom connector */}
                  <div className="w-px h-14 bg-indigo-400/70" />
                </div>
              ))}
              <Rocket />
            </div>
            <div>
              {education.map(({ title, subtitle, description }, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="p-4 rounded-xl shadow-xl
                     transition-all duration-200 cursor-pointer w-80 min-h-35 mb-10"
                  >
                    <h1 className="text-xl py-4">{title}</h1>
                    <p className="text-gray-400 text-sm">{subtitle}</p>

                    <div>
                      <div
                        className={`mt-2 transform transition-all duration-400 ease-in${
                          hoveredIndex === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-70 h-0 overflow-hidden"
                        }`}
                      >
                        {description && (
                          <>
                            <hr className="my-2" />
                            <p className="text-sm text-gray-600">
                              {description}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2 text-[#634ade] ">
            <CalendarArrowDown size={35} />
            <h1 className="text-3xl">Certificates</h1>
          </div>
          <div className="flex justify-center min-h-screen py-10 gap-x-10">
            <div className="relative flex flex-col items-center">
              {/* Timeline Items */}
              {certificates.map(({ year }) => (
                <div key={year} className="flex flex-col items-center z-10">
                  {/* Top connector */}
                  <div className="w-px h-20 bg-indigo-400/70" />

                  {/* Icon and Year */}
                  <div className="flex flex-row items-center bg-gray-50 py-2 px-2 z-10">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600">
                      {year}
                    </span>
                  </div>
                  {/* Bottom connector */}
                  <div className="w-px h-14 bg-indigo-400/70" />
                </div>
              ))}
              <Rocket />
            </div>
            <div>
              {certificates.map(
                ({ title, button, description, link }, index) => (
                  <div key={index} className="flex flex-col items-center z-10">
                    <div
                      key={index}
                      onMouseEnter={() => setCalHover(index)}
                      onMouseLeave={() => setCalHover(null)}
                      className="p-4 rounded-xl shadow-xl
                     transition-all duration-200 cursor-pointer w-80 min-h-35 mb-10"
                    >
                      <h1 className="text-xl py-4">{title}</h1>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={link}
                        className="text-white rounded-lg text-sm bg-[#634ade] px-4 py-2"
                      >
                        {button}
                      </Link>
                      <div>
                        <div
                          className={`mt-4 transform transition-all duration-400 ease-in${
                            calHover === index
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-70 h-0 overflow-hidden"
                          }`}
                        >
                          <hr className="my-2" />
                          <p className="text-sm text-gray-600">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
