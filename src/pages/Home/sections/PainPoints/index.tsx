import React from 'react';
import { PainPointsHeading } from './PainPointsHeading';
import { PainPointsGrid } from './PainPointsGrid';
import { PainPointsTestimonial } from './PainPointsTestimonial';

export const PainPoints = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PainPointsHeading />
        <PainPointsGrid />
        <PainPointsTestimonial />
      </div>
    </section>
  );
};