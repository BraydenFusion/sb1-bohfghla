export interface Position {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface Perk {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}