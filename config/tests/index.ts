import { TestConfig } from '@/types/test';
import { careerPowerTest } from './career-power';
import { careerPowerEnTest } from './career-power-en';

export interface TestMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'career' | 'personality' | 'love' | 'fun';
  isFeatured?: boolean;
  isAiPowered?: boolean; // 실제 AI 분석 엔진이 연동된 테스트인지 여부
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
      // isAiPowered가 true일 때만 제목 앞에 [AI] 태그가 자동으로 붙도록 설정
      title: `${lang === 'en' ? '' : '[AI] '}Workplace Survival & Career Archetype Test`.replace(
        /^\[AI\]\s*/,
        lang === 'en' ? '[AI] ' : '[AI] '
      ),
      // 한국어/영어 타이틀 깔끔하게 매핑
      // @ts-ignore
      title: lang === 'en' 
        ? '[AI] Workplace Survival & Career Archetype Test' 
        : '[AI] 직장인 전투력 및 번아웃 진단',
      description: lang === 'en' ? 'Analyze your 10 workplace survival personas with 20 questions.' : '20가지 시나리오로 알아보는 나의 직장인 생존 유형과 전투력',
      category: 'career',
      isFeatured: true,
      isAiPowered: true, // 실제 AI 분석 로직이 작동하므로 true
      questionCount: 20,
    },
    // 추후 일반 심리 테스트(순수 점수 합산형)를 추가할 때는 아래와 같이 isAiPowered: false로 두면 [AI]가 붙지 않습니다.
    // {
    //   slug: 'simple-mbti-fun',
    //   title: lang === 'en' ? 'Quick Color Personality Test' : '스피디 컬러 성향 테스트',
    //   description: '...',
    //   category: 'personality',
    //   isAiPowered: false, // AI 미사용 (순수 점수 계산)
    //   questionCount: 10,
    // }
  ];
};

export const getTestConfig = (slug: string, lang: 'ko' | 'en' = 'ko'): TestConfig | undefined => {
  return lang === 'en' ? testRegistryEn[slug] : testRegistryKo[slug];
};
