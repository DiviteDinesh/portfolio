
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container py-4">
        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/divitedinesh" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/divitedinesh" target="_blank" rel="noopener noreferrer" className="github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/divitedinesh" target="_blank" rel="noopener noreferrer" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/49145198_ig" target="_blank" rel="noopener noreferrer" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <p>Email: <a href="mailto:divitedinesh@email.com">divitedinesh@email.com</a></p>
          <p>Phone: <a href="tel:+917396521274">+917396521274</a></p>
        </div>

        {/* Copyright */}
        <div className="copyright">
          &copy; 2025 Dinesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;