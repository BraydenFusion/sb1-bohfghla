import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const CaseStudiesTestimonials = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Customer Success Stories</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Hear from our customers about their transformation journey with Fusion AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ author, role, company, quote, image, metrics }) => (
            <div
              key={author}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all">
                <Quote className="w-8 h-8 text-accent-neon mb-4" />
                
                <blockquote className="text-lg mb-6">
                  "{quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={image}
                    alt={author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{author}</div>
                    <div className="text-sm text-text-muted">{role}</div>
                    <div className="text-sm text-text-muted">{company}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(metrics).map(([label, value]) => (
                    <div
                      key={label}
                      className="p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="text-lg font-bold text-accent-neon">
                        {value}
                      </div>
                      <div className="text-sm text-text-muted capitalize">
                        {label.replace(/_/g, ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};