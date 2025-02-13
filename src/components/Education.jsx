import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in AI & ML",
      institution: "XYZ University",
      year: "2023 - Present",
      details: "Studying AI and ML with a focus on deep learning, NLP, and data science.",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "ABC School",
      year: "2021 - 2023",
      details: "Specialized in Mathematics and Computer Science with a strong focus on problem-solving.",
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "ABC School",
      year: "2019 - 2021",
      details: "Completed the standard curriculum with a strong foundation in science and mathematics.",
    },
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="education-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
