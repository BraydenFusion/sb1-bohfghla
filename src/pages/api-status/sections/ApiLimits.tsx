import React from 'react';
import { rateLimits } from '../data/limits';

export const ApiLimits = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Rate Limits</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6">Plan</th>
                <th className="text-center py-4 px-6">Requests/Second</th>
                <th className="text-center py-4 px-6">Requests/Day</th>
                <th className="text-center py-4 px-6">Burst Limit</th>
              </tr>
            </thead>
            <tbody>
              {rateLimits.map(({ plan, rps, daily, burst }) => (
                <tr key={plan} className="border-b border-white/10">
                  <td className="py-4 px-6 font-medium">{plan}</td>
                  <td className="text-center py-4 px-6">{rps}</td>
                  <td className="text-center py-4 px-6">{daily.toLocaleString()}</td>
                  <td className="text-center py-4 px-6">{burst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};