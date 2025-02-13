import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = {
    Frontend: ["react", "html5", "css3", "bootstrap", "javascript"],
    Backend: ["nodejs", "express", "c"],
    Databases: ["mongodb", "postgresql", "redis"],
    Tools: ["git", "github", "npm", "numpy", "pandas"],
    Languages: ["java", "python", "c"],
  };

  // Splitting skills into two parts for desktop layout
  const skillEntries = Object.entries(skills);
  const midIndex = Math.ceil(skillEntries.length / 2); // Split into two halves
  const firstHalf = skillEntries.slice(0, midIndex);
  const secondHalf = skillEntries.slice(midIndex);

  return (
    <section id="skills">
      <h2 className="text-center">My Skills</h2>
      <div className="skills-container">
        {/* Left Side */}
        <div className="skills-column">
          {firstHalf.map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-heading">{category}</h3>
              <div className="skills-grid">
                {skillList.map((skill, idx) => {
                  let second = skill === "npm" ? "npm-original-wordmark" : `${skill}-original`;
                  return (
                    <div className="skill-item" key={idx}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${second}.svg`}
                        alt={skill}
                        className="skill-logo"
                        onError={(e) => (e.target.style.display = "none")} // Hide broken icons
                      />
                      <p className="skill-name">{skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="skills-column">
          {secondHalf.map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-heading">{category}</h3>
              <div className="skills-grid">
                {skillList.map((skill, idx) => {
                  let second = skill === "npm" ? "npm-original-wordmark" : `${skill}-original`;
                  return (
                    <div className="skill-item" key={idx}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${second}.svg`}
                        alt={skill}
                        className="skill-logo"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <p className="skill-name">{skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
