import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, TerminalSquare, RefreshCw, ShieldCheck } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DISPATCH API ENQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Touch</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-sans">
          Send a direct message via this interactive endpoint simulator. I'm actively open for MERN & Full-Stack engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact info side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 font-mono">
              <TerminalSquare className="w-5 h-5 text-emerald-400" />
              <span>Direct Communication</span>
            </h3>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Whether you have a full-stack role, remote contract, or project partnership inquiry, feel free to drop a message!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm font-mono text-slate-200 hover:text-emerald-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Location & Status</p>
                  <p className="text-sm font-mono text-slate-200">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-mono text-slate-400 mb-3">Professional Profiles:</p>
              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* API Form Simulator */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
          {/* Form Header Bar */}
          {/* <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">

            </div>

          </div> */}

          <div className="p-6">
            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>HTTP 200 OK — Message Delivered</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-[11px] leading-relaxed text-slate-300">
                  <pre>{JSON.stringify({
                    success: true,
                    status: 200,
                    message: "Thank you! Your message payload was received and stored in database.",
                    timestamp: new Date().toISOString()
                  }, null, 2)}</pre>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      "senderName": <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      "senderEmail": <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    "payloadMessage": <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your project overview, role description, or inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none font-mono"
                  ></textarea>
                </div>

                {/* Live JSON Payload Preview */}
                {(formData.name || formData.email || formData.message) && (
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    <span className="text-slate-400 block mb-1 font-bold">Request Body Preview:</span>
                    <pre className="text-emerald-400 leading-tight">
                      {JSON.stringify({
                        name: formData.name || '...',
                        email: formData.email || '...',
                        message: formData.message || '...'
                      }, null, 2)}
                    </pre>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting HTTP POST Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch HTTP POST Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
