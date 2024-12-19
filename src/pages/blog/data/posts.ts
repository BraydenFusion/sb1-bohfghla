import { Post } from '../types';

export const featuredPosts: Post[] = [
  {
    id: 1,
    title: 'The Future of AI in Business Automation',
    excerpt: 'Explore how AI is transforming business operations and what to expect in the coming years.',
    content: '',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630',
    date: 'Mar 15, 2024',
    readTime: 8,
    categories: ['AI', 'Business'],
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96',
      role: 'AI Research Lead'
    }
  },
  {
    id: 2,
    title: 'Building Scalable AI Solutions',
    excerpt: 'Learn the best practices for developing and deploying AI solutions at scale.',
    content: '',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630',
    date: 'Mar 12, 2024',
    readTime: 10,
    categories: ['Development', 'AI'],
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&h=96',
      role: 'Senior Engineer'
    }
  }
];

export const posts: Post[] = [
  {
    id: 3,
    title: 'Optimizing Customer Support with AI',
    excerpt: 'How AI-powered chatbots are revolutionizing customer service.',
    content: '',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=400',
    date: 'Mar 10, 2024',
    readTime: 6,
    categories: ['Customer Support', 'AI'],
    author: {
      name: 'Emily Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96',
      role: 'Product Manager'
    }
  },
  {
    id: 4,
    title: 'The Role of Machine Learning in Data Analysis',
    excerpt: 'Understanding how ML is transforming business intelligence.',
    content: '',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=800&h=400',
    date: 'Mar 8, 2024',
    readTime: 7,
    categories: ['Machine Learning', 'Data'],
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=96&h=96',
      role: 'Data Scientist'
    }
  }
];