import React from 'react';
import { Button } from '@/components/ui/Button';
import { Bell } from 'lucide-react';

export const HealthSubscribe = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-text-muted mb-8">
            Subscribe to receive notifications about system status changes and incidents
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white"
            />
            <Button hasGlow className="gap-2">
              <Bell className="w-4 h-4" />
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};