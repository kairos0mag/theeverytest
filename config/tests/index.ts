import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';

export interface TestMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'career' | 'personality' | 'love' | 'fun';
  isFeatured?: boolean;
  questionCount: number;
}

export const testRegistryKo: Record<string, TestConfig> = {
  'career-power': careerPowerTest,
};

export const testRegistryEn: Record<string, TestConfig> = {
  'career-power': careerPowerEnTest,
};

// 메인 화면 및 카테고리 분류를 위한 메타데이터 목록
export const getTestList = (lang: 'ko' | 'en' = 'ko'): TestMetadata[] => {
  return [
    {
      slug: 'career-power',
      title: lang === 'en' ? 'AI Workplace Survival & Career Archetype Test' : 'AI 직장인 전투력 및 번아웃 진단',
      description: lang === 'en' ? 'Analyze your 10 workplace survival personas with 20 questions.' : '20가지 시나리오로 알아보는 나의 직장인 생존 유형과 전투력',
      category: 'career',
      isFeatured: true,
      questionCount: 20,
    },
    // 추후 추가될 테스트 예시 템플릿
    // {
    //   slug: 'love-dna',
    //   title: lang === 'en' ? 'AI Love & Relationship DNA Test' : 'AI 연애 심리 및 연애 DNA 테스트',
    //   description: lang === 'en' ? 'Uncover your hidden relationship triggers and dating style.' : '숨겨진 연애 패턴과 이상형 매칭을 분석합니다.',
    //   category: 'love',
    //   isFeatured: false,
    //   questionCount: 15,
    // },
  ];
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};
