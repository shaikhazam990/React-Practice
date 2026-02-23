import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="contact-text">
          Have a question or want to work together? Drop a message 👇
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;