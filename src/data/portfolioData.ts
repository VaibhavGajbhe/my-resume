import {
  PersonalInfo,
  SkillCategory,
  ProjectItem,
  CertificationItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Vaibhav Gajbhe",
  role: "Senior DevOps & Full Stack Engineer",
  subtitle: "Cloud Infrastructure & Full-Stack Web Development",
  experienceYears: 7,
  location: "India",
  company: "Tata Consultancy Services (TCS)",
  bioPositioning: "Senior DevOps & Full Stack Engineer with 7+ years of experience specializing in cloud infrastructure, Terraform IaC, Kubernetes, Python, React, JavaScript/TypeScript, and high-performance web applications.",
  aboutText: "I am a Senior DevOps & Full Stack Engineer with 7+ years of experience building scalable web applications and automated cloud infrastructure. My expertise spans Python backend microservices, React frontends, JavaScript/TypeScript, WordPress, Azure cloud, Kubernetes, and CI/CD pipelines.",
  email: "vgajbhe22@gmail.com",
  githubUrl: "https://github.com/YOUR_USERNAME",
  linkedinUrl: "https://www.linkedin.com/in/vaibhav-gajbhe-bb650915b/",
  resumePath: "./assets/resume.pdf"
};

export const skillCategories: SkillCategory[] = [
  {
    id: "fullstack",
    name: "Full Stack Development",
    icon: "Code2",
    description: "End-to-end web application development with Python, React, TypeScript, Node.js & WordPress.",
    skills: [
      { name: "Python", level: "Expert", featured: true },
      { name: "React", level: "Expert", featured: true },
      { name: "JavaScript / TypeScript", level: "Expert", featured: true },
      { name: "WordPress", level: "Advanced", featured: true },
      { name: "FastAPI", level: "Advanced", featured: true },
      { name: "Node.js & Express", level: "Advanced", featured: true },
      { name: "REST APIs & Webhooks", level: "Expert", featured: true },
      { name: "HTML5 / CSS3 / Tailwind", level: "Expert" },
      { name: "MongoDB & SQL Databases", level: "Advanced" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud Infrastructure",
    icon: "Cloud",
    description: "Cloud architecture, Azure services, VNets, Application Gateway, and cloud networking.",
    skills: [
      { name: "Microsoft Azure", level: "Expert", featured: true },
      { name: "Azure Kubernetes Service (AKS)", level: "Advanced", featured: true },
      { name: "Azure Container Registry (ACR)", level: "Advanced", featured: true },
      { name: "Application Gateway / WAF", level: "Advanced", featured: true },
      { name: "Azure Key Vault", level: "Advanced", featured: true },
      { name: "Azure Storage Services", level: "Advanced" },
      { name: "Azure Monitor & Insights", level: "Advanced" },
      { name: "VNets & Peering", level: "Advanced", featured: true }
    ]
  },
  {
    id: "iac",
    name: "Infrastructure as Code",
    icon: "Cpu",
    description: "Declarative infrastructure provisioning with state management and automated validation.",
    skills: [
      { name: "Terraform", level: "Expert", featured: true },
      { name: "Terraform Modules", level: "Expert", featured: true },
      { name: "Remote State (Azure Blob)", level: "Advanced", featured: true },
      { name: "AzureRM Provider", level: "Advanced", featured: true },
      { name: "Infrastructure Automation", level: "Expert", featured: true }
    ]
  },
  {
    id: "containers",
    name: "Containers & Kubernetes",
    icon: "Container",
    description: "Orchestration, container runtime management, ingress control, and service management.",
    skills: [
      { name: "Docker", level: "Expert", featured: true },
      { name: "Kubernetes", level: "Advanced", featured: true },
      { name: "AKS", level: "Advanced", featured: true },
      { name: "Helm Charts", level: "Advanced", featured: true },
      { name: "Docker Compose", level: "Advanced" }
    ]
  },
  {
    id: "cicd",
    name: "CI/CD & Automation",
    icon: "Workflow",
    description: "Automated build, release, test, and deployment pipeline workflows.",
    skills: [
      { name: "Azure DevOps Pipelines", level: "Expert", featured: true },
      { name: "GitHub Actions", level: "Expert", featured: true },
      { name: "YAML Pipelines", level: "Expert", featured: true },
      { name: "Terraform Plan/Apply Workflows", level: "Expert", featured: true }
    ]
  },
  {
    id: "security",
    name: "Security & DevSecOps",
    icon: "ShieldCheck",
    description: "Static security analysis, container vulnerability scanning, and secret management.",
    skills: [
      { name: "Trivy", level: "Advanced", featured: true },
      { name: "Checkov & tfsec", level: "Advanced", featured: true },
      { name: "SonarQube", level: "Advanced" },
      { name: "Azure Key Vault", level: "Expert", featured: true }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1-makewithmojo",
    title: "MakeWithMojo — E-Commerce Platform",
    subtitle: "Full-Stack Custom E-Commerce Storefront",
    description: "A production full-stack e-commerce web platform designed for custom online product catalogs, responsive customer experience, shopping cart workflow, and secure checkout processing.",
    technologies: ["React", "JavaScript", "Node.js", "Python", "Tailwind CSS", "REST APIs", "Cloud Infrastructure"],
    highlights: [
      "Responsive storefront optimized for mobile, tablet, and desktop shoppers",
      "Dynamic product catalog, category search, and fast client-side filtering",
      "Secure cart state management and checkout workflow integration",
      "Optimized load performance with automated asset optimization and cloud CDN delivery"
    ],
    liveDemoUrl: "https://www.makewithmojo.com",
    githubUrl: "https://github.com/YOUR_USERNAME/makewithmojo",
    featured: true
  },
  {
    id: "proj-2-mockmate",
    title: "MockMate — AI Interview Platform",
    subtitle: "Real-time AI Technical Interview Engine",
    description: "An AI-powered technical interview platform designed to simulate real-time technical interviews, evaluate candidate answers, and generate detailed technical performance reports.",
    technologies: ["Python", "FastAPI", "React", "JavaScript", "AI APIs", "Groq", "Claude", "ElevenLabs"],
    highlights: [
      "Interactive AI interviewer simulating adaptive technical question scenarios",
      "Real-time session scoring and question difficulty adjustment",
      "Voice interaction architecture using ElevenLabs text-to-speech engine",
      "Low-latency response pipeline leveraging high-speed LLM inference APIs"
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/mockmate-ai-interview",
    featured: true
  },
  {
    id: "proj-3-examapp",
    title: "ExamApp — AI-Powered Question Bank",
    subtitle: "PDF Extraction & Knowledge Management System",
    description: "An administrative full-stack platform for building, categorizing, and organizing an intelligent question bank from examination PDFs and online question sources.",
    technologies: ["React", "FastAPI", "Python", "MongoDB", "AI APIs", "JavaScript"],
    highlights: [
      "Automated PDF parsing and question extraction pipeline written in Python",
      "AI-assisted classification by subject, difficulty level, topic, and exam metadata",
      "Support for passage-based and multi-part context questions",
      "MongoDB document store structured for fast query compilation and test creation"
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/examapp-question-bank",
    featured: true
  },
  {
    id: "proj-4-hiriyo-app",
    title: "Hiriyo App — Local Business Hiring Platform",
    subtitle: "Recruitment & Talent Matching Portal",
    description: "A specialized hiring application built for local businesses to post jobs, track applicants, evaluate local candidates, and streamline community recruitment.",
    technologies: ["React", "JavaScript", "Node.js", "Python", "REST APIs", "Tailwind CSS", "Database"],
    highlights: [
      "Tailored dashboard for local business owners to manage active job postings",
      "Applicant tracking system (ATS) workflow for candidate screening and scheduling",
      "Responsive web interface with real-time status updates and candidate communication",
      "Scalable REST API backend handling candidate resumes, profiles, and business listings"
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/hiriyo-hiring-app",
    featured: true
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-az-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft Azure",
    status: "Certified",
    issueDate: "Placeholder Date",
    credentialUrl: "https://learn.microsoft.com/",
    badgeIcon: "Azure"
  },
  {
    id: "cert-hashi-tf",
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    status: "Certified",
    issueDate: "Placeholder Date",
    credentialUrl: "https://www.credly.com/",
    badgeIcon: "Terraform"
  },
  {
    id: "cert-cka",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF / Linux Foundation",
    status: "In Progress",
    issueDate: "Target 2025/2026",
    credentialUrl: "https://www.cncf.io/",
    badgeIcon: "Kubernetes"
  },
  {
    id: "cert-az-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft Azure",
    status: "In Progress",
    issueDate: "Target 2025/2026",
    credentialUrl: "https://learn.microsoft.com/",
    badgeIcon: "DevOps"
  }
];
