import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { portfolioMeta } from "../data/portfolioData";
import Reveal from "./Reveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_pyqmebp",
        "template_fqlrk4v",
        form.current,
        "vFekAJmF97f0MMED9"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.current.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch(() => {
        setLoading(false);
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <section className="contact-section section-wrap" id="contact">

      <Reveal>
        <div className="section-heading">
          <h2>Contact Me</h2>
          <p className="section-intro">
            Get in touch. I am open to discussing junior developer roles, collaborations, and internship opportunities.
          </p>
        </div>
      </Reveal>

      <div className="contact-container">

        <Reveal delay={100}>
          <div className="contact-info glass-panel">

            <div>
              <h3>Let's build something together</h3>
              <p>
                If you have a project, full-time position, or collaboration in mind, feel free to drop a message. I will get back to you as soon as possible.
              </p>
            </div>

            <div className="contact-details">
              
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-text">
                  <label>Email</label>
                  <span>{portfolioMeta.email}</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <label>Phone</label>
                  <span>{portfolioMeta.phone}</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-text">
                  <label>Location</label>
                  <span>{portfolioMeta.location}</span>
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="contact-form glass-panel">

            <form ref={form} onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {submitted && (
                <p className="success-message">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#34d399' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Thank you! Your message has been sent successfully.
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