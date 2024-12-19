import { Incident } from '../types';

export const incidents: Incident[] = [
  {
    id: 1,
    title: 'Increased API Latency',
    status: 'resolved',
    date: 'March 15, 2024',
    updates: [
      {
        time: '14:30 UTC',
        message: 'Issue resolved - API latency has returned to normal levels.'
      },
      {
        time: '14:15 UTC',
        message: 'Identified the cause as increased traffic. Scaling up resources.'
      },
      {
        time: '14:00 UTC',
        message: 'Investigating increased API latency in US-West region.'
      }
    ]
  },
  {
    id: 2,
    title: 'Database Performance Degradation',
    status: 'monitoring',
    date: 'March 14, 2024',
    updates: [
      {
        time: '18:45 UTC',
        message: 'Monitoring system performance after implementing optimizations.'
      },
      {
        time: '18:30 UTC',
        message: 'Applied database query optimizations to improve performance.'
      }
    ]
  }
];