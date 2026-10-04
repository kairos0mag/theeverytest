import { TestConfig } from '@/types/test';

export const spendingDnaTest: TestConfig = {
  slug: 'spending-dna',
  title: '내 지갑 생존 본능 & 소비 DNA 진단',
  description: '급여일 통장 잔고와 쇼핑 패턴으로 분석하는 나의 금융 방어력',
  category: 'personality',
  questions: [
    {
      id: 1,
      question: '월급날 통장에 찍힌 급여를 볼 때 가장 먼저 드는 생각은?',
      options: [
        { text: '스쳐 지나가는 사이버 머니... 카드값 빠져나가면 끝이다.', scoreTag: 'YOLO' },
        { text: '자동이체로 적금과 투자금부터 쪼개어 칼같이 분산한다.', scoreTag: 'SAVER' },
        { text: '고생한 나를 위한 셀프 선물(쇼핑, 맛집)을 고른다.', scoreTag: 'REWARD' },
        { text: '최근 관심 있는 ETF나 주식 매수 타이밍을 살핀다.', scoreTag: 'INVESTOR' },
      ],
    },
    {
      id: 2,
      question: '마음에 드는 30만 원 상당의 코트를 발견했을 때 나의 행동은?',
      options: [
        { text: '인생 뭐 있어? 무이자 할부 긁고 일단 입고 본다.', scoreTag: 'YOLO' },
        { text: '집에 비슷한 옷이 있는지 점검하고 장바구니에 넣어둔 채 2주간 고민한다.', scoreTag: 'SAVER' },
        { text: '이번 달 목표를 하나 달성하면 보상으로 사기로 다짐한다.', scoreTag: 'REWARD' },
        { text: '30만 원이면 배당주 몇 주를 살 수 있는지 머릿속으로 계산해 본다.', scoreTag: 'INVESTOR' },
      ],
    },
    {
      id: 3,
      question: '친구들과의 모임에서 1/N 정산할 때 나의 스타일은?',
      options: [
        { text: '내가 먼저 쿨하게 긁고 나중에 카톡 정산 요청한다.', scoreTag: 'YOLO' },
        { text: '영수증 꼼꼼히 확인하고 10원 단위까지 칼정산한다.', scoreTag: 'SAVER' },
        { text: '기분 좋으면 디저트나 커피는 내가 쏜다.', scoreTag: 'REWARD' },
        { text: '할인 쿠폰이나 카드 제휴 혜택을 챙겨 총액을 깎아준다.', scoreTag: 'INVESTOR' },
      ],
    },
  ],
  results: {
    SAVER: {
      title: '철벽 방어형 소금 요정 (절약러)',
      subtitle: '티끌 모아 태산! 지출 통제의 달인',
      description: '계획되지 않은 지출은 죄악! 가성비와 절약에 능하며 통장 잔고가 늘어나는 것에서 가장 큰 안정감과 쾌감을 느끼는 알짜 부자형입니다.',
      tags: ['#소금요정', '#가성비갑', '#알뜰살뜰', '#종잣돈수호자'],
      bestMatch: '전략적 기회주의 투자러',
      worstMatch: '순간 충동 욜로 폭주기관차',
    },
    YOLO: {
      title: '순간 충동 욜로 폭주기관차',
      subtitle: '내일의 내가 갚는다! 현재의 행복이 우선',
      description: '스트레스는 쇼핑과 맛있는 음식으로 푼다! 금융 치료에 진심이며 통장은 늘 통행세만 내고 비워지지만 인생의 추억과 재미만큼은 확실히 챙깁니다.',
      tags: ['#금융치료', '#인생한번', '#카드값폭격', '#플렉스러'],
      bestMatch: '가심비 극대화 보상 심리러',
      worstMatch: '철벽 방어형 소금 요정',
    },
    INVESTOR: {
      title: '전략적 기회주의 투자러',
      subtitle: '원화 보유는 손해! 돈이 일하게 만드는 두뇌파',
      description: '소비재를 살 바엔 자산을 산다! 복리의 마법을 믿으며 모든 비용을 기회비용과 자본수익률 관점에서 냉철하게 분석하는 미래형 자산가입니다.',
      tags: ['#스마트투자', '#복리의마법', '#자산증식', '#기회비용'],
      bestMatch: '철벽 방어형 소금 요정',
      worstMatch: '순간 충동 욜로 폭주기관차',
    },
    REWARD: {
      title: '가심비 극대화 보상 심리러',
      subtitle: '노력한 나에게 주는 확실하고 우아한 당근',
      description: '평소에는 평범하게 소비하지만, 큰 고비를 넘기거나 목표를 달성했을 때 확실하게 나에게 투자합니다. 만족도 높은 가심비 소비의 달인입니다.',
      tags: ['#가심비', '#셀프보상', '#현명한소비', '#취향존중'],
      bestMatch: '순간 충동 욜로 폭주기관차',
      worstMatch: '철벽 방어형 소금 요정',
    },
  },
};
