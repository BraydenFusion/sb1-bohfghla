import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="min-h-screen bg-background pt-16">
      {children}
    </main>
  );
};