import React from 'react';
import { NavDropdown } from './NavDropdown';
import { navigationItems } from './navigationItems';

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center gap-2">
      {navigationItems.map((item) => (
        <NavDropdown
          key={item.label}
          label={item.label}
          items={item.items}
        />
      ))}
    </nav>
  );
};