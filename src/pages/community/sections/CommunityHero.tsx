import React from 'react';
import { Button } from '@/components/ui/Button';
import { Users, ArrowRight } from 'lucide-react';

export const CommunityHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/10 text-accent-neon border border-accent-blue/20 backdrop-blur-sm mb-6">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Join 50,000+ Members</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Connect with the
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            Fusion AI Community
          </span>
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
          Share knowledge, get help, and collaborate with fellow developers and AI enthusiasts
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" hasGlow className="group">
            Join the Community
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Browse Resources
          </Button>
        </div>
      </div>
    </section>
  );
};