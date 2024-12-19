import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <div className={`px-3 py-1 rounded-full text-sm ${
          event.type === 'virtual' 
            ? 'bg-accent-blue/20 text-accent-neon' 
            : 'bg-primary/20 text-primary'
        }`}>
          {event.type === 'virtual' ? 'Virtual' : 'In-Person'}
        </div>
        {event.isFree && (
          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">
            Free
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-4">{event.title}</h3>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Clock className="w-4 h-4" />
          <span>{event.time}</span>
        </div>
        {event.location && (
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Users className="w-4 h-4" />
          <span>{event.attendees} attending</span>
        </div>
      </div>
      
      <Button variant="secondary" className="w-full">
        Register Now
      </Button>
    </div>
  );
};