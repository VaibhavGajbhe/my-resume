import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { Rocket, AlertCircle, X } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [placeholderModal, setPlaceholderModal] = useState<{
    isOpen: boolean;
    projectTitle: string;
    linkType: 'github' | 'demo';
  }>({
    isOpen: false,
    projectTitle: '',
    linkType: 'github'
  });

  const handleOpenPlaceholderModal = (title: string, type: 'github' | 'demo') => {
    setPlaceholderModal({
      isOpen: true,
      projectTitle: title,
      linkType: type
    });
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-devops-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>Infrastructure Engineering</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Cloud Implementations
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Real-world cloud infrastructure automation, AKS microservice platforms, DevSecOps pipelines, and AI cloud architecture implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenPlaceholderModal={handleOpenPlaceholderModal}
            />
          ))}
        </div>

      </div>

      {/* Modal for Placeholder Link handling */}
      {placeholderModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md glass-panel rounded-2xl border border-cyan-500/30 p-6 space-y-4 bg-slate-950 text-slate-100">
            <button
              onClick={() => setPlaceholderModal({ ...placeholderModal, isOpen: false })}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-950/80 border border-amber-500/40 rounded-xl text-amber-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Repository Placeholder</h4>
                <p className="text-xs text-cyan-400 font-mono">{placeholderModal.projectTitle}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              This link is currently configured with a placeholder URL (`YOUR_USERNAME`). You can update the repository URL in <code>src/data/portfolioData.ts</code>.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setPlaceholderModal({ ...placeholderModal, isOpen: false })}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono rounded-lg border border-slate-700"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
