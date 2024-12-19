import React from 'react';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};