import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Link, Element, scroller } from "react-scroll";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Background effects */}
      <div className="grid" style={{ position: "fixed", top: "20%", left: "10%", width: "100%", height: "100%" }}>
        <div className="blur move-1"></div>
      </div>
      <div className="grid" style={{ position: "fixed", top: "25%", left: "-10%", width: "100%", height: "100%" }}>
        <div className="blur move-2"></div>
      </div>

      {/* Sections with smooth scrolling */}
      <Element name="home" className="section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Home />
        </motion.div>
      </Element>

      <Element name="about" className="section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <About />
        </motion.div>
      </Element>

      <Element name="skills" className="section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Skills />
        </motion.div>
      </Element>

      <Element name="projects" className="section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Projects />
        </motion.div>
      </Element>

      <Element name="achievements" className="section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Achievements />
        </motion.div>
      </Element>

      <Footer />
    </>
  );
}

export default App;
