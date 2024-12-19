import React from 'react';
import { PolicyLayout } from './components/PolicyLayout';

export const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service">
      <div className="prose prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Fusion AI's services, you agree to be bound by these Terms of Service.</p>

        <h2>2. Service Description</h2>
        <p>Fusion AI provides AI-powered automation solutions for businesses, including:</p>
        <ul>
          <li>Customer support automation</li>
          <li>Data processing</li>
          <li>Workflow automation</li>
          <li>Analytics and reporting</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>As a user of our services, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain account security</li>
          <li>Comply with applicable laws</li>
          <li>Respect intellectual property rights</li>
        </ul>
      </div>
    </PolicyLayout>
  );
};