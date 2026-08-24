export interface Option {
  text: string;
  scoreTag: string;
  dataValue?: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface TestResult {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bestMatch: string;
  worstMatch: string;
}

export interface TestConfig {
  slug: string;
  title: string;
  description: string;
  category: 'viral' | 'career' | 'beauty' | 'finance';
  isDataCollection: boolean;
  questions: Question[];
  results: Record<string, TestResult>;
  seoArticle: string;
}
