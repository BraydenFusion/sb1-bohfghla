import React from 'react';
import { Shield, Star } from 'lucide-react';

export const ContactTrust = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Shield className="w-5 h-5 text-accent-neon" />
        <span className="text-sm">SSL Secured & GDPR Compliant</span>
      </div>
      
      <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="flex items-center gap-2 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-sm italic text-text-muted">
          "Working with Fusion has been transformative for our business. Their AI solutions have helped us scale our operations significantly."
        </blockquote>
        <footer className="mt-3 text-sm">
          <strong>David Miller</strong>
          <span className="text-text-muted"> — CEO, TechGrowth</span>
        </footer>
      </div>
    </div>
  );
};