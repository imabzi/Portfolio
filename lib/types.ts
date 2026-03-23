export type Section = 'home' | 'about' | 'portfolio' | 'resume';
export type ThemeMode = 'light' | 'dark';
export type Language = 'en' | 'fa';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface ResumeItemData {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description?: string;
  skills?: string[];
  media?: string[];
  logo?: string;
  projects?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconLabel?: string;
}
