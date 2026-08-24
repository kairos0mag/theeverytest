import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';

export const testRegistryKo: Record<string, TestConfig> = {
  'career-power': careerPowerTest,
};

export const testRegistryEn: Record<string, TestConfig> = {
  'career-power': careerPowerEnTest,
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};

export const testRegistry = testRegistryKo;
