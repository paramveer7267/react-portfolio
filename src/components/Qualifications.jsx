import React from "react";
import "./css/Qualifications.scss"; // Make sure to create a corresponding CSS file

const Qualifications = () => {
  const qualifications = [
    {
      id: 1,
      year: "2020 - Present",
      title: "Master of Computer Science",
      institution: "University Name",
      description: "Specialization in Artificial Intelligence and Machine Learning."
    },
    {
      id: 2,
      year: "2016 - 2020",
      title: "Bachelor of Computer Science",
      institution: "Another University",
      description: "Graduated with Honors in Computer Science."
    },
    // Add more qualifications as needed
  ];

  return (
    <div className="qualifications-container">
      <h2>My Qualifications</h2>
      <div className="timeline">
        {qualifications.map((qual) => (
          <div key={qual.id} className="timeline-item">
            <div className="timeline-year">{qual.year}</div>
            <div className="timeline-content">
              <h3>{qual.title}</h3>
              <h4>{qual.institution}</h4>
              <p>{qual.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
