import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { steps } from '../data/process';

export const PartnershipProcess = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How to Partner with Us</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Simple steps to join our partner ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-white/10" />
              )}
              
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-neon" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" hasGlow className="group">
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};