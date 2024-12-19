import { Metric } from '../types';

export const metrics: Metric[] = [
  {
    name: 'Average Response Time',
    value: 45,
    unit: 'ms',
    trend: -5,
    description: 'Global average response time'
  },
  {
    name: 'Success Rate',
    value: 99.99,
    unit: '%',
    trend: 0.1,
    description: 'Successful API requests'
  },
  {
    name: 'Requests per Second',
    value: 2500,
    unit: 'req/s',
    trend: 15,
    description: 'Current request throughput'
  },
  {
    name: 'Error Rate',
    value: 0.01,
    unit: '%',
    trend: -0.5,
    description: 'Failed request percentage'
  }
];