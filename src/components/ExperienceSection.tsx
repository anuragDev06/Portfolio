import React from 'react';
import { Briefcase, Calendar, MapPin, Zap, Terminal } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>FULLSTACK WORK LOG & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experience</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-sans">
          Proven track record of building production web applications, optimizing API latency, and delivering full-stack features.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6">
        {workExperience.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <span>{item.role}</span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                    @{item.company}
                  </span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Performance Metric Badge */}
            {item.metrics && (
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.metrics}</span>
              </div>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-sm text-slate-300 mb-6 font-sans leading-relaxed">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 text-xs font-mono">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
