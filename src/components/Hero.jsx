import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCloud, FaCode, FaServer } from "react-icons/fa";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Propic.jpg";

const Hero = () => (
  <section className="hero section-pad">
    <div className="hero-copy">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <span className="eyebrow">COMPUTER SCIENCE GRADUATE · DEVOPS / CLOUD</span>
        <h1>Building <span className="gradient-text">reliable infrastructure</span> for modern applications.</h1>
        <p className="hero-lead">{HERO_CONTENT}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore projects <FaArrowRight /></a>
          <a href="#contact" className="btn btn-ghost">Let's connect</a>
        </div>
        <div className="hero-pills">
          <span><FaCloud /> Azure</span>
          <span><FaServer /> Terraform</span>
          <span><FaCode /> CI/CD</span>
        </div>
      </motion.div>
    </div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}>
      <div className="profile-frame">
        <div className="frame-grid" />
        <img src={profilePic} alt="P.T. Rashmika Dilmin" />
        <div className="status-card"><span className="status-dot" /> Open to DevOps & Cloud opportunities</div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
