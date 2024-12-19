interface Metric {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: number;
  latency: number;
}

interface IncidentUpdate {
  time: string;
  message: string;
}

interface Incident {
  id: number;
  title: string;
  status: 'resolved' | 'monitoring' | 'investigating';
  date: string;
  updates: IncidentUpdate[];
}

export type { Metric, Incident, IncidentUpdate };