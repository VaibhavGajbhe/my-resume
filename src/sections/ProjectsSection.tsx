import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { Rocket } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-devops-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>Featured Systems & Full-Stack Applications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Applications
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Production full-stack platforms including MakeWithMojo E-Commerce, MockMate AI Interview Platform, ExamApp Question Bank, and Hiriyo App Local Business Hiring.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
