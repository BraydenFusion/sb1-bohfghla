import React from 'react';
import { DocSidebar } from '../components/DocSidebar';
import { DocMain } from '../components/DocMain';

export const DocContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid lg:grid-cols-4 gap-8">
        <DocSidebar />
        <div className="lg:col-span-3">
          <DocMain />
        </div>
      </div>
    </div>
  );
};