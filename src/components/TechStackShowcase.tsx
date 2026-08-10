import React from 'react';
import { Code2, Cloud, CheckCircle2, Zap, Globe, Database } from 'lucide-react';

export const TechStackShowcase: React.FC = () => {
  return (
    <div className="w-full glass-panel rounded-2xl border border-cyan-500/30 p-6 md:p-8 space-y-6 shadow-2xl shadow-cyan-950/40 bg-slate-950/80 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Card Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Full-Stack & Cloud Architecture</h3>
            <p className="text-[11px] text-cyan-400 font-mono">Core Tech Stack Overview</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
          7+ Yrs Exp
        </span>
      </div>

      {/* Tech Grid Badges */}
      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
        
        {/* Full-Stack */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
            <Code2 className="w-4 h-4" />
            <span>Frontend</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            React • TypeScript • JavaScript • Tailwind CSS
          </p>
        </div>

        {/* Backend */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center space-x-2 text-blue-400 font-semibold">
            <Database className="w-4 h-4" />
            <span>Backend</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Python • FastAPI • Node.js • Express • REST APIs
          </p>
        </div>

        {/* Cloud & IaC */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center space-x-2 text-teal-400 font-semibold">
            <Cloud className="w-4 h-4" />
            <span>Cloud & IaC</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Microsoft Azure • Terraform • Remote State
          </p>
        </div>

        {/* CMS & Web */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center space-x-2 text-amber-400 font-semibold">
            <Globe className="w-4 h-4" />
            <span>CMS & DevOps</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            WordPress • Docker • AKS • GitHub Actions
          </p>
        </div>

      </div>

      {/* Feature Highlights list */}
      <div className="pt-2 space-y-2 font-sans text-xs">
        <div className="flex items-center space-x-2 text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Full-Stack Web App Development (E-Commerce, AI, Hiring Apps)</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Automated Cloud Infrastructure (Terraform & Azure Services)</span>
        </div>
      </div>
    </div>
  );
};
