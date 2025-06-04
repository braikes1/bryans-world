// src/components/Contact.jsx
import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or just want to say hi? Let’s connect!</p>
        <form
          action="https://formspree.io/f/mldndjqr"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
