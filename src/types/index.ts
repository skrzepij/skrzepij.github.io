import type { ImageMetadata } from 'astro';

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata | string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
