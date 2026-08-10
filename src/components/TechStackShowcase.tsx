import React, { useState } from 'react';
import { Code2, Cloud, Database, Globe, CheckCircle2, Terminal, Layers, ArrowUpRight } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge: string;
}

const tabs: TabItem[] = [
  { id: 'fullstack', label: 'Full-Stack Stack', icon: Code2, badge: 'Python • React • TS' },
  { id: 'cloud', label: 'Cloud & IaC', icon: Cloud, badge: 'Azure • Terraform • AKS' },
  { id: 'platforms', label: 'Live Systems', icon: Globe, badge: 'MakeWithMojo • MockMate' },
];

export const TechStackShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('fullstack');

  return (
    <div className="w-full glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40 bg-slate-950/85 relative">
      
      {/* Top Card Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            vaibhav@fullstack-devops-engine:~
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>7+ Yrs Exp</span>
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex overflow-x-auto bg-slate-950 border-b border-slate-800/80 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-xs font-mono whitespace-nowrap transition-all flex items-center space-x-2 border-b-2 ${
                isActive
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-950/30 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="p-5 md:p-6 space-y-4 font-mono text-xs text-slate-200 min-h-[260px] flex flex-col justify-between">
        
        {activeTab === 'fullstack' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-cyan-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Frontend & UI Architecture
                </span>
                <span className="text-[10px] text-slate-400">React 18 / TypeScript</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                SPA Development • State Management (Redux/Zustand) • Tailwind CSS • Responsive UI/UX • Webhooks
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-blue-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-blue-400" />
                  Backend APIs & CMS
                </span>
                <span className="text-[10px] text-slate-400">Python & Node.js</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                Python (FastAPI) • Express Node.js • WordPress (Custom & Headless) • REST APIs • MongoDB / SQL
              </p>
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-teal-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Cloud className="w-4 h-4 text-teal-400" />
                  Azure & Terraform IaC
                </span>
                <span className="text-[10px] text-slate-400">Microsoft Certified</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                Modular Terraform • Azure Blob Remote State • Hub-and-Spoke Networking • Key Vault • WAF Gateway
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  Kubernetes & CI/CD Pipelines
                </span>
                <span className="text-[10px] text-slate-400">AKS & Actions</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-sans">
                Azure Kubernetes Service (AKS) • Docker Containers • GitHub Actions • Azure DevOps YAML • DevSecOps
              </p>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="space-y-3 font-sans text-xs">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">MakeWithMojo (E-Commerce)</span>
                <span className="text-[11px] text-cyan-400 font-mono">www.makewithmojo.com</span>
              </div>
              <a
                href="https://www.makewithmojo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">MockMate AI Interview Platform</span>
                <span className="text-[11px] text-blue-400 font-mono">Python + FastAPI + Groq AI</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Live AI Platform</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Hiriyo App — Local Hiring Platform</span>
                <span className="text-[11px] text-amber-400 font-mono">React + Node.js + ATS System</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Recruitment App</span>
            </div>
          </div>
        )}

        {/* Card Footer Features */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-sans text-slate-400">
          <div className="flex items-center space-x-1 text-emerald-400 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Clean Architecture & High Availability</span>
          </div>
          <span className="text-slate-500 font-mono text-[10px]">TCS Senior Engineer</span>
        </div>

      </div>
    </div>
  );
};
