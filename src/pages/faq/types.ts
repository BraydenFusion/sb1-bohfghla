export interface FAQCategory {
  title: string;
  questions: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}