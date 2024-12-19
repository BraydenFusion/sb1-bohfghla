import React from 'react';

export const RegisterFooter = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-text-muted">
        Already have an account?{' '}
        <a
          href="#"
          className="text-accent-neon hover:text-primary transition-colors"
        >
          Sign in
        </a>
      </p>
    </div>
  );
};