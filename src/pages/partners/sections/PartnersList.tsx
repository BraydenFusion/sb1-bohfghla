import React from 'react';
import { partners } from '../data/partners';

export const PartnersList = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Join these industry leaders in our partner ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(({ name, logo, type, description }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <img
                src={logo}
                alt={name}
                className="h-12 mb-4"
              />
              <div className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-neon text-sm inline-block mb-4">
                {type}
              </div>
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};