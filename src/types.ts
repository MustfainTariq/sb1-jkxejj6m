export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface Review {
  name: string;
  country: string;
  rating: number;
  comment: string;
  price: string;
  duration: string;
  service: string;
}

export interface PricingPlan {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
}