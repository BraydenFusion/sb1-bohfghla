import React from 'react';
import { Sparkles } from 'lucide-react';

export const AutomationHeading = () => {
  return (
    <div className="text-center space-y-4 mb-16">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-blue/10 text-accent-neon border border-accent-blue/20 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">AI-Powered Automation</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Automate Your Business with
        <span className="bg-gradient-to-r from-accent-neon to-primary bg-clip-text text-transparent block mt-2">
          Intelligent AI Agents
        </span>
      </h2>
      
      <p className="text-xl text-text-muted max-w-2xl mx-auto">
        Deploy AI agents that learn from your business processes and automate repetitive tasks with human-like intelligence.
      </p>
    </div>
  );
};