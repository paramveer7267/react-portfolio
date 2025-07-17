import { GraduationCap, BadgeCheck, Calendar } from "lucide-react";

const Qualification = () => {
  return (
    <div id="qualification" className="flex flex-col items-center gap-y-8 max-w-5xl mx-auto py-25">
      <h1 className="text-5xl font-semibold">Qualification</h1>
      <p className="text-md text-gray-600">My Personal Journey</p>
      <div className="bg-[#f9f9fc] min-h-screen p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Headings */}
          <div className="flex flex-col md:flex-row justify-center gap-12 text-center md:text-left mb-10">
            <div className="flex items-center gap-2 text-[#634ade] text-2xl font-semibold">
              <GraduationCap />
              Education
            </div>
            <div className="flex items-center gap-2 text-[#634ade] text-2xl font-semibold">
              <BadgeCheck />
              Certificates
            </div>
          </div>

          {/* Timeline Container */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Education Timeline */}
            <div className="w-full md:w-1/2 space-y-8 relative">
              <div className="absolute left-2 top-0 h-full border-l-2 border-[#634ade]"></div>

              {[
                {
                  year: 2025,
                  title: "Bachelor in Engineering",
                  place:
                    "Bharati Vidyapeeth’s College of Engineering, New Delhi",
                },
                {
                  year: 2021,
                  title: "High School",
                  place: "St. Peter's Higher Secondary School",
                },
                {
                  year: 2019,
                  title: "Secondary School",
                  place: "St. Peter's Higher Secondary School",
                },
              ].map((edu, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 text-gray-400">
                    <Calendar size={18} />
                  </div>
                  <p className="text-sm text-gray-500 font-semibold">
                    {edu.year}
                  </p>
                  <div className="mt-1 bg-white shadow-md rounded-xl p-5">
                    <h3 className="text-lg font-semibold">{edu.title}</h3>
                    <p className="text-gray-500">{edu.place}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Timeline */}
            <div className="w-full md:w-1/2 space-y-8 relative">
              <div className="absolute left-2 top-0 h-full border-l-2 border-[#634ade]"></div>

              {[
                {
                  year: 2024,
                  title: "Full Stack Web Developer",
                  badge: "Web Dev",
                },
                {
                  year: 2023,
                  title: "Data Structures & Algorithms",
                  badge: "DSA",
                },
                {
                  year: 2023,
                  title: "Programming in C++",
                  badge: "C++",
                },
              ].map((cert, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 text-gray-400">
                    <Calendar size={18} />
                  </div>
                  <p className="text-sm text-gray-500 font-semibold">
                    {cert.year}
                  </p>
                  <div className="mt-1 bg-white shadow-md rounded-xl p-5">
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <span className="inline-block bg-[#634ade] text-white text-sm font-semibold rounded-lg px-3 py-1 mt-2">
                      {cert.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
