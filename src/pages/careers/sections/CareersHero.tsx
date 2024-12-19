import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CareersHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Join Our Mission to Transform Business
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            With AI Innovation
          </span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
          Help us build the future of intelligent automation and grow your career with a team of passionate innovators.
        </p>
        <Button size="lg" hasGlow className="group">
          View Open Positions
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};