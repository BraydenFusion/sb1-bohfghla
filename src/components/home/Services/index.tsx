import React from 'react';
import { MessageSquare, Database, Calendar } from 'lucide-react';
import { ServiceHeading } from './ServiceHeading';
import { ServiceCard } from './ServiceCard';
import { ServiceActions } from './ServiceActions';

const services = [
  {
    icon: MessageSquare,
    title: 'Customer Support Automation',
    description: 'Provide instant, accurate responses to your customers with AI-powered chatbots and virtual agents.',
    metrics: ['24/7 Support', '95% Resolution Rate', '< 1min Response Time'],
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=600',
  },
  {
    icon: Database,
    title: 'CRM Integrations',
    description: 'Seamlessly connect your CRM tools for effortless data management and reporting.',
    metrics: ['50+ Integrations', 'Real-time Sync', 'Custom Workflows'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600',
  },
  {
    icon: Calendar,
    title: 'Appointment Setting',
    description: 'Maximize your time by automating scheduling with AI assistants.',
    metrics: ['Save 10+ hrs Weekly', 'Smart Availability', 'Zero Double Bookings'],
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=600',
  }
];

export const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 wave-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeading />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <ServiceActions />
      </div>
    </section>
  );
};