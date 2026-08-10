import React from 'react';
import { ProjectItem } from '../types/portfolio';
import { CheckCircle2, Layers, ArrowUpRight, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl border border-cyan-500/25 p-6 md:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden bg-slate-950/80 shadow-2xl">
      
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="space-y-4">
        
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <Layers className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              {project.subtitle}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {project.liveDemoUrl && (
              <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live App</span>
              </span>
            )}
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
              Production System
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Live URL Banner for MakeWithMojo */}
        {project.liveDemoUrl && (
          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-cyan-500/30 font-mono text-xs text-slate-300 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Globe className="w-4 h-4 shrink-0 text-cyan-400" />
              <span className="text-white font-bold">{project.liveDemoUrl}</span>
            </div>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-white flex items-center space-x-1"
            >
              <span>Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Highlights Bullet Grid */}
        <div>
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">Key Technical Highlights</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start space-x-2 bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack & Action Button (if live demo exists) */}
      <div className="pt-4 border-t border-slate-800/80 space-y-4">
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Website Action Button (only if live demo URL exists) */}
        {project.liveDemoUrl && (
          <div className="pt-1">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold text-xs py-3 px-5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Live Website (www.makewithmojo.com)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
