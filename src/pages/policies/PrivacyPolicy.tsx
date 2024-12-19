import React from 'react';
import { PolicyLayout } from './components/PolicyLayout';

export const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including when you:</p>
        <ul>
          <li>Create an account</li>
          <li>Use our AI services</li>
          <li>Contact our support team</li>
          <li>Subscribe to our newsletters</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Send you important updates</li>
          <li>Ensure platform security</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>We implement robust security measures to protect your personal information, including:</p>
        <ul>
          <li>End-to-end encryption</li>
          <li>Regular security audits</li>
          <li>Secure data storage</li>
          <li>Access controls</li>
        </ul>
      </div>
    </PolicyLayout>
  );
};