import React from 'react';
import { tiers } from '../data/tiers';

export const PartnershipTiers = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Partnership Tiers</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Choose the partnership level that best fits your business goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map(({ name, description, benefits, icon: Icon }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent-neon" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-text-muted mb-6">{description}</p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};