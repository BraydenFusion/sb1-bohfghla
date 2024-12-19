import React from 'react';
import { DocSearch } from '../components/DocSearch';

export const DocHero = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Documentation
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
          Everything you need to integrate and build with Fusion AI
        </p>
        <DocSearch />
      </div>
    </section>
  );
};