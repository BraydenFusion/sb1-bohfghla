import React from 'react';
import { offices } from '../data/offices';
import { MapPin } from 'lucide-react';

export const ContactOffices = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Global Offices</h2>
      
      <div className="space-y-4">
        {offices.map(({ city, address, country }) => (
          <div
            key={city}
            className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-accent-neon" />
              <h3 className="font-medium">{city}</h3>
            </div>
            <p className="text-text-muted text-sm">{address}</p>
            <p className="text-text-muted text-sm">{country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};