import "./Skills.css";

const Skills = () => {
  const skills = [

    "html5", "css3", "javascript", "react",
    "nodejs", "express", "mongodb", "postgresql",
    "python", "numpy", "pandas", "git", "github",
    "npm", "redis", "java", "bootstrap", "c"



  ];

  return (
    <section id="skills">
      <h2 className="text-center">My Skills</h2>
      <div className="skills pt-5">
        {skills.map((skill, index) => {
          let second = skill === "npm" ? "npm-original-wordmark" : `${skill}-original`;
          return (
            <img
              key={index}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${second}.svg`}
              alt={skill}
              className="skill-logo"
              
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
