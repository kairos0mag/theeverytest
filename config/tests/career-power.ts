import { TestConfig } from '@/types/test';

export const careerPowerTest: TestConfig = {
  slug: 'career-power',
  title: 'AI 직장인 퇴사/이직 전투력 측정기',
  description: '나의 직장 내 스트레스 지수와 이직 전투력 등급을 확인해보세요.',
  category: 'career',
  isDataCollection: true,
  questions: [
    {
      id: 1,
      question: '일요일 저녁 9시, 당신의 기분은?',
      options: [
        { text: '내일 출근할 생각에 가슴이 답답하다', scoreTag: 'BURNOUT', dataValue: 'high_stress' },
        { text: '월요일 회의 자료를 미리 체크해둔다', scoreTag: 'WORKAHOLIC', dataValue: 'low_stress' },
      ],
    },
    {
      id: 2,
      question: '상사가 납득하기 어려운 업무를 지시했을 때?',
      options: [
        { text: '속으로 퇴사 다짐을 하며 일단 알겠다고 한다', scoreTag: 'BURNOUT', dataValue: 'passive_leave' },
        { text: '근거 자료를 모아 정중히 대안을 제시한다', scoreTag: 'WORKAHOLIC', dataValue: 'proactive' },
      ],
    },
  ],
  results: {
    BURNOUT: {
      code: 'BURNOUT',
      title: '방전된 야근 요정',
      subtitle: '배터리 잔량 3%, 긴급 이직 준비 권장',
      description: '열정은 소진되었고 시스템의 한계에 부딪힌 상태입니다. 지금이 포트폴리오를 다듬을 최적의 타이밍입니다.',
      tags: ['#칼퇴갈망', '#카페인중독', '#이직탐색중'],
      bestMatch: '칼퇴의 지배자',
      worstMatch: '열정 만수르 팀장',
    },
    WORKAHOLIC: {
      code: 'WORKAHOLIC',
      title: '프로 일잘러 전사',
      subtitle: '연봉 협상 테이블을 주도할 잠재력 보유',
      description: '업무 통제력이 높고 문제 해결 능력이 뛰어납니다. 더 큰 시장에서 가치를 인정받을 준비가 되어 있습니다.',
      tags: ['#성과추구', '#야망러', '#연봉점프'],
      bestMatch: '전략적 기획자',
      worstMatch: '월급루팡',
    },
  },
  seoArticle: '직장인 번아웃 증후군의 주요 원인과 이직 준비 시 고려해야 할 핵심 지표에 대한 분석 가이드입니다.',
};
