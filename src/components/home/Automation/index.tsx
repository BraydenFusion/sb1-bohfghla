import React from 'react';
import { AutomationHeading } from './AutomationHeading';
import { AutomationGrid } from './AutomationGrid';
import { AutomationMetrics } from './AutomationMetrics';

export const Automation = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutomationHeading />
        <AutomationGrid />
        <AutomationMetrics />
      </div>
    </section>
  );
};