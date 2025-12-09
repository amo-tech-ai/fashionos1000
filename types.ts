import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DirectoryProfile {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
}

export interface Campaign {
  id: string;
  title: string;
  label: string;
  image: string;
}

export interface MarketplaceItem {
  title: string;
  image: string;
  cta: string;
}