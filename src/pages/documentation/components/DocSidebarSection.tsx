import React from 'react';
import { NavSection } from '../types';

interface DocSidebarSectionProps {
  section: NavSection;
}

export const DocSidebarSection = ({ section }: DocSidebarSectionProps) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{section.title}</h3>
      <ul className="space-y-2">
        {section.items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="block px-3 py-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};