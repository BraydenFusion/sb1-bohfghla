import React from 'react';
import { Hero } from './sections/Hero';
import { PainPoints } from './sections/PainPoints';
import { Services } from './sections/Services';
import { SocialProof } from './sections/SocialProof';
import { Pricing } from './sections/Pricing';
import { Contact } from './sections/Contact';
import { ChatWidget } from '@/components/chat/ChatWidget';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Services />
      <SocialProof />
      <Pricing />
      <Contact />
      <ChatWidget />
    </main>
  );
};