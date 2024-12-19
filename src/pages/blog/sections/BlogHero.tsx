import React from 'react';
import { Search } from 'lucide-react';

export const BlogHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Latest Insights on
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            AI & Automation
          </span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
          Stay updated with the latest trends, best practices, and innovations in AI technology
        </p>
        
        <div className="max-w-2xl mx-auto relative">
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white pl-12"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
        </div>
      </div>
    </section>
  );
};