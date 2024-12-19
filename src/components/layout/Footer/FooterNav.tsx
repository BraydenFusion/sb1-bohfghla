import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' }
    ]
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Community', href: '/community' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Health Status', href: '/health' },
      { label: 'API Status', href: '/api-status' }
    ]
  }
};

export const FooterNav = () => {
  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(navigation).map(([key, { title, links }]) => (
        <div key={key}>
          <h3 className="text-sm font-semibold mb-4">{title}</h3>
          <ul className="space-y-3">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="text-sm text-text-muted hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};