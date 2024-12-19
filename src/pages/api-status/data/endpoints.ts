import { Endpoint } from '../types';

export const endpoints: Endpoint[] = [
  {
    name: '/v1/agents',
    method: 'GET',
    status: 'operational',
    latency: 45,
    success: 99.99
  },
  {
    name: '/v1/agents/create',
    method: 'POST',
    status: 'operational',
    latency: 120,
    success: 99.95
  },
  {
    name: '/v1/agents/update',
    method: 'PUT',
    status: 'operational',
    latency: 85,
    success: 99.98
  },
  {
    name: '/v1/agents/delete',
    method: 'DELETE',
    status: 'operational',
    latency: 65,
    success: 99.99
  }
];