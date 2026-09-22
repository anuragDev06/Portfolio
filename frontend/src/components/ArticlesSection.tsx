import React from 'react';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { articles } from '../data/portfolioData';

export const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-16 md:py-24 border-b border-slate-800/60">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-6 h-6 text-indigo-400" />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Blog & Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all group"
          >
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2 flex items-center justify-between gap-1">
                <span>{article.title}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {article.snippet}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
