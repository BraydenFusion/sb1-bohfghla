import React from 'react';

export const ContactHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Get in Touch
          <span className="block mt-2 bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            We're Here to Help
          </span>
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Have questions about our AI solutions? Our team is ready to assist you.
        </p>
      </div>
    </section>
  );
};