import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => (
  <section id="certifications" className="section-pad section-border">
    <div className="section-heading">
      <span className="eyebrow">05 · CERTIFICATIONS</span>
      <h2>Cloud & DevOps <span className="gradient-text">credentials.</span></h2>
      <p>Certification cards are ready for the certificate images you will add next.</p>
    </div>
    <div className="cert-grid">
      {CERTIFICATIONS.map((cert, i) => (
        <motion.article className="cert-card" key={cert.code} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }} viewport={{ once: true }}>
          <div className="cert-image">
            {cert.image ? <img src={cert.image} alt={`${cert.title} certificate`} /> : <><FaAward /><span>Certificate image</span></>}
          </div>
          <div><span className="cert-code">{cert.code}</span><h3>{cert.title}</h3><p>{cert.issuer}</p></div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Certifications;
