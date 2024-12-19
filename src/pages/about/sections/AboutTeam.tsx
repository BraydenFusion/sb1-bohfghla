import React from 'react';
import { team } from '../data/team';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const AboutTeam = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Meet the people building the future of AI automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map(({ name, role, image, social }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent-neon/50 transition-all text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-text-muted mb-4">{role}</p>
              <div className="flex justify-center gap-4">
                {social.github && (
                  <a href={social.github} className="text-text-muted hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {social.linkedin && (
                  <a href={social.linkedin} className="text-text-muted hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {social.twitter && (
                  <a href={social.twitter} className="text-text-muted hover:text-white">
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