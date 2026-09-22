import React, { useState } from 'react';
import { Database, Server, Code2, Cpu, CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { mernPillars, skillCategories } from '../data/portfolioData';
import type { MernPillar } from '../types/portfolio';

const getPillarIcon = (key: string) => {
  switch (key) {
    case 'mongodb':
      return <Database className="w-6 h-6 text-emerald-400" />;
    case 'express':
      return <Server className="w-6 h-6 text-purple-400" />;
    case 'react':
      return <Code2 className="w-6 h-6 text-cyan-400" />;
    case 'node':
      return <Cpu className="w-6 h-6 text-lime-400" />;
    default:
      return <Terminal className="w-6 h-6 text-indigo-400" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<MernPillar>(mernPillars[0]);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULLSTACK ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">MERN Stack</span> Core
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Click on any stack pillar to Know more
        </p>
      </div>

      {/* 4-Pillar Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {mernPillars.map((pillar) => {
          const isSelected = selectedPillar.key === pillar.key;
          return (
            <button
              key={pillar.key}
              onClick={() => setSelectedPillar(pillar)}
              className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden group ${isSelected
                ? `bg-slate-900 border-slate-700 shadow-xl ring-2 ring-emerald-500/30`
                : `bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700/80`
                }`}
            >
              {/* Top Accent Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${pillar.bgColor} border ${pillar.borderColor} flex items-center justify-center`}>
                  {getPillarIcon(pillar.key)}
                </div>
                <span className="font-mono font-black text-2xl text-slate-700 group-hover:text-slate-500 transition-colors">
                  {pillar.letter}
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="text-lg font-bold text-slate-100 mb-1">
                {pillar.name}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-3 line-clamp-1">
                {pillar.role}
              </p>

              {/* Skills count */}
              {/* <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/60">
                <span>{pillar.keySkills.length} Core Modules</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-emerald-400' : 'text-slate-600'}`} />
              </div> */}
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Drawer for Selected Pillar */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 shadow-2xl mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description & Skills Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${selectedPillar.bgColor} border ${selectedPillar.borderColor} flex items-center justify-center shrink-0`}>
                {getPillarIcon(selectedPillar.key)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <span>{selectedPillar.name}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal">
                    {selectedPillar.role}
                  </span>
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-0.5">
                  Selected Architecture Component
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {selectedPillar.description}
            </p>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Engineering Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedPillar.keySkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-200 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet Preview */}
          {/* <div className="lg:col-span-6">
            <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
              <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{selectedPillar.codeSnippet.filename}</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Implementation Sample
                </span>
              </div>
              <div className="p-4 overflow-x-auto text-emerald-300 leading-relaxed font-mono text-[11px]">
                <pre>{selectedPillar.codeSnippet.code}</pre>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Secondary Skill Categories */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-200 mb-6 flex items-center gap-2 font-mono">
          <Terminal className="w-5 h-5 text-indigo-400" />
          <span>Complete Technical Inventory</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
            >
              <h4 className="text-sm font-semibold text-slate-200 mb-3 pb-2 border-b border-slate-800/80 font-mono">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
