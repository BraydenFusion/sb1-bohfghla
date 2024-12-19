export interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
}

export interface ContactMethod {
  icon: React.ElementType;
  title: string;
  details: string;
  availability: string;
}

export interface Office {
  city: string;
  address: string;
  country: string;
}