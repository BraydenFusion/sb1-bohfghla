import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: 'TechFlow Solutions',
    logo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=96',
    title: 'Automating Customer Support with AI',
    summary: 'How TechFlow reduced response times by 85% and improved customer satisfaction',
    industry: 'Technology',
    tags: ['Customer Support', 'AI Automation', 'Integration'],
    metrics: {
      responseTime: '85% reduction',
      satisfaction: '47% increase',
      savings: '$500k annually'
    }
  },
  {
    id: 2,
    company: 'Global Retail Co',
    logo: 'https://images.unsplash.com/photo-1560250097-0b93528c311b?auto=format&fit=crop&w=96',
    title: 'Scaling E-commerce Support',
    summary: 'Handling 10x more customer inquiries during peak seasons',
    industry: 'Retail',
    tags: ['E-commerce', 'Scalability', 'Peak Management'],
    metrics: {
      inquiries: '10x capacity',
      resolution: '92% automated',
      nps: '+25 points'
    }
  },
  {
    id: 3,
    company: 'FinServe Inc',
    logo: 'https://images.unsplash.com/photo-1560250097-0b93528c311c?auto=format&fit=crop&w=96',
    title: 'AI-Powered Financial Services',
    summary: 'Transforming customer service in the banking sector',
    industry: 'Finance',
    tags: ['Banking', 'Security', 'Compliance'],
    metrics: {
      compliance: '100% adherence',
      processing: '90% faster',
      accuracy: '99.9%'
    }
  }
];