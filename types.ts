
export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
