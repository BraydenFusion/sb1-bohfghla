import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { FormData } from '../types';

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Business Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white"
          placeholder="Company Inc."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent-neon/50 focus:ring-1 focus:ring-accent-neon/50 transition-all text-white resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-text-muted">
          I agree to receive communications from Fusion AI. Read our{' '}
          <a href="/privacy" className="text-accent-neon hover:underline">Privacy Policy</a>.
        </label>
      </div>

      <Button type="submit" size="lg" hasGlow className="w-full group">
        Send Message
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};