import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) return (
    <div className="site-shell detail-page"><div className="container mx-auto px-5 md:px-8">
      <Link to="/" className="back-link"><FaArrowLeft /> Back to portfolio</Link>
      <h1>Project not found</h1>
    </div></div>
  );

  return (
    <div className="site-shell detail-page">
      <div className="container mx-auto px-5 md:px-8">
        <header className="detail-header">
          <Link to="/#projects" className="back-link"><FaArrowLeft /> Back to projects</Link>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.overview}</p>
          <div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
        </header>

        <div className="detail-layout">
          <main>
            <section className="detail-section">
              <span className="eyebrow">01 · OVERVIEW</span>
              <h2>What I built</h2>
              <p>{project.overview}</p>
            </section>
            <section className="detail-section">
              <span className="eyebrow">02 · IMPLEMENTATION</span>
              <h2>Technical details</h2>
              <ul className="detail-list">{project.details.map((detail, i) => <li key={i}>{detail}</li>)}</ul>
            </section>
            <section className="detail-section">
              <span className="eyebrow">03 · ARCHITECTURE</span>
              <h2>Architecture</h2>
              <pre className="architecture">{project.architecture}</pre>
            </section>
            <section className="detail-section">
              <span className="eyebrow">04 · VISUALS</span>
              <h2>Project diagrams & screenshots</h2>
              <p className="muted">The portfolio is prepared for your project-specific diagrams and screenshots. Replace the placeholders below with the images you provide.</p>
              <div className="visual-grid">{project.imageSlots.map((slot, i) => <div className="visual-placeholder" key={i}><span>IMAGE / DIAGRAM</span><strong>{slot}</strong></div>)}</div>
            </section>
          </main>
          <aside className="detail-sidebar">
            <div className="side-card">
              <span className="eyebrow">STACK</span>
              <div className="side-tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div>
            </div>
            {project.github && <a className="btn btn-primary full" href={project.github} target="_blank" rel="noreferrer"><FaGithub /> View on GitHub</a>}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
