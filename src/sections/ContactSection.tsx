import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, FileText, Copy, Check, Send, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact & Professional Inquiries</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Interested in full-stack web development, cloud infrastructure automation, or technical collaboration? Reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Direct Email */}
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-4 bg-slate-900/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Direct Email</h3>
              <p className="text-xs text-slate-400">
                Primary contact for technical engineering roles, web projects, and inquiries.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                <span className="truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-slate-400 hover:text-cyan-400 transition-colors ml-2 shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Mail</span>
            </a>
          </div>

          {/* Card 2: LinkedIn Professional Profile */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 bg-slate-900/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-950 border border-blue-500/40 text-blue-400">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">LinkedIn Network</h3>
              <p className="text-xs text-slate-400">
                Connect professionally on LinkedIn to view achievements and updates.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 truncate">
                {personalInfo.linkedinUrl}
              </div>
            </div>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-mono font-semibold text-xs py-3 px-4 rounded-xl border border-slate-700 transition-all"
            >
              <span>Open LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Card 3: GitHub & Resume */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 bg-slate-900/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-teal-950 border border-teal-500/40 text-teal-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Resume & Code Repos</h3>
              <p className="text-xs text-slate-400">
                Download the official PDF resume or review open source projects on GitHub.
              </p>
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location} • {personalInfo.company}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={onOpenResumeModal}
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-slate-300 font-mono text-xs py-2.5 px-4 rounded-xl border border-slate-800 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
