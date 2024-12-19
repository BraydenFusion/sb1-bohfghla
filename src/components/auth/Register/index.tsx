import React from 'react';
import { RegisterForm } from './RegisterForm';
import { RegisterHeader } from './RegisterHeader';
import { RegisterFooter } from './RegisterFooter';

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
      
      <div className="relative w-full max-w-lg">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <RegisterHeader />
          <RegisterForm />
          <RegisterFooter />
        </div>
      </div>
    </div>
  );
};