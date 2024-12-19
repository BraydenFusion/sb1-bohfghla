import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../types';

interface FAQAccordionProps {
  faq: FAQ;
}

export const FAQAccordion = ({ faq }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-left">{faq.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-text-muted transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 bg-white/5">
          <p className="text-text-muted">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};