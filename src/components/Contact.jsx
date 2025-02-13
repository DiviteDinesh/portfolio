import React from "react";
import "./Contact.css"; // Optional: Add styles

const Contact = () => {
  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <p>Interested in working together? Let's connect!</p>
      <form action="https://formspree.io/f/mkgovypa" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
