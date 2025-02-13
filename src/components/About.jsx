import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
     
        {/* About Info */}
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            I'm a passionate <strong>Full Stack Developer</strong> and <strong>Competitive Programmer</strong>,
            currently serving as the Club President of <strong>CodeChef GPREC</strong>. Currently pursuing AI & ML at GPREC, 
            I specialize in <strong>MERN stack development, AI integration, and problem-solving.</strong> 
            <br />
            Apart from coding, I enjoy playing chess and type at <strong>105 WPM(Highest) </strong>. 90 WPM (Average)
          </p>
        </div>
        <div>
        <h3 className="about-info">My Coding Profiles</h3>
        <hr />
          <ul className="text-start">
            <li>Guardian (2163) @ <a href="https://leetcode.com/divite_dinesh" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li>4-Star (1823) @ <a href="https://www.codechef.com/users/dineshd7" target="_blank" rel="noopener noreferrer">CodeChef</a></li>
            <li>Specialist (1488) @ <a href="https://codeforces.com/profile/dineshdcoc" target="_blank" rel="noopener noreferrer">CodeForces</a></li>
            <li>All Coding Profiles: <a href="https://codolio.com/profile/dineshd7" target="_blank" rel="noopener noreferrer">Codolio</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
