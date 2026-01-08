
import React from 'react';

export enum AppSection {
  HOME = 'home',
  ACADEMIC = 'academic',
  POLICIES = 'policies',
  INTERNSHIP = 'internship',
  CAREER = 'career',
  SELFCARE = 'selfcare',
  GLOSSARY = 'glossary'
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  content?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  icon?: React.ReactNode;
}

export interface NavItem {
  id: AppSection;
  label: string;
  icon: React.ReactNode;
}
