import React from 'react';
import { DocSectionType } from '../../types';
import { DocSubsection } from './DocSubsection';
import { DocCodeBlock } from '../DocCodeBlock';

interface DocSectionProps {
  section: DocSectionType;
}

export const DocSection = ({ section }: DocSectionProps) => {
  return (
    <div className="mb-12">
      <h2 id={section.id} className="text-2xl font-bold mb-4">{section.title}</h2>
      <p className="text-text-muted mb-6">{section.description}</p>
      
      {section.code && <DocCodeBlock code={section.code} />}
      
      {section.subsections?.map((subsection) => (
        <DocSubsection key={subsection.id} subsection={subsection} />
      ))}
    </div>
  );
};