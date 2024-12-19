import React from 'react';
import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';
import { FooterBrand } from './FooterBrand';
import { FooterBottom } from './FooterBottom';

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/10">
      <div className="absolute inset-0 wave-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FooterBrand />
          </div>
          
          <div className="lg:col-span-2">
            <FooterNav />
          </div>
          
          <div className="lg:col-span-1">
            <FooterSocial />
          </div>
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
};