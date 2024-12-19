import React from 'react';
import { Brain } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Brain className="w-12 h-12 text-accent-neon" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Our Story
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Building the future of business automation with AI since 2020
        </p>
      </div>
    </section>
  );
};