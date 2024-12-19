import React from 'react';
import { MessageSquare, Users, Calendar } from 'lucide-react';
import { PainPointsHeading } from './PainPointsHeading';
import { PainPointCard } from './PainPointCard';
import { Testimonial } from './Testimonial';

const painPoints = [
  {
    icon: MessageSquare,
    title: 'Customer Support Automation',
    problem: 'Struggling with 24/7 customer support coverage and response delays?',
    solution: 'AI agents provide instant, accurate responses across all time zones.',
    metric: '85% Faster Response Time'
  },
  {
    icon: Users,
    title: 'Intelligent CRM Management',
    problem: 'Drowning in manual data entry and missed follow-ups?',
    solution: 'Automated contact management and smart engagement tracking.',
    metric: '73% Less Manual Work'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling System',
    problem: 'Losing opportunities due to complex booking processes?',
    solution: 'AI-powered scheduling that eliminates double-bookings and no-shows.',
    metric: '92% Booking Efficiency'
  }
];

export const PainPoints = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PainPointsHeading />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <PainPointCard key={point.title} {...point} />
          ))}
        </div>
        
        <Testimonial />
      </div>
    </section>
  );
};