import React from 'react';
import { endpoints } from '../data/endpoints';

export const ApiEndpoints = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Endpoint Status</h2>
        
        <div className="space-y-4">
          {endpoints.map(({ name, method, status, latency, success }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-lg text-sm font-mono ${
                    method === 'GET' ? 'bg-blue-500/20 text-blue-500' :
                    method === 'POST' ? 'bg-green-500/20 text-green-500' :
                    method === 'PUT' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {method}
                  </div>
                  <div className="font-mono">{name}</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  status === 'operational' 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {status}
                </div>
              </div>
              
              <div className="flex gap-8 text-sm text-text-muted">
                <div>
                  <span className="font-medium">Latency: </span>
                  {latency}ms
                </div>
                <div>
                  <span className="font-medium">Success Rate: </span>
                  {success}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};