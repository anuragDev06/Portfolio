import React from 'react';
import { ArrowRight, Mail, Terminal, TerminalSquare, Database, Server, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative py-16 md:py-24 border-b border-slate-800/80 bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium shadow-sm glow-emerald">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
              Fullstack MERN Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
            {personalInfo.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              Explore MERN Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* <a
              href="#api-console"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-emerald-400 font-mono text-sm font-medium transition-all shadow-md active:scale-[0.98]"
            >
              <TerminalSquare className="w-4 h-4 text-emerald-400" />
              Try API Playground
            </a> */}

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-800 sm:pl-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Tech Stack Badges */}
          {/* <div className="pt-6 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
              Primary MERN Ecosystem:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> MongoDB Atlas
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300">
                <Server className="w-3.5 h-3.5 text-purple-400" /> Express.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> React 19 / TS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-lime-950/60 border border-lime-500/40 text-lime-300">
                <Cpu className="w-3.5 h-3.5 text-lime-400" /> Node.js ESM
              </span>
            </div>
          </div> */}
        </div>

        {/* Right Column: Server Telemetry Terminal Window */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden glow-indigo">
            {/* Terminal Top Window Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>

            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs space-y-4">

              <h1 className="text-slate-300">hello</h1>

            </div>

            {/* Terminal Footer */}
            <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
