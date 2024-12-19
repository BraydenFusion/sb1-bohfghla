import { Book, MessageSquare, Video, Code, Users, Rocket } from 'lucide-react';
import { Resource } from '../types';

export const resources: Resource[] = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    link: '/docs'
  },
  {
    icon: MessageSquare,
    title: 'Discussion Forums',
    description: 'Ask questions and share knowledge',
    link: '/forums'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn through step-by-step videos',
    link: '/tutorials'
  },
  {
    icon: Code,
    title: 'Code Examples',
    description: 'Real-world implementation examples',
    link: '/examples'
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Get guidance from experienced developers',
    link: '/mentorship'
  },
  {
    icon: Rocket,
    title: 'Showcase',
    description: 'See what others have built with Fusion AI',
    link: '/showcase'
  }
];