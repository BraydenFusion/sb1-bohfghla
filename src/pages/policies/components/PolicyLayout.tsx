import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const PolicyLayout = ({ title, children }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-text-muted hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
};