import React from 'react';
import { contactMethods } from '../data/contact';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Contact Information</h2>
      
      <div className="space-y-4">
        {contactMethods.map(({ icon: Icon, title, details, availability }) => (
          <div
            key={title}
            className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-accent-neon" />
            </div>
            
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-accent-neon">{details}</p>
              <div className="text-sm text-text-muted mt-1">{availability}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};