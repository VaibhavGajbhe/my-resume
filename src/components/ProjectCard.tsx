import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { Github, CheckCircle2, Layers, ArrowUpRight, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenPlaceholderModal: (title: string, linkType: 'github' | 'demo') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenPlaceholderModal }) => {
  const handleGithubClick = (e: React.MouseEvent) => {
    if (!project.githubUrl || project.githubUrl.includes('YOUR_USERNAME')) {
      e.preventDefault();
      onOpenPlaceholderModal(project.title, 'github');
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    if (!project.liveDemoUrl || project.liveDemoUrl.includes('YOUR_URL')) {
      e.preventDefault();
      onOpenPlaceholderModal(project.title, 'demo');
    }
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl border border-cyan-500/20 p-6 md:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden bg-slate-950/70">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="space-y-4">
        
        {/* Header Badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              {project.subtitle}
            </span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
            Featured System
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mt-2">
            {project.description}
          </p>
        </div>

        {/* Highlights Bullet Grid */}
        <div>
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Engineering Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start space-x-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-4 border-t border-slate-800/80 space-y-4">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              onClick={handleDemoClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Live App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          <a
            href={project.githubUrl || '#'}
            onClick={handleGithubClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-mono text-xs py-2.5 px-4 rounded-xl border border-slate-700 transition-all group"
          >
            <Github className="w-4 h-4" />
            <span>Repository</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};
