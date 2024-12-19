import React from 'react';
import { PolicyLayout } from './components/PolicyLayout';

export const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy">
      <div className="prose prose-invert max-w-none">
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device that help us improve your experience.</p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for:</p>
        <ul>
          <li>Essential website functionality</li>
          <li>Performance monitoring</li>
          <li>User preferences</li>
          <li>Analytics</li>
        </ul>

        <h2>3. Cookie Management</h2>
        <p>You can manage cookie preferences through:</p>
        <ul>
          <li>Browser settings</li>
          <li>Our cookie consent tool</li>
          <li>Third-party opt-out tools</li>
        </ul>
      </div>
    </PolicyLayout>
  );
};