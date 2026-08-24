import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';

export interface TestMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'career' | 'personality' | 'love' | 'fun';
  isFeatured?: boolean;
  isAiPowered?: boolean;
  questionCount: number;
}

export const testRegistryKo: Record<string, TestConfig> = {
  'career-power': careerPowerTest,
};

export const testRegistryEn: Record<string, TestConfig> = {
  'career-power': careerPowerEnTest,
};

export const getTestList = (lang: 'ko' | 'en' = 'ko'): TestMetadata[] => {
  return [
    {
      slug: 'career-power',
      title: lang === 'en' ? '[AI] Workplace Survival & Career Archetype Test' : '[AI] 직장인 전투력 및 번아웃 진단',
      description: lang === 'en' ? 'Analyze your 10 workplace survival personas with 20 questions.' : '20가지 시나리오로 알아보는 나의 직장인 생존 유형과 전투력',
      category: 'career',
      isFeatured: true,
      isAiPowered: true,
      questionCount: 20,
    },
  ];
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};
