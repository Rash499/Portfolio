import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => (
  <section id="experience" className="section-pad section-border">
    <div className="section-heading">
      <span className="eyebrow">03 · EXPERIENCE</span>
      <h2>Hands-on <span className="gradient-text">cloud & systems</span> experience.</h2>
    </div>
    <div className="timeline">
      {EXPERIENCES.map((item, index) => (
        <motion.article className="timeline-item" key={item.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
          <div className="timeline-date">{item.year}</div>
          <div className="timeline-content">
            <h3>{item.role}</h3><span className="company">{item.company}</span>
            <p>{item.description}</p>
            <div className="tags">{item.technologies.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
