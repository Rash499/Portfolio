import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/RDlogo.jpg";

const NavBar = () => (
  <nav className="nav-bar">
    <Link to="/" className="brand">
      <img src={logo} alt="RD logo" />
      <span>Rashmika Dilmin<span className="accent">.</span></span>
    </Link>
    <div className="nav-links">
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#projects">Projects</a>
      <a href="/#certifications">Certifications</a>
      <a href="/#contact">Contact</a>
    </div>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/rashmika-dilmin-a674a1265/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/Rash499" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.instagram.com/rashmika_dilmith/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
    </div>
  </nav>
);

export default NavBar;
