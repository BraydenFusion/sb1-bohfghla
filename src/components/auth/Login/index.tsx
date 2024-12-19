import React from 'react';
import { LoginForm } from './LoginForm';
import { LoginHeader } from './LoginHeader';
import { LoginFooter } from './LoginFooter';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 wave-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent" />
      
      <div className="relative w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};