import React from 'react';
import { metrics } from '../data/metrics';

export const ApiStatusMetrics = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map(({ name, value, unit, trend, description }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-sm text-text-muted mb-2">{name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm text-text-muted">{unit}</div>
                {trend && (
                  <div className={`text-sm ${
                    trend > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {trend > 0 ? '+' : ''}{trend}%
                  </div>
                )}
              </div>
              <p className="text-sm text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};