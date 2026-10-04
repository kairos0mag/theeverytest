import { TestConfig } from '@/types/test';

export const socialBatteryTest: TestConfig = {
  slug: 'social-battery',
  title: '내 사회적 배터리 수명 & 인간관계 방전 지수',
  description: '모임 2시간 만에 기가 빨리는 나, 내 사회성 배터리 용량은 얼마일까?',
  category: 'fun',
  questions: [
    {
      id: 1,
      question: '금요일 저녁, 이번 주 내내 열심히 일한 나에게 가장 완벽한 일정은?',
      options: [
        { text: '집에서 편한 옷 입고 배달음식 시켜 먹으며 유튜브 보기', scoreTag: 'BATTERY_LOW' },
        { text: '소수의 찐친 1~2명과 조용한 바나 카페에서 두런두런 대화하기', scoreTag: 'BATTERY_MED' },
        { text: '불금인데 집에 왜 가? 핫플에서 신나게 달리기', scoreTag: 'BATTERY_HIGH' },
        { text: '침대에 누워 아무도 나를 찾지 않는 고요를 즐기기', scoreTag: 'BATTERY_ZERO' },
      ],
    },
    {
      id: 2,
      question: '친구 모임 중 2차를 가자는 말이 나왔을 때 내 속마음은?',
      options: [
        { text: '‘하... 이제 체력 방전인데 어떻게 자연스럽게 빠져나가지?’', scoreTag: 'BATTERY_LOW' },
        { text: '분위기 봐서 다들 가면 한 잔 정도만 더 하고 빠진다.', scoreTag: 'BATTERY_MED' },
        { text: '‘아싸 2차 가자! 밤새워 놀자!’', scoreTag: 'BATTERY_HIGH' },
        { text: '이미 시계만 보며 영혼은 집에 가 있다.', scoreTag: 'BATTERY_ZERO' },
      ],
    },
    {
      id: 3,
      question: '처음 보는 사람들과 어색한 식사 자리에 앉았을 때 나의 처신은?',
      options: [
        { text: '정적을 깨기 위해 억지 텐션을 올리며 사회적 가면을 쓴다.', scoreTag: 'BATTERY_LOW' },
        { text: '예의 바르게 리액션 위주로 대화에 응한다.', scoreTag: 'BATTERY_MED' },
        { text: '금방 말문을 트고 분위기를 주도하며 친해진다.', scoreTag: 'BATTERY_HIGH' },
        { text: '음식만 묵묵히 먹으며 대화가 안 걸리길 빈다.', scoreTag: 'BATTERY_ZERO' },
      ],
    },
  ],
  results: {
    BATTERY_ZERO: {
      title: '초절전 에코모드 극내향 방전러',
      subtitle: '사회적 배터리 5% 미만, 혼자만의 산소호흡기 시급',
      description: '사람이 많은 공간에 30분만 있어도 영혼이 탈탈 털립니다. 혼자 침대에 누워 문을 닫고 있는 시간이 유일한 충전 방식입니다.',
      tags: ['#초절전모드', '#동굴필수', '#사회성OFF', '#집돌이집순이'],
      bestMatch: '실용적 분배형 비즈니스 외향러',
      worstMatch: '태양광 무한충전 파티피플',
    },
    BATTERY_LOW: {
      title: '사회적 가면 장착 알뜰 배터리러',
      subtitle: '밖에서는 인싸 코스프레, 집에 오면 기절 모드',
      description: '밖에서는 남들이 내향인인 줄 모를 정도로 유쾌하게 잘 지내지만, 그만큼 배터리가 급속 방전됩니다. 일정 사이에 반드시 멍때리는 휴식 텀이 필요합니다.',
      tags: ['#가면인싸', '#급속방전', '#충전필수', '#선택적외향'],
      bestMatch: '균형 잡힌 하이브리드 소셜러',
      worstMatch: '태양광 무한충전 파티피플',
    },
    BATTERY_MED: {
      title: '균형 잡힌 하이브리드 소셜러',
      subtitle: '적당한 사교와 적당한 고독을 능숙하게 조율하는 타입',
      description: '좋은 사람들과의 만남은 즐겁지만 과한 만남은 피합니다. 내 사람들에게 집중하며 에너지를 알뜰하게 배분하는 현명한 사회성을 지녔습니다.',
      tags: ['#하이브리드', '#알짜인맥', '#적정거리', '#조율의달인'],
      bestMatch: '초절전 에코모드 극내향 방전러',
      worstMatch: '순간 충동 욜로 폭주기관차',
    },
    BATTERY_HIGH: {
      title: '태양광 무한충전 파티피플',
      subtitle: '사람을 만날수록 에너지가 솟아나는 인간 비타민',
      description: '혼자 있으면 오히려 심심하고 기운이 빠집니다! 대화하고 새로운 사람을 만나면서 엔도르핀을 얻는 천생 외향적인 에너자이저입니다.',
      tags: ['#에너자이저', '#사람이힘', '#불금러버', '#분위기메이커'],
      bestMatch: '균형 잡힌 하이브리드 소셜러',
      worstMatch: '초절전 에코모드 극내향 방전러',
    },
  },
};
