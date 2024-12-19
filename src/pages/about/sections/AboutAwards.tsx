import React from 'react';
import { awards } from '../data/awards';

export const AboutAwards = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recognition & Awards</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map(({ title, organization, year, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
            >
              <div className="text-accent-neon font-semibold mb-2">{year}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-text-muted mb-4">{description}</p>
              <div className="text-sm font-medium">{organization}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};