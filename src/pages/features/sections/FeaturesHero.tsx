import React from 'react';
import { Sparkles } from 'lucide-react';

export const FeaturesHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/10 text-accent-neon border border-accent-blue/20 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Powerful AI Features</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Transform Your Business with
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Discover how our AI-powered features can streamline your operations and drive growth
        </p>
      </div>
    </section>
  );
};