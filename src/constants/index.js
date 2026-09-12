export const HERO_CONTENT = `Cloud Security Engineer with professional experience and a Computer Science background focused on Azure infrastructure, cloud operations, DevOps practices, and automation. Experienced in designing secure and scalable cloud environments, implementing Infrastructure as Code with Terraform, and automating deployments through CI/CD pipelines.`;

export const ABOUT_TEXT = `I build reliable, scalable, and secure cloud architectures across Azure and hybrid environments. My experience includes Azure Virtual Desktop, secure networking, monitoring, threat detection, infrastructure automation, and system administration. I also work with Kubernetes fundamentals, containerized deployments, RESTful APIs, MERN and PHP MVC applications, and programming in C, C++, Rust, and Python.`;

export const EXPERIENCES = [
  {
    year: "November 2025 - June 2026",
    role: "Trainee Cloud Security Engineer",
    company: "ITX360",
    description:
      "Worked with Microsoft Azure on secure infrastructure design and deployment across hybrid cloud and on-premises environments. Implemented and managed Azure Virtual Desktop environments, troubleshooting logging issues in AVD and Azure AD. Designed secure Azure network solutions with VPN tunneling and routing, integrated KQL with AnalitiQ360 for monitoring and log analysis, and applied identity, access control, NSG, and threat protection best practices. Utilized Azure Front Door, Microsoft Sentinel, Microsoft Defender for Cloud, and Application Gateway for security, monitoring, and threat detection.",
    technologies: [
      "Microsoft Azure",
      "Azure Virtual Desktop",
      "KQL",
      "AnalitiQ360",
      "Microsoft Sentinel",
      "Microsoft Defender for Cloud",
      "Azure Front Door",
      "Application Gateway",
    ],
  },
];

export const EDUCATION = [
  {
    period: "May 2023 - May 2026",
    qualification: "BSc in Computer Science",
    institution: "University of Colombo School of Computing",
    result: "GPA 3.11",
  },
  {
    period: "2022 - 2023",
    qualification: "Diploma in Information Technology",
    institution: "Esoft Metro Campus",
    result: "Merit Pass",
  },
  {
    period: "2018 - 2021",
    qualification: "G.C.E. Advanced Level - Physical Science Stream",
    institution: "Richmond College Galle",
    result: "2A's 1B (Z-score 1.7025)",
  },
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Azure Network Engineer Associate (AZ-700)",
  "Microsoft Certified: DevOps Engineer Expert (AZ-400)",
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
];

export const SKILLS = [
  {
    category: "DevOps & Cloud",
    items: ["Kubernetes (Minikube)", "Docker", "Terraform", "CI/CD Automation", "Ansible", "AWS", "Azure DR"],
  },
  {
    category: "System Administration",
    items: [
      "UNIX/Linux & Windows",
      "Windows Server Administration",
      "Active Directory",
      "Group Policy",
      "Server/User Management",
      "Linux Administration",
      "RAID/LVM",
      "Shell Scripting",
      "FTP Setup",
      "System Monitoring",
    ],
  },
  {
    category: "Networking & Security",
    items: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "SSH",
      "Routing",
      "VPNs",
      "Azure Virtual Networks",
      "NSGs",
      "Firewalls",
      "Azure Front Door",
      "Application Gateway",
      "Backups",
      "Microsoft Defender for Cloud",
    ],
  },
  {
    category: "Web Development & Programming",
    items: ["MERN Stack", "PHP (MVC)", "RESTful APIs", "RDBMS", "MySQL", "C", "C++", "Rust", "Python"],
  },
  {
    category: "Other Skills",
    items: ["Collaboration", "Communication", "Adaptability"],
  },
];

export const PROJECTS = [
  {
    title: "Azure Virtual Desktop with Hub-and-Spoke Architecture",
    description:
      "Designed and deployed a production-ready Azure Virtual Desktop environment with AD/DC setup, AVD golden images, FSLogix profiles, scaling plans, VPN tunneling, log monitoring, backups, and MFA/SSO for secure and compliant access.",
    technologies: ["Azure", "OpenVPN", "FSLogix", "Windows Server 2022", "Windows 10"],
  },
  {
    title: "Azure Security Assessment",
    description:
      "Performed an Azure security assessment by applying Microsoft Defender for Cloud recommendations, remediating vulnerabilities, configuring RBAC and NSG rules, enabling encryption at host, and securing resources with Microsoft Defender for Endpoint, Azure Update Manager, and Private Endpoints.",
    technologies: ["Azure", "Microsoft Defender for Cloud", "Elastic Stack"],
  },
  {
    title: "Azure Landing Zones Design and Implementation",
    description:
      "Designed an Azure Landing Zone with hub-and-spoke networking, Azure Policy governance, security baselines, and centralized logging through Log Analytics Workspace.",
    technologies: ["Azure"],
  },
  {
    title: "High Availability Web Cluster",
    description:
      "Designed a high availability web cluster using Apache Tomcat and Keepalived with MySQL and SQLite database integration to support reliable application uptime.",
    technologies: ["Apache Tomcat", "Keepalived", "MySQL", "SQLite", "Linux"],
  },
  {
    title: "UEBA Dashboard",
    description:
      "Developed a UEBA dashboard using KQL and Azure Log Analytics, integrating Microsoft Sentinel's machine-learning-based anomaly detection to trigger alerts and incidents for threat identification.",
    technologies: ["Microsoft Azure", "Microsoft Sentinel", "AnalitiQ360"],
  },
  {
    title: "Multi-Environment Infrastructure Automation",
    description:
      "Implemented Infrastructure as Code using Azure, Terraform, and AKS with CI/CD pipelines for automated provisioning and reusable modules for environment-specific deployments.",
    technologies: ["Azure", "Terraform", "AKS", "Azure DevOps", "Git"],
  },
];

export const CONTACT = {
  address: "Colombo, Sri Lanka",
  phoneNo: "+94 789 373 025",
  email: "rashmikadilmin499@gmail.com",
};
