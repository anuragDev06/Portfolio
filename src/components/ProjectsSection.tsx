import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Database, Server, Code, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(featuredProjects[0].id);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION SOFTWARE & REPOSITORIES will go here </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">MERN Applications</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-sans">
          Deep-dive into full-stack applications showcasing React frontends, Express API controllers, and MongoDB data models.
        </p>
      </div>

      {/* Projects Stack List */}
      <div className="space-y-8">
        {featuredProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;
          const hasBackendSpec = Boolean(project.backendSpec);

          return (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all overflow-hidden ${isExpanded
                ? 'bg-slate-900/90 border-slate-700 shadow-2xl ring-1 ring-emerald-500/20'
                : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700/80'
                }`}
            >
              {/* Main Card Header */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                          MERN Full-Stack
                        </span>
                      )}
                    </div>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-slate-400 mb-2">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Actions & Links */}
                  <div className="flex items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 items-center justify-between pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Backend Spec Drawer Toggle Button */}
                  {hasBackendSpec && (
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-emerald-400 text-xs font-mono transition-colors mt-2 sm:mt-0"
                    >
                      <Server className="w-3.5 h-3.5 text-purple-400" />
                      <span>{isExpanded ? 'Hide Backend Specs' : 'View Backend Specs & DB Schema'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Expandable Backend Spec & DB Drawer */}
              {isExpanded && project.backendSpec && (
                <div className="bg-slate-950 border-t border-slate-800/80 p-6 md:p-8 space-y-6">
                  {/* Architecture Summary */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Express & MongoDB System Architecture:
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {project.backendSpec.architectureSummary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Express Endpoints Table */}
                    <div className="lg:col-span-6 space-y-3">
                      <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-purple-400">
                          <Server className="w-3.5 h-3.5" /> Express REST Routes:
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {project.backendSpec.endpoints.length} Endpoints
                        </span>
                      </div>

                      <div className="space-y-2 font-mono text-xs">
                        {project.backendSpec.endpoints.map((ep, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${ep.method === 'GET'
                                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                                    : ep.method === 'POST'
                                      ? 'bg-purple-950 text-purple-400 border border-purple-500/30'
                                      : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                                    }`}
                                >
                                  {ep.method}
                                </span>
                                <span className="text-slate-200 font-semibold text-[11px]">
                                  {ep.path}
                                </span>
                              </div>
                              {ep.authRequired && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-300">
                                  JWT Auth
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 font-sans">
                              {ep.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* MongoDB Schemas & Sample Code */}
                    <div className="lg:col-span-6 space-y-4">
                      {/* Schemas list */}
                      <div>
                        <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mb-2">
                          <Database className="w-3.5 h-3.5" /> Mongoose Document Models:
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                          {project.backendSpec.mongooseSchemas.map((schema, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
                            >
                              {schema}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Code Snippet Drawer */}
                      {project.backendSpec.sampleCodeSnippet && (
                        <div>
                          <div className="text-xs font-mono text-slate-400 flex items-center justify-between mb-2">
                            <span className="flex items-center gap-1 text-cyan-400">
                              <Code className="w-3.5 h-3.5" /> {project.backendSpec.sampleCodeSnippet.filename}
                            </span>
                          </div>
                          <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 overflow-x-auto text-[11px] font-mono text-emerald-300 leading-relaxed">
                            <pre>{project.backendSpec.sampleCodeSnippet.code}</pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
