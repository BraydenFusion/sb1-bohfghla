import React from 'react';

const stats = [
  { value: '93%', label: 'Time Saved' },
  { value: '2.5x', label: 'Revenue Growth' },
  { value: '24/7', label: 'AI Support' }
];

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto w-full">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-sm text-text-muted mt-2">{label}</div>
        </div>
      ))}
    </div>
  );
};