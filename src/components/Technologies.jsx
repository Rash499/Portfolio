import React from "react";
import { motion } from "framer-motion";

import {
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaPython,
  FaCloud,
  FaServer,
  FaAws,
} from "react-icons/fa";


import {
  SiTerraform,
  SiKubernetes,
  SiGithubactions,
  SiAnsible,
  SiJenkins,
  SiGrafana,
  SiRust,
  SiTrivy,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiElastic,
  SiPrometheus,
  SiGnubash,
  SiC,
  SiCplusplus,
  SiScala,
  SiOpenjdk,
  SiVmware,
  SiReact,
  SiKotlin,
  SiDart,
  SiAndroidstudio,
  SiTailwindcss,
} from "react-icons/si";

import {
  VscAzure,
  VscTerminalPowershell,
} from "react-icons/vsc";


const TECH = [
  // Cloud & Infrastructure
  ["Azure", VscAzure, "#0078D4"],
  ["AWS", FaAws, "#FF9900"],
  ["Terraform", SiTerraform, "#844FBA"],
  ["Virtual Machines", FaServer, "#607D8B"],
  ["VMware", SiVmware, "#607078"],

  // Containers & Orchestration
  ["Docker", FaDocker, "#2496ED"],
  ["Kubernetes", SiKubernetes, "#326CE5"],

  // CI/CD & DevOps
  ["Azure DevOps", FaCloud, "#0078D7"],
  ["GitHub Actions", SiGithubactions, "#2088FF"],
  ["Jenkins", SiJenkins, "#D24939"],
  ["GitOps", FaGitAlt, "#EF7B4D"],
  ["Ansible", SiAnsible, "#EE0000"],
  ["Trivy", SiTrivy, "#1904DA"],

  // Monitoring & Observability
  ["Grafana", SiGrafana, "#F46800"],
  ["Prometheus", SiPrometheus, "#E6522C"],
  ["Elastic Stack", SiElastic, "#005571"],

  // Operating Systems & Scripting
  ["Linux", FaLinux, "#FCC624"],
  ["Bash", SiGnubash, "#4EAA25"],
  ["PowerShell", VscTerminalPowershell, "#5391FE"],

  // Programming
  ["Python", FaPython, "#3776AB"],
  ["JavaScript", SiJavascript, "#F7DF1E"],
  ["TypeScript", SiTypescript, "#3178C6"],
  ["Rust", SiRust, "#DEA584"],
  ["C", SiC, "#A8B9CC"],
  ["C++", SiCplusplus, "#00599C"],
  ["Java", SiOpenjdk, "#ED8B00"],
  ["Scala", SiScala, "#DC322F"],
  ["Tailwind CSS", SiTailwindcss, "#06B6D4"],

  // Databases
  ["MongoDB", SiMongodb, "#47A248"],
  ["MySQL", SiMysql, "#4479A1"],
  ["PostgreSQL", SiPostgresql, "#4169E1"],

  // Mobile Application Development
  ["React Native", SiReact, "#61DAFB"],
  ["Kotlin", SiKotlin, "#7F52FF"],
  ["Dart", SiDart, "#0175C2"],
  ["Android Studio", SiAndroidstudio, "#3DDC84"],
];


const Technologies = () => {
  return (
    <section className="section-pad section-border">

      <div className="section-heading centered">
        <span className="eyebrow">02 · TOOLBOX</span>

        <h2>Technologies I work with</h2>

        <p>
          Focused on cloud infrastructure, DevOps automation, containers,
          CI/CD, observability and systems engineering.
        </p>
      </div>


      <div className="tech-grid">

        {TECH.map(([name, Icon, color], i) => (

          <motion.div
            key={name}
            className="tech-card"

            initial={{
              opacity: 0,
              y: 15,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: i * 0.025,
              duration: 0.4,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            whileHover={{
              y: -5,
              transition: {
                duration: 0.2,
              },
            }}
          >

            <Icon
              style={{
                color: color,
                fontSize: "2rem",
              }}
            />

            <span>{name}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
};


export default Technologies;