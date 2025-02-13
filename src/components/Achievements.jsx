import { useState, useEffect } from "react";
import "./Achievements.css";

const achievements = [
  {
    image: "/tcscodevitas12.png",
    text: "Qualified for TCS CodeVita Season 12",
  },
  {
    image: "/codex2o.jpg",
    text: "🥇 1st place – CODEX 2.0",
  },
  {
    image: "/solasta.jpg",
    text: "🥇 1st place – Coders Sympo (IIITDM Kurnool)",
  },
  {
    image: "/2nd.jpg", 
    text: "🥈 2nd place – Code Symposium",
  },
  {
    image: "/kreative.jpg ",
    text: "🥈 2nd Prize – KREATIVE 2K24 (JIGNASA 2K24)",
  },
  {
    image: "/aptpo.jpg",
    text: "🏆 3rd place – Hackathon 2024 (CVCORP & APTPO Consortium)",
  },
  {
    image: "/svr.jpg",
    text: "🥉 3rd place – Coding Gala (GDG_ONCAMPUS_SVREC)",
  },
  {
    image: "/tcscodevitas11.png", 
    text: " Qualified Round 2 of TCS CodeVita Season 11 (Rank 1575 globally)",
  },
  
];
const Achievements = () => {
  const [index, setIndex] = useState(0);

  // Auto-Slideshow Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Move to next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="flex justify-content-center align-content-center">
        <h2 className="text-center pb-5">Achievements</h2>
        <div className="slideshow-container">
  {/* Slides */}
  {achievements.map((achievement, i) => (
    <div key={i} className={`slides ${i === index ? "active" : ""}`}>
      <img src={achievement.image} alt={`Achievement ${i + 1}`} />
      <div className="text">{achievement.text}</div>
    </div>
  ))}

  {/* Navigation Buttons */}
  <div className="navigation">
    <button className="nav-btn left" onClick={prevSlide}>
      &#10094;
    </button>
    <button className="nav-btn right" onClick={nextSlide}>
      &#10095;
    </button>
  </div>
</div>

{/* Move Dots Below the Slideshow */}
<div className="dots">
  {achievements.map((_, i) => (
    <span
      key={i}
      className={`dot ${i === index ? "active" : ""}`}
      onClick={() => setIndex(i)}
    ></span>
  ))}
</div>

      </div>
    </section>
  );
};

export default Achievements;
