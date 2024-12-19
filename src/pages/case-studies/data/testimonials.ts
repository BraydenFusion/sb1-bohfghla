import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96',
    quote: 'Fusion AI has revolutionized our customer support operations. The automation capabilities have exceeded our expectations.',
    metrics: {
      response_time: '85% faster',
      customer_satisfaction: '+47%',
      cost_savings: '$500K/year',
      automation_rate: '92%'
    }
  },
  {
    author: 'Michael Rodriguez',
    role: 'Head of Operations',
    company: 'Global Retail Co',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96',
    quote: 'The scalability of Fusion AI has been incredible. We handled 10x more inquiries during peak season with ease.',
    metrics: {
      peak_capacity: '10x higher',
      resolution_rate: '95%',
      nps_increase: '+25 points',
      roi: '300%'
    }
  },
  {
    author: 'Emily Thompson',
    role: 'Director of Innovation',
    company: 'FinServe Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96',
    quote: 'Implementing Fusion AI was seamless. The platform\'s compliance features are perfect for our industry needs.',
    metrics: {
      compliance_rate: '100%',
      processing_speed: '90% faster',
      accuracy: '99.9%',
      time_saved: '1000+ hrs/mo'
    }
  }
];