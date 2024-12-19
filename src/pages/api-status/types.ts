interface Metric {
  name: string;
  value: number;
  unit: string;
  trend?: number;
  description: string;
}

interface Endpoint {
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  status: 'operational' | 'degraded' | 'down';
  latency: number;
  success: number;
}

interface RateLimit {
  plan: string;
  rps: number;
  daily: number;
  burst: number;
}

export type { Metric, Endpoint, RateLimit };