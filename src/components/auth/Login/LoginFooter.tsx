import React from 'react';

export const LoginFooter = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-text-muted">
        Don't have an account?{' '}
        <a
          href="#"
          className="text-accent-neon hover:text-primary transition-colors"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};