import React from 'react';
import { metrics } from '../data/metrics';

export const HealthMetrics = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map(({ name, status, uptime, latency }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{name}</h3>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  status === 'operational' 
                    ? 'bg-green-500/10 text-green-500' 
                    : status === 'degraded'
                    ? 'bg-yellow-500/10 text-yellow-500'
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {status === 'operational' ? 'Operational' : status === 'degraded' ? 'Degraded' : 'Down'}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Uptime</span>
                  <span>{uptime}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Latency</span>
                  <span>{latency}ms</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};