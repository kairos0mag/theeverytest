import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';
import { spendingDnaTest } from './spending-dna';

export const testRegistryKo: Record<string, TestConfig> = {
  'career-power': careerPowerTest,
  'spending-dna': spendingDnaTest,
};

export const testRegistryEn: Record<string, TestConfig> = {
  'career-power': careerPowerEnTest,
  'spending-dna': spendingDnaTest, // 영문 필요 시 확장 가능
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};

export const testRegistry = testRegistryKo;
