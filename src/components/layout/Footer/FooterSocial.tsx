import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export const FooterSocial = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Connect With Us</h3>
      
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-neon/50 flex items-center justify-center transition-all group"
          >
            <Icon className="w-5 h-5 text-text-muted group-hover:text-accent-neon transition-colors" />
          </a>
        ))}
      </div>
      
      <p className="text-sm text-text-muted">
        Stay updated with our latest features and releases.
      </p>
    </div>
  );
};