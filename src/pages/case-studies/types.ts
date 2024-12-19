interface Testimonial {
  author: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  metrics: Record<string, string>;
}

export type { Testimonial };