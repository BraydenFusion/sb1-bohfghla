import React from 'react';

interface DocCodeBlockProps {
  code: string;
}

export const DocCodeBlock = ({ code }: DocCodeBlockProps) => {
  return (
    <pre className="bg-white/5 p-4 rounded-lg overflow-x-auto">
      <code className="text-sm font-mono">{code}</code>
    </pre>
  );
};