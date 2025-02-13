import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    image: "./gprec-clubs.png",
    title: "GPREC CLUBS",
    description: "A dynamic college clubs & event management system with AI-powered search, built using MERN stack.",
    repoLink: "https://github.com/DiviteDinesh/gprec-clubs-events",

  },
  {
    id: 2,
    image: "/dev-rooms.png",
    title: "Dev Rooms",
    description: "Dev Rooms is a powerful and collaborative development and chat platform with AI chatbot, built using the MERN stack.",
    repoLink: "https://github.com/DiviteDinesh/dev_rooms-frontend",
    liveLink: "https://dev-rooms-frontend.onrender.com/"
  },
  {
    id: 3,
    image: "/hackathon_kreative_2k25.jpeg",
    title: "AI Career Path Generator",
    description: "An AI-powered tool that suggests personalized career paths based on user skills and interests. Built using Full Stack technologies with AI integration.",
    repoLink: "https://github.com/DiviteDinesh/Hackathon_kreative_2025",
  },
  {
    id: 4,
    image: "/portfolio.png",  
    title: "Portfolio",
    description: "A personal portfolio website.",
    repoLink: "https://github.com/DiviteDinesh/Portfolio"
  }   
];

const Projects = () => {
  return (
    <section className="projects d-flex justify-content-center align-content-center text-center" id="projects">
      <div>
        <h2 className="projects-title">My Projects</h2>
        <div className="container">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <div className="imgBx">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="content">
                <div className="contentBx">
                  <h3>
                    {project.title} <br />
                    <span>{project.description}</span>
                  </h3>
                </div>
                <ul className="sci">
                  <li>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer"  >
                      <i className="fab fa-github"></i> Repo
                    </a>
                  </li>
                  {project.liveLink && (
                    <li>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> Live
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
