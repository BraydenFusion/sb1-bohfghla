import React from 'react';
import { testimonials } from './data';

export const SocialProofTestimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-24">
      {testimonials.map(({ quote, author, role, company, image }) => (
        <div 
          key={author}
          className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative space-y-4">
            <p className="text-sm leading-relaxed">{quote}</p>
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt={author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">{author}</div>
                <div className="text-sm text-text-muted">{role}</div>
                <div className="text-sm text-text-muted">{company}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};