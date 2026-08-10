import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { TechStackShowcase } from '../components/TechStackShowcase';
import { FileText, Github, Linkedin, ArrowDown, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-devops-grid">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Name & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Name & Role Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300 bg-clip-text text-transparent">
                {personalInfo.role}
              </h2>
            </div>

            {/* Elevator Pitch Positioning */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              Building high-performance web applications and automated cloud infrastructure with Python, React, JavaScript/TypeScript, WordPress, Azure, Terraform, and modern CI/CD practices.
            </p>

            {/* Core Competency Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full-Stack Development</span>
              </span>
              <span className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python & React</span>
              </span>
              <span className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>WordPress</span>
              </span>
              <span className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-cyan-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Azure & Terraform</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-semibold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 border border-cyan-400/30"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-mono font-semibold text-sm py-3.5 px-5 rounded-xl border border-slate-700 transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </button>

              <div className="flex items-center space-x-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Replaced with Tech Stack Showcase */}
          <div className="lg:col-span-5">
            <TechStackShowcase />
          </div>

        </div>

      </div>
    </section>
  );
};
