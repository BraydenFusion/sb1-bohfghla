import React from 'react';
import { Shield, Users, Zap, Heart } from 'lucide-react';
import { values } from '../data/values';

export const AboutValues = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent-neon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};