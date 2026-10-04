import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';
import { loveAttachmentTest } from './love-attachment';
import { spendingDnaTest } from './spending-dna';
import { socialBatteryTest } from './social-battery';

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
  'love-attachment': loveAttachmentTest,
  'spending-dna': spendingDnaTest,
  'social-battery': socialBatteryTest,
};

export const testRegistryEn: Record<string, TestConfig> = {
  'career-power': careerPowerEnTest,
  'love-attachment': loveAttachmentTest,
  'spending-dna': spendingDnaTest,
  'social-battery': socialBatteryTest,
};

export const getTestList = (lang: 'ko' | 'en' = 'ko'): TestMetadata[] => {
  return [
    {
      slug: 'career-power',
      title: lang === 'en' ? 'Workplace Survival & Career Archetype Test' : '직장인 전투력 및 번아웃 진단',
      description: lang === 'en' ? 'Analyze your 10 workplace survival personas with 20 questions.' : '20가지 시나리오로 알아보는 나의 직장인 생존 유형과 전투력',
      category: 'career',
      isFeatured: true,
      questionCount: 20,
    },
    {
      slug: 'love-attachment',
      title: lang === 'en' ? 'Relationship Attachment & Dating Style Test' : '연애 애착 유형 & 집착 회피 지수',
      description: lang === 'en' ? 'Decode your unconscious relationship patterns and attachment triggers.' : '사소한 카톡과 싸움에서 드러나는 나의 숨겨진 연애 본능',
      category: 'love',
      isFeatured: false,
      questionCount: 4,
    },
    {
      slug: 'spending-dna',
      title: lang === 'en' ? 'Spending DNA & Financial Survival Archetype' : '내 지갑 생존 본능 & 소비 DNA 진단',
      description: lang === 'en' ? 'Analyze your wallet survival instinct and financial habits.' : '월급날과 쇼핑 패턴으로 분석하는 나의 금융 방어력',
      category: 'personality',
      isFeatured: false,
      questionCount: 3,
    },
    {
      slug: 'social-battery',
      title: lang === 'en' ? 'Social Battery & Burnout Meter' : '내 사회적 배터리 수명 & 인간관계 방전 지수',
      description: lang === 'en' ? 'How long can your social battery last in gatherings?' : '모임 2시간 만에 방전되는 나, 내 사회성 배터리 용량은?',
      category: 'fun',
      isFeatured: false,
      questionCount: 3,
    },
  ];
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};

export const testRegistry = testRegistryKo;
