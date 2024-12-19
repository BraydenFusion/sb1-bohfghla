import React from 'react';
import { docNavigation } from '../data/navigation';
import { DocSidebarSection } from './DocSidebarSection';

export const DocSidebar = () => {
  return (
    <nav className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="space-y-8">
        {docNavigation.map((section) => (
          <DocSidebarSection key={section.title} section={section} />
        ))}
      </div>
    </nav>
  );
};