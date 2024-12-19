import { Event } from '../types';

export const events: Event[] = [
  {
    id: 1,
    title: 'AI Automation Workshop',
    type: 'virtual',
    date: 'March 25, 2024',
    time: '10:00 AM - 12:00 PM EST',
    attendees: 250,
    isFree: true
  },
  {
    id: 2,
    title: 'Community Meetup - SF',
    type: 'in-person',
    date: 'April 5, 2024',
    time: '6:00 PM - 9:00 PM PST',
    location: 'San Francisco, CA',
    attendees: 75,
    isFree: false
  },
  {
    id: 3,
    title: 'Building AI Agents Webinar',
    type: 'virtual',
    date: 'April 12, 2024',
    time: '2:00 PM - 3:30 PM EST',
    attendees: 180,
    isFree: true
  }
];