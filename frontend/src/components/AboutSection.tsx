import React from 'react';
import { User, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="flex items-center gap-2 mb-8">
        <User className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Bio paragraphs */}
        <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
          {personalInfo.about.map((paragraph, index) => (
            <p key={index} className="text-base text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quick Highlights Card */}
        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-4">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Quick Info</h3>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-sm font-medium text-slate-200">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400">Current Status</p>
              <p className="text-sm font-medium text-slate-200">{personalInfo.status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
