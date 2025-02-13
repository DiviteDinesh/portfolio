import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
const resumeLink = import.meta.env.VITE_RESUME_LINK;
const typingTexts = [
  "A Full Stack Web Developer.",
  "A MERN Developer.",
  "A Java Fullstack Developer.",
  "A Machine Learning Engineer.",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTexts[index];

      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % typingTexts.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <>
      <Navbar />
      {/* Home Section */}
      <section className="home" id="home">
        <div className="intro title">
          <p>Hello, I am</p>
          <h1 className="title">Divite Dinesh</h1>

          {/* Typing Effect */}
          <p className="typed-text">
            {text}
            <span className="cursor">|</span>
          </p>
        </div>

        {/* Profile Picture */}
        <div className="main-picture">
          <img src="./logo.jpg" alt="Profile" />
        </div>
        <div className="w-50 btn-container d-flex justify-content-evenly align-items-center pe-5 pt-5">
          <button className="btn btn-outline-success">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
          <button className="btn btn-outline-success">
            <a href="mailto:divitedinesh@gmail.com">Hire Me</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
