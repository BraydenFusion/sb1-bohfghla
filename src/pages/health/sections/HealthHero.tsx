import React from 'react';
import { CheckCircle } from 'lucide-react';

export const HealthHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 backdrop-blur-sm mb-6">
          <CheckCircle className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">All Systems Operational</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          System Status
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Track the performance and availability of Fusion AI services in real-time
        </p>
      </div>
    </section>
  );
};