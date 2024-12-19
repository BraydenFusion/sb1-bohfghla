import React from 'react';
import { ArrowRight } from 'lucide-react';
import { resources } from '../data/resources';

export const CommunityResources = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Community Resources</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to get started and grow with our community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map(({ icon: Icon, title, description, link }) => (
            <a
              key={title}
              href={link}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent-neon" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-neon transition-colors">
                {title}
              </h3>
              <p className="text-text-muted mb-4">{description}</p>
              <div className="flex items-center text-sm text-accent-neon">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};