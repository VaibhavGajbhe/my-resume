import React, { useState } from 'react';
import { X, FileText, Download, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'notFound'>('idle');

  if (!isOpen) return null;

  const handleDownload = () => {
    // Attempt download
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadStatus('success');
    setTimeout(() => {
      setDownloadStatus('idle');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl border border-cyan-500/30 p-6 md:p-8 shadow-2xl shadow-cyan-950/50 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-cyan-950/60 border border-cyan-500/40 rounded-xl text-cyan-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Curriculum Vitae / Resume</h3>
            <p className="text-xs text-cyan-400 font-mono mt-0.5">{personalInfo.name} • {personalInfo.role}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 mb-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            Download the official engineering resume highlighting 3+ years of Azure, Infrastructure as Code (Terraform), Kubernetes (AKS), and DevSecOps experience at TCS.
          </p>

          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono space-y-2">
            <div className="flex justify-between text-slate-400">
              <span>File Name:</span>
              <span className="text-slate-200">Vaibhav_Gajbhe_Resume.pdf</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Target Role:</span>
              <span className="text-cyan-400">Senior DevOps / Cloud Engineer</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Location Path:</span>
              <span className="text-slate-400">{personalInfo.resumePath}</span>
            </div>
          </div>

          {downloadStatus === 'success' && (
            <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-lg text-xs font-mono">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Download initiated! If file is pending upload, place resume.pdf in <code>public/assets/</code>.</span>
            </div>
          )}

          {downloadStatus === 'notFound' && (
            <div className="flex items-center space-x-2 text-amber-400 bg-amber-950/40 border border-amber-500/30 p-3 rounded-lg text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Resume PDF file placeholder. Add `resume.pdf` to `/public/assets/` to enable direct download.</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium py-3 px-5 rounded-xl border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
};
