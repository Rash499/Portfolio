import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../constants";

const Projects = () => (
  <section id="projects" className="section-pad section-border">
    <div className="section-heading">
      <span className="eyebrow">04 · PROJECTS</span>
      <h2>Selected work, from <span className="gradient-text">infrastructure to applications.</span></h2>
      <p>My portfolio now puts DevOps, cloud infrastructure, automation and reliability work first, while keeping my software and systems projects visible.</p>
    </div>
    <div className="project-grid">
      {PROJECTS.map((project, index) => (
        <motion.article key={project.slug} className={`project-card ${index < 4 ? "featured" : ""}`} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="project-media">
            {project.image ? <img src={project.image} alt={project.title} /> : <div className="project-placeholder"><span>DEVOPS</span><b>Infrastructure</b></div>}
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="project-body">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.technologies.slice(0, 5).map(t => <span key={t}>{t}</span>)}</div>
            <Link className="project-link" to={`/projects/${project.slug}`}>View project details <FaArrowUpRightFromSquare /></Link>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
