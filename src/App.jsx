import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

const Home = () => (
  <div className="site-shell">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />
    <div className="container mx-auto px-5 md:px-8">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>
);

export default App;
