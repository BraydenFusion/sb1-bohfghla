import { Metric } from '../types';

export const metrics: Metric[] = [
  {
    name: 'API',
    status: 'operational',
    uptime: 99.99,
    latency: 45
  },
  {
    name: 'AI Models',
    status: 'operational',
    uptime: 99.95,
    latency: 120
  },
  {
    name: 'Dashboard',
    status: 'operational',
    uptime: 99.98,
    latency: 85
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: 99.99,
    latency: 15
  }
];