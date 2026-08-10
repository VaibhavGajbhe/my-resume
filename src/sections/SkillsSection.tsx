import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Search, Cloud, Code2, Container, Workflow, ShieldCheck, Activity, Terminal, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Container': return <Container className="w-4 h-4 text-teal-400" />;
      case 'Workflow': return <Workflow className="w-4 h-4 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      case 'Activity': return <Activity className="w-4 h-4 text-rose-400" />;
      default: return <Terminal className="w-4 h-4 text-purple-400" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      cat.name.toLowerCase().includes(query) ||
      cat.skills.some((s) => s.name.toLowerCase().includes(query))
    );
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-devops-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud Engineering Stack
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            Categorized skills across cloud architecture, IaC automation, container orchestration, CI/CD pipelines, and observability.
          </p>
        </div>

        {/* Filter Controls: Tabs & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center space-x-1.5 ${
                  activeTab === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills (e.g. Terraform, AKS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 space-y-4 bg-slate-950/70"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{cat.name}</h3>
                  <p className="text-[11px] text-slate-400 font-mono">{cat.description}</p>
                </div>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                      skill.featured
                        ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300 font-semibold'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${skill.featured ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
