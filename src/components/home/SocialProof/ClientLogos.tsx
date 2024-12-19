import React from 'react';

const clients = [
  { name: 'Hilton', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Hilton_Hotels_%26_Resorts_logo.svg' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
];

export const ClientLogos = () => {
  return (
    <div className="py-16 border-y border-white/10">
      <p className="text-center text-sm text-text-muted mb-8">TRUSTED BY INDUSTRY LEADERS</p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {clients.map(({ name, logo }) => (
          <div 
            key={name}
            className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={logo}
              alt={name}
              className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};