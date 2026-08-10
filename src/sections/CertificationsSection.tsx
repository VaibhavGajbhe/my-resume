import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-slate-950/80 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Cloud & DevOps Certifications
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Industry recognized certification track across Microsoft Azure, HashiCorp Terraform, and Kubernetes administration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-4 bg-slate-900/40 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      cert.status === 'Certified'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30'
                        : 'bg-amber-950/80 text-amber-400 border-amber-500/30'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug">{cert.title}</h3>
                <p className="text-xs text-cyan-400 font-mono">{cert.issuer}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{cert.issueDate}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
