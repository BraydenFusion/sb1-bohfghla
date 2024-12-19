import React from 'react';
import { ServicesHeading } from './ServicesHeading';
import { ServicesGrid } from './ServicesGrid';
import { ServicesActions } from './ServicesActions';

export const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeading />
        <ServicesGrid />
        <ServicesActions />
      </div>
    </section>
  );
};