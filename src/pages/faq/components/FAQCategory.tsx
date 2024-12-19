import React from 'react';
import { FAQAccordion } from './FAQAccordion';
import { FAQCategory as FAQCategoryType } from '../types';

interface FAQCategoryProps {
  category: FAQCategoryType;
}

export const FAQCategory = ({ category }: FAQCategoryProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{category.title}</h2>
      <div className="space-y-4">
        {category.questions.map((faq, index) => (
          <FAQAccordion key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};