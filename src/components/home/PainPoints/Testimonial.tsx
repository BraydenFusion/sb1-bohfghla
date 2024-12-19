import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonial = () => {
  return (
    <div className="relative mt-16">
      <div className="absolute inset-0 bg-gradient-radial from-accent-neon/10 to-transparent" />
      <blockquote className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
        <Quote className="w-8 h-8 text-accent-neon mb-4" />
        <p className="text-lg italic text-white mb-4">
          "Fusion's AI agents transformed our customer support operations. Response times dropped by 85%, and customer satisfaction increased by 47% in just two months."
        </p>
        <footer className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=96&h=96"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-semibold">Michael Chen</div>
            <div className="text-sm text-text-muted">CTO, TechFlow Solutions</div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};