import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCloud,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Propic.jpg";

const Hero = () => (
  <section className="hero section-pad">
    <style jsx>{`
      /* Status Card (Open to Opportunities) - Increased Size */
      .status-card {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        padding: 12px 22px;
        border-radius: 9999px;
        font-size: 1.05rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.95);
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(34, 197, 94, 0.35);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }

      .status-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #22c55e;
        box-shadow: 0 0 12px #22c55e;
        flex-shrink: 0;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
        }
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
      }

      /* Education Sub-section Styles */
      .hero-education {
        margin-top: 20px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .edu-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }

      .edu-icon {
        color: #3b82f6;
        font-size: 1.1rem;
        margin-top: 3px;
        flex-shrink: 0;
      }

      .edu-details {
        display: flex;
        flex-direction: column;
      }

      .edu-degree {
        font-weight: 600;
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.95);
      }

      .edu-school {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.65);
      }

      .edu-year {
        font-size: 0.78rem;
        color: #3b82f6;
        font-weight: 500;
        margin-left: 6px;
      }

      /* Hero Pills Container & Base Styles */
      .hero-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
        max-width: 760px;
      }

      .hero-pills span {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 11px 17px;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: 600;
        font-family: "Manrope", sans-serif;
        letter-spacing: 0.01em;
        color: inherit;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          background 0.25s ease,
          box-shadow 0.25s ease;
      }

      .hero-pills span svg {
        font-size: 1.15rem;
        flex-shrink: 0;
        transition: transform 0.25s ease;
      }

      .hero-pills span:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .hero-pills span:hover svg {
        transform: scale(1.1);
      }

      /* Icon Colors & Matching Soft Hover Glows */
      .hero-pills .pill-devops svg {
        color: #ff6b35;
      }
      .hero-pills .pill-devops:hover {
        box-shadow: 0 0 15px rgba(255, 107, 53, 0.2);
      }

      .hero-pills .pill-cloud svg {
        color: #0078d4;
      }
      .hero-pills .pill-cloud:hover {
        box-shadow: 0 0 15px rgba(0, 120, 212, 0.2);
      }

      .hero-pills .pill-web svg {
        color: #eab308;
      }
      .hero-pills .pill-web:hover {
        box-shadow: 0 0 15px rgba(234, 179, 8, 0.2);
      }

      .hero-pills .pill-infra svg {
        color: #8b9bb4;
      }
      .hero-pills .pill-infra:hover {
        box-shadow: 0 0 15px rgba(139, 155, 180, 0.2);
      }

      .hero-pills .pill-automation svg {
        color: #a855f7;
      }
      .hero-pills .pill-automation:hover {
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
      }

      .hero-pills .pill-linux svg {
        color: #fcc624;
      }
      .hero-pills .pill-linux:hover {
        box-shadow: 0 0 15px rgba(252, 198, 36, 0.2);
      }

      .hero-pills .pill-network svg {
        color: #00b8d9;
      }
      .hero-pills .pill-network:hover {
        box-shadow: 0 0 15px rgba(0, 184, 217, 0.2);
      }

      .hero-pills .pill-admin svg {
        color: #22c55e;
      }
      .hero-pills .pill-admin:hover {
        box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
      }

      .hero-pills .pill-devsecops svg {
        color: #ef4444;
      }
      .hero-pills .pill-devsecops:hover {
        box-shadow: 0 0 15px rgba(239, 68, 68, 0.2);
      }

      .hero-pills .pill-security svg {
        color: #06b6d4;
      }
      .hero-pills .pill-security:hover {
        box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
      }

      /* Mobile Responsiveness */
      @media (max-width: 720px) {
        .status-card {
          padding: 9px 16px;
          font-size: 0.9rem;
        }

        .hero-pills {
          gap: 9px;
          margin-top: 22px;
        }

        .hero-pills span {
          padding: 9px 13px;
          font-size: 0.85rem;
          border-radius: 10px;
        }

        .hero-pills span svg {
          font-size: 1rem;
        }
      }
    `}</style>

    <div className="hero-copy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="eyebrow">
          COMPUTER SCIENCE GRADUATE · DEVOPS / CLOUD
        </span>

        <h1>
          Building{" "}
          <span className="gradient-text">reliable infrastructure</span>{" "}
          for modern applications.
        </h1>

        <p className="hero-lead">{HERO_CONTENT}</p>

        {/* Education Subsection */}
        <div className="hero-education">
          <div className="edu-item">
            <FaGraduationCap className="edu-icon" />
            <div className="edu-details">
              <span className="edu-degree">
                BSc in Computer Science
                <span className="edu-year">(2023 – 2026)</span>
              </span>
              <span className="edu-school">
                University of Colombo School of Computing
              </span>
            </div>
          </div>

          <div className="edu-item">
            <FaGraduationCap className="edu-icon" />
            <div className="edu-details">
              <span className="edu-degree">
                Physical Science
                <span className="edu-year">(2018 – 2020)</span>
              </span>
              <span className="edu-school">Richmond College, Galle</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore projects <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's connect
          </a>
        </div>

        <div className="hero-pills">
          <span className="pill-devops">
            <FaCogs /> DevOps
          </span>
          <span className="pill-cloud">
            <FaCloud /> Cloud
          </span>
          <span className="pill-devsecops">
            <FaShieldAlt /> DevSecOps
          </span>
          <span className="pill-web">
            <FaCode /> Web Development
          </span>
          <span className="pill-infra">
            <FaServer /> Infrastructure
          </span>
          <span className="pill-automation">
            <FaCogs /> Automation
          </span>
          <span className="pill-linux">
            <SiLinux /> System Engineering
          </span>
          <span className="pill-network">
            <FaNetworkWired /> Networking
          </span>
          <span className="pill-security">
            <FaShieldAlt /> Cloud Security
          </span>
          <span className="pill-admin">
            <FaTools /> System Administration
          </span>
        </div>
      </motion.div>
    </div>

    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-frame">
        <div className="frame-grid" />
        <img src={profilePic} alt="P.T. Rashmika Dilmin" />

        <div className="status-card">
          <span className="status-dot" />
          Open to DevOps & Cloud opportunities
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;