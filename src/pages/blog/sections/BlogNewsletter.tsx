import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const BlogNewsletter = () => {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-text-muted mb-6">
        Get the latest insights on AI and automation delivered to your inbox
      </p>
      
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white"
        />
        <Button type="submit" hasGlow className="w-full group">
          Subscribe
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
};