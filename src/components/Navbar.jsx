import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to toggle the menu for mobile

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src="./logo.jpg" alt="Logo" className="logo-img"  />
        <h2 className="ms-3 mt-1">Dinesh's Portfolio</h2>
      </div>

      {/* Navigation Section */}
      <div className={`navigations ${isMobile ? "active" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#achievements" className="nav-link">
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
