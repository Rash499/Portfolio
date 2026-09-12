import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contact = () => (
  <section id="contact" className="section-pad contact-section">
    <div className="contact-card">
      <span className="eyebrow">06 · CONTACT</span>
      <h2>Let's build something <span className="gradient-text">reliable.</span></h2>
      <p>Interested in DevOps, cloud infrastructure, automation or systems engineering opportunities? Feel free to reach out.</p>
      <div className="contact-grid">
        <a href={`mailto:${CONTACT.email}`}><FaEnvelope /><span>{CONTACT.email}</span></a>
        <a href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}><FaPhone /><span>{CONTACT.phoneNo}</span></a>
        <a href="https://www.linkedin.com/in/rashmika-dilmin-a674a1265/" target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
        <a href="https://github.com/Rash499" target="_blank" rel="noreferrer"><FaGithub /><span>GitHub</span></a>
      </div>
      <small>{CONTACT.address} · P.T. Rashmika Dilmin</small>
    </div>
  </section>
);

export default Contact;
