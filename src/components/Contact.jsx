import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { portfolioMeta } from "../data/portfolioData";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyqmebp",
        "template_fqlrk4v",
        form.current,
        "mQosC8-eUghhneaA5"
      )
      .then(() => {
        setSubmitted(true);
        form.current.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch(() => {
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <section className="contact-section section-wrap" id="contact">

      <Reveal>
        <div className="section-heading">
          <h2>Contact Me</h2>
          <p className="section-intro">
            Open to junior full-stack developer opportunities, internships, and collaboration.
          </p>
        </div>
      </Reveal>

      <div className="contact-container">

        <Reveal delay={100}>
          <div className="contact-info">

            <h3>Let's work together</h3>

            <p>
              If you have a project, internship, or developer role available,
              feel free to contact me. I’m always open to discussing new
              opportunities and contributing to innovative software projects.
            </p>

            <div className="contact-details">
              <p>
                <strong>Email:</strong> {portfolioMeta.email}
              </p>

              <p>
                <strong>Phone:</strong> {portfolioMeta.phone}
              </p>

              <p>
                <strong>Location:</strong> {portfolioMeta.location}
              </p>
            </div>

            <SocialLinks />

          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="contact-form">

            <form ref={form} onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>

              {submitted && (
                <p className="success-message">
                  Thank you! Your message has been sent.
                </p>
              )}

            </form>

          </div>
        </Reveal>

      </div>

    </section>
  );
};

export default Contact;