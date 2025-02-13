import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    image: "./gprec-clubs.png",
    title: "GPREC CLUBS",
    role: "Full Stack Developer",
    repoLink: "https://github.com/DiviteDinesh/gprec-clubs-events",

  },
  {
    id: 2,
    image: "/dev-rooms.png",
    title: "Dev Rooms",
    role: "Full Stack Developer",
    repoLink: "https://github.com/DiviteDinesh/dev_rooms-frontend",
    liveLink: "https://dev-rooms-frontend.onrender.com/"
  },
  {
    id: 3,
    image: "/hackathon_kreative_2k25.jpeg",
    title: "AI Carrier Path Generator",
    role: "Full Stack, AI Developer,",
    repoLink: "https://github.com/DiviteDinesh/Hackathon_kreative_2025",
  },
  {
    id: 4,
    image: "/portfolio.png",  
    title: "Portfolio",
    role: "Frontend Developer",
    repoLink: "https://github.com/DiviteDinesh/DiviteDinesh"
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
                    <span>{project.role}</span>
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
