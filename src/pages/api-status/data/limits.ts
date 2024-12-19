import { RateLimit } from '../types';

export const rateLimits: RateLimit[] = [
  {
    plan: 'Free',
    rps: 10,
    daily: 10000,
    burst: 20
  },
  {
    plan: 'Pro',
    rps: 50,
    daily: 100000,
    burst: 100
  },
  {
    plan: 'Business',
    rps: 200,
    daily: 1000000,
    burst: 400
  },
  {
    plan: 'Enterprise',
    rps: 1000,
    daily: 10000000,
    burst: 2000
  }
];