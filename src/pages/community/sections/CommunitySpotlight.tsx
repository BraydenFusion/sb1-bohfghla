import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { members } from '../data/members';

export const CommunitySpotlight = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Community Spotlight</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Meet our amazing community members and their contributions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <div
              key={member.id}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-text-muted mb-4">{member.role}</p>
              <p className="text-sm mb-6">{member.contribution}</p>
              
              <div className="flex justify-center gap-4">
                {member.github && (
                  <a
                    href={member.github}
                    className="text-text-muted hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-text-muted hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};