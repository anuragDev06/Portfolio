import React from 'react';
import { ArrowUp, Terminal, Database, Server, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-900">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-200"></span>
              <span className="text-[11px] text-slate-400 block">
                © {new Date().getFullYear()} {personalInfo.name}.
              </span>
            </div>
          </div>

          {/* MERN Quick Pills */}
          {/* <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <Database className="w-3 h-3" /> Mongo
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-400">
              <Server className="w-3 h-3" /> Express
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-cyan-400">
              <Code2 className="w-3 h-3" /> React
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-lime-400">
              <Cpu className="w-3 h-3" /> Node
            </span>
          </div> */}

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all active:scale-95"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* System Uptime Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
          <span>STATUS: ALL_SYSTEMS_OPERATIONAL 🟢</span>
          <span>ENV: PRODUCTION (VERCEL / RENDER)</span>
          <span>BUILD: v2.4.0-MERN-PROD</span>
        </div>
      </div>
    </footer>
  );
};
