import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Brain } from 'lucide-react';

const mainNavLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' }
];

const resourceLinks = [
  { label: 'Community', href: '/community' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' }
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <Brain className="w-8 h-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Fusion AI</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              {mainNavLinks.map(({ label, href }) => (
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

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {resourceLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-sm text-text-muted hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};