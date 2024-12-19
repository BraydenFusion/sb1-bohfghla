import React from 'react';
import { docContent } from '../data/content';
import { DocSection } from './DocContent/DocSection';

export const DocMain = () => {
  return (
    <div className="prose prose-invert max-w-none">
      {docContent.map((section) => (
        <DocSection key={section.id} section={section} />
      ))}
    </div>
  );
};