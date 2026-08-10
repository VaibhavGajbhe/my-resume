import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Shield, Code2, Cloud, Cpu, Workflow, Globe, Server } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const compactCapabilities = [
    { title: "Full-Stack Web Systems", desc: "Python, React, TypeScript, Node.js & REST APIs", icon: Code2 },
    { title: "WordPress & Headless CMS", desc: "Custom themes, plugins, REST APIs & PHP solutions", icon: Globe },
    { title: "Cloud Infrastructure", desc: "Microsoft Azure, VNets, App Gateway & Key Vault", icon: Cloud },
    { title: "Infrastructure as Code", desc: "Modular Terraform scripts & state automation", icon: Cpu },
    { title: "Containers & K8s", desc: "Docker, Kubernetes, AKS & Helm chart deployments", icon: Server },
    { title: "CI/CD & DevSecOps", desc: "GitHub Actions, Azure DevOps, Trivy & Checkov", icon: Workflow },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Engineering Profile & Core Capabilities
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            {personalInfo.aboutText}
          </p>
        </div>

        {/* Small Compact Grid Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {compactCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-3.5 rounded-xl border border-slate-800 space-y-2 bg-slate-900/50 flex flex-col justify-between"
              >
                <div className="p-2 w-fit rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-[10px] text-slate-400 leading-normal font-sans mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
