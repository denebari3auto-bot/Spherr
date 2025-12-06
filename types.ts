import React from 'react';

export interface ProductModule {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  modules: ProductModule[];
  visualType: 'network' | 'chart' | 'code' | 'bot';
  benefits: string[];
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Industry {
  title: string;
  description: string;
  image: string;
}

export interface IntegrationFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
}

export type ViewState = 
  | 'home' 
  | 'solutions'
  | 'integrations'
  | { type: 'product', productId: string }
  | { type: 'legal', doc: 'privacy' | 'terms' | 'cookie' | 'security' | 'compliance' };