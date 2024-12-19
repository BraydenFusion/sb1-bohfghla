import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    author: 'Sarah Chen',
    role: 'Head of Customer Success',
    company: 'TechFlow Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96',
    quote: 'The Smart Virtual Agents have transformed our customer support operations, enabling us to provide instant, accurate responses 24/7.',
    feature: 'Smart Virtual Agents',
    impact: {
      value: '85%',
      description: 'Reduction in response time while maintaining 95% customer satisfaction'
    }
  },
  {
    author: 'Michael Rodriguez',
    role: 'CTO',
    company: 'DataSync Pro',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96',
    quote: 'The Adaptive Learning feature continuously improves our AI models, resulting in increasingly accurate and contextual responses.',
    feature: 'Adaptive Learning',
    impact: {
      value: '40%',
      description: 'Improvement in AI model accuracy within first 3 months'
    }
  },
  {
    author: 'Emily Thompson',
    role: 'Director of Operations',
    company: 'GlobalTech Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96',
    quote: 'Multi-Channel Support has allowed us to provide consistent customer service across all platforms while reducing operational costs.',
    feature: 'Multi-Channel Support',
    impact: {
      value: '60%',
      description: 'Cost reduction in customer support operations'
    }
  }
];