import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const CareersTestimonials = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Life at Fusion AI</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Hear from our team members about their experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, image, quote, duration }) => (
            <div
              key={name}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all">
                <Quote className="w-8 h-8 text-accent-neon mb-4" />
                
                <blockquote className="text-lg mb-6">
                  "{quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-text-muted">{role}</div>
                    <div className="text-sm text-text-muted">{duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};