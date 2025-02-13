
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Grid Background with Two Green Radial Gradients */}
 

      <div className="about-container">
        {/* Profile Image */} 
        <div className="about-img">
          <img src="/main-pic.jpg" alt="Profile" />
        </div>

        {/* About Info */}
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            I am a highly motivated individual with a strong interest in competitive programming.
            As the club president of <span>CodeChef GPREC</span>, I lead and inspire fellow students in their coding journeys.
          </p>
          <p>
            I am currently pursuing my undergraduate studies in <span>Artificial Intelligence and Machine Learning</span> at GPREC.
            Additionally, I enjoy playing chess and have a <span>typing speed of 105 WPM</span>.
          </p>
          <p>
            Guardian (2163) @ <a href="https://leetcode.com/divite_dinesh">LeetCode</a> 
            <br />
            4 ⭐ (1823) @ <a href="https://www.codechef.com/users/dineshd7" >CodeChef</a> 
            <br />
            Specialist (1488) @ <a href="https://codeforces.com/profile/dineshdcoc">CodeForces</a> 
            <br />
            All Coding Profiles <a href="https://codolio.com/profile/dineshd7">Codolio (All Coding Profiles)</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
