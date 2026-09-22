import React, { useState } from 'react';
import { Menu, X, Terminal, Database, Server, Cpu, TerminalSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Dashboard', href: '#hero' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Projects', href: '#projects' },

  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Live Server Telemetry Bar */}
      {/* <div className="bg-slate-900/90 border-b border-slate-800/60 py-1 px-4 text-[11px] font-mono text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 overflow-x-auto py-0.5 no-scrollbar">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYS_STATUS: ONLINE
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Database className="w-3 h-3 text-emerald-400" />
              Mongo: <span className="text-emerald-300">Atlas Connected</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Server className="w-3 h-3 text-purple-400" />
              Express: <span className="text-purple-300">200 OK (28ms)</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Cpu className="w-3 h-3 text-lime-400" />
              Node: <span className="text-lime-300">{personalInfo.nodeVersion}</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-slate-400">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-indigo-300 border border-slate-700">
              PROD_BUILD v2.4.0
            </span>
          </div>
        </div>
      </div> */}

      {/* Primary Nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        {/* <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-500/30 group-hover:border-indigo-400/60 transition-colors">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="font-mono font-bold text-slate-100 text-base tracking-tight block">
              MERN<span className="text-emerald-400">_DEV</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block -mt-1">
              Full-Stack Console
            </span>
          </div>
        </a> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Quick API Button */}
          {/* <a
            href="#api-console"
            className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all"
          >
            <TerminalSquare className="w-3.5 h-3.5" />
            API Sandbox
          </a> */}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#api-console"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 px-4 py-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-mono font-medium"
          >
            <TerminalSquare className="w-4 h-4" />
            Launch Interactive API Console
          </a>
        </div>
      )}
    </header>
  );
};
