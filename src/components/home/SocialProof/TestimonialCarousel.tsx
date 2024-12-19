import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Fusion's AI agents have revolutionized how we handle customer support. Our response times are down 85% and customer satisfaction is at an all-time high.",
    author: "Sarah Chen",
    role: "Head of Customer Success",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96"
  },
  {
    quote: "The automation capabilities have transformed our scheduling system. We've eliminated double bookings and increased our booking efficiency by 92%.",
    author: "Michael Rodriguez",
    role: "Operations Director",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96"
  },
  {
    quote: "Implementing Fusion was a game-changer for our CRM processes. What used to take hours now happens automatically in minutes.",
    author: "Emily Thompson",
    role: "CTO",
    company: "DataSync Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96"
  }
];

export const TestimonialCarousel = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-24">
      {testimonials.map(({ quote, author, role, company, image }) => (
        <div 
          key={author}
          className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative space-y-4">
            <Quote className="w-6 h-6 text-accent-neon" />
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