import React from 'react';
import { incidents } from '../data/incidents';

export const HealthIncidents = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Recent Incidents</h2>
        
        <div className="space-y-6">
          {incidents.map(({ id, title, status, date, updates }) => (
            <div
              key={id}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-text-muted">{date}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  status === 'resolved' 
                    ? 'bg-green-500/10 text-green-500' 
                    : status === 'monitoring'
                    ? 'bg-yellow-500/10 text-yellow-500'
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              </div>
              
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div key={index} className="pl-4 border-l-2 border-white/10">
                    <p className="text-sm text-text-muted mb-1">{update.time}</p>
                    <p className="text-sm">{update.message}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};