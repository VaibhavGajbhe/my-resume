import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-sans">
              {personalInfo.bioPositioning}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Engineering</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a></li>
              <li><a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Cloud & Web Stack */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-cyan-400">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Python</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">React</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">TypeScript</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">WordPress</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Azure</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Terraform</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Kubernetes</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Deployed via GitHub Pages.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
