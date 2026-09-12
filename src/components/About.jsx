import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT, FOCUS_AREAS } from "../constants";
import aboutImg from "../assets/infrastructure.png";

const About = () => (
  <section id="about" className="section-pad section-border">
    <div className="section-heading">
      <span className="eyebrow">01 · ABOUT</span>
      <h2>Infrastructure is where <span className="gradient-text">development meets operations.</span></h2>
    </div>
    <div className="about-grid">
      <motion.div className="about-image" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} viewport={{ once: true }}>
        <img src={aboutImg} alt="Linux and systems" />
      </motion.div>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} viewport={{ once: true }}>
        <p className="large-copy">{ABOUT_TEXT}</p>
        <div className="focus-grid">
          {FOCUS_AREAS.map((item) => (
            <div className="focus-card" key={item.label}>
              <h3>{item.label}</h3><p>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
