import React from 'react';
import './css/Skills.scss';  // Define custom styles here

function Skills() {
  const skills = [
    { name: 'C++', icon: 'path/to/cpp.svg' },
    { name: 'HTML5', icon: 'path/to/html5.svg' },
    { name: 'CSS3', icon: 'path/to/css3.svg' },
    { name: 'JavaScript', icon: 'path/to/javascript.svg' },
    { name: 'Bootstrap', icon: 'path/to/bootstrap.svg' },
    { name: 'MongoDB', icon: 'path/to/mongodb.svg' },
    { name: 'Express.js', icon: 'path/to/express.svg' },
    { name: 'React.js', icon: 'path/to/react.svg' },
    { name: 'Node.js', icon: 'path/to/node.svg' },
    { name: 'VS Code', icon: 'path/to/vscode.svg' },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
