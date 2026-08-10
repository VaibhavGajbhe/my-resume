export interface PersonalInfo {
  name: string;
  role: string;
  subtitle: string;
  experienceYears: number;
  location: string;
  company: string;
  bioPositioning: string;
  aboutText: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
}

export interface Skill {
  name: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Certified' | 'In Progress' | 'Planned';
  issueDate: string;
  credentialUrl?: string;
  badgeIcon: string;
}
