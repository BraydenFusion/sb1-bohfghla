import React from 'react';
import { features } from '../data/features';

export const FeaturesList = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, benefits }) => (
            <div
              key={title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all space-y-6">
                <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent-neon" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-text-muted">{description}</p>
                </div>
                
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-neon mt-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};