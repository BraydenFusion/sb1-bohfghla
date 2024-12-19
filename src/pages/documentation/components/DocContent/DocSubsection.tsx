import React from 'react';
import { DocSubsectionType } from '../../types';
import { DocCodeBlock } from '../DocCodeBlock';

interface DocSubsectionProps {
  subsection: DocSubsectionType;
}

export const DocSubsection = ({ subsection }: DocSubsectionProps) => {
  return (
    <div className="mt-8">
      <h3 id={subsection.id} className="text-xl font-semibold mb-4">
        {subsection.title}
      </h3>
      <p className="text-text-muted mb-4">{subsection.description}</p>
      
      {subsection.code && <DocCodeBlock code={subsection.code} />}
    </div>
  );
};