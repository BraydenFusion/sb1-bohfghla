import React from 'react';
import { industries } from '../data/filters';

export const CaseStudiesFilter = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {industries.map((industry) => (
            <button
              key={industry}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};