import React, { useState } from 'react';
import { TerminalSquare, Send, Check, Copy, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';
import { apiConsolePresets } from '../data/portfolioData';
import type { ApiConsolePreset } from '../types/portfolio';

export const ApiConsoleSection: React.FC = () => {
  const [activePreset, setActivePreset] = useState<ApiConsolePreset>(apiConsolePresets[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiConsolePreset>(apiConsolePresets[0]);
  const [latency, setLatency] = useState<number>(24);
  const [copied, setCopied] = useState(false);

  const handleSendRequest = (preset: ApiConsolePreset) => {
    setLoading(true);
    // Simulate API request latency
    const randomLatency = Math.floor(Math.random() * 25) + 15;
    setTimeout(() => {
      setActivePreset(preset);
      setResponse(preset);
      setLatency(randomLatency);
      setLoading(false);
    }, 280);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(response.responsePayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-console" className="py-16 md:py-24 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 mb-3">
            <TerminalSquare className="w-3.5 h-3.5" />
            <span>INTERACTIVE REST API SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">API Console</span> & Playground
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-sans">
          Test real-time backend endpoint responses. Select any query preset below to trigger the REST simulator and inspect HTTP status headers and JSON payloads.
        </p>
      </div>

      {/* Main Console Container */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden glow-emerald">
        {/* Console Window Header Bar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="text-xs font-mono text-slate-300 border-l border-slate-800 pl-3">
              mern-rest-client v1.0.4
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> CORS Enabled
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <Zap className="w-3.5 h-3.5" /> Latency: {latency}ms
            </span>
          </div>
        </div>

        {/* Console Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Endpoints & Request Builder */}
          <div className="lg:col-span-5 p-5 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-5 bg-slate-950/40">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Select Endpoint Query:</span>
              <span className="text-[10px] text-emerald-400">4 Presets Available</span>
            </div>

            {/* Preset Buttons List */}
            <div className="space-y-2.5">
              {apiConsolePresets.map((preset) => {
                const isActive = activePreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSendRequest(preset)}
                    disabled={loading}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-slate-900 border-emerald-500/50 text-slate-100 ring-1 ring-emerald-500/30'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                        preset.method === 'GET'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : 'bg-purple-950 text-purple-400 border border-purple-500/40'
                      }`}
                    >
                      {preset.method}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono font-semibold text-slate-200 truncate">
                        {preset.endpoint}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {preset.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Request Bar & Send Action */}
            <div className="pt-3 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 mb-2">Request Execution URL:</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center justify-between">
                  <span className="truncate">{activePreset.method} https://api.mern.dev{activePreset.endpoint}</span>
                </div>
                <button
                  onClick={() => handleSendRequest(activePreset)}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: JSON Response Viewer */}
          <div className="lg:col-span-7 p-5 bg-slate-950 flex flex-col justify-between min-h-[380px]">
            <div>
              {/* Response Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-semibold">
                    HTTP {response.status} {response.statusText}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Content-Type: application/json
                  </span>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
              </div>

              {/* Response JSON Formatting */}
              <div className="relative rounded-xl bg-slate-900/80 border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-slate-200">
                {loading ? (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-400 space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
                    <span className="text-xs font-mono">Executing query & fetching MongoDB payload...</span>
                  </div>
                ) : (
                  <pre className="text-emerald-300 text-[11px] leading-relaxed">
                    {JSON.stringify(response.responsePayload, null, 2)}
                  </pre>
                )}
              </div>
            </div>

            {/* Console Bottom Info Footer */}
            <div className="pt-3 mt-4 border-t border-slate-900 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1 text-slate-400">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> Express Controller Handler Executed
              </span>
              <span>Bytes: {JSON.stringify(response.responsePayload).length} B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
