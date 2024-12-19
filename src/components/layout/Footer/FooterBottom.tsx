import React from 'react';
import { Link } from 'react-router-dom';

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' }
];

export const FooterBottom = () => {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Fusion AI. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          {legalLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="text-sm text-text-muted hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};