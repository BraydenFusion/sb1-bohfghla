import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    details: '+1 (555) 123-4567',
    availability: 'Mon-Fri, 9AM-6PM EST'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'support@fusion.ai',
    availability: '24/7 Response'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: 'Available 24/7',
    availability: 'Avg. Response Time: 2 mins'
  }
];

export const ContactMethods = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Other Ways to Connect</h3>
      
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
              <h4 className="font-medium">{title}</h4>
              <p className="text-accent-neon">{details}</p>
              <div className="flex items-center gap-1 text-sm text-text-muted mt-1">
                <Clock className="w-4 h-4" />
                {availability}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};