import React from 'react';

interface SchedulingLayoutProps {
  children: React.ReactNode;
}

export const SchedulingLayout = ({ children }: SchedulingLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {children}
      </div>
    </div>
  );
};