export interface FAQ { q: string; a: string }

export interface PageData {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  canonical: string;
  intro: string;
  highlights: string[];
  about: string;
  process: { step: string; detail: string }[];
  faqs: FAQ[];
  testimonial: { name: string; area: string; text: string; stars: number };
  cta: string;
  serviceCategory: string;
}
