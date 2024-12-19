import { MessageSquare, Users, Book, Award, Code, Zap } from 'lucide-react';
import { CommunityFeature } from '../types';

export const features: CommunityFeature[] = [
  {
    icon: MessageSquare,
    title: 'Discussion Forums',
    description: 'Engage in discussions about AI, automation, and development best practices.'
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with fellow developers, share experiences, and grow together.'
  },
  {
    icon: Book,
    title: 'Learning Resources',
    description: 'Access tutorials, guides, and documentation to enhance your skills.'
  },
  {
    icon: Award,
    title: 'Recognition Program',
    description: 'Get recognized for your contributions to the community.'
  },
  {
    icon: Code,
    title: 'Code Examples',
    description: 'Browse and share real-world implementation examples.'
  },
  {
    icon: Zap,
    title: 'Early Access',
    description: 'Be the first to try new features and provide feedback.'
  }
];