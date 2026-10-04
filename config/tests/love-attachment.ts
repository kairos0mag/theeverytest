import { TestConfig } from '@/types/test';

export const loveAttachmentTest: TestConfig = {
  slug: 'love-attachment',
  title: '연애 애착 유형 & 집착 회피 지수 진단',
  description: '12가지 결정적 연애 상황으로 알아보는 나의 연애 심리와 애착 코드',
  category: 'love',
  questions: [
    {
      id: 1,
      question: '연인이 몇 시간째 연락이 안 되고 1이 안 사라질 때 내 뇌내 회로는?',
      options: [
        { text: '무슨 사고라도 났나? 걱정되고 불안해서 다른 일에 집중이 안 된다.', scoreTag: 'ANXIOUS' },
        { text: '바쁜가 보지 뭐. 나도 내 할 일 하다가 나중에 답장한다.', scoreTag: 'SECURE' },
        { text: '왜 연락을 안 하지? 슬슬 서운하고 정떨어지기 시작한다.', scoreTag: 'AVOIDANT' },
        { text: '아무 생각 없이 유튜브나 넷플릭스를 본다.', scoreTag: 'FREE' },
      ],
    },
    {
      id: 2,
      question: '연인과 사소한 말다툼으로 분위기가 냉랭해졌을 때 나의 행동은?',
      options: [
        { text: '불편한 감정을 못 견뎌서 그 자리에서 바로 대화로 풀자고 매달린다.', scoreTag: 'ANXIOUS' },
        { text: '서로 감정을 추스르고 차분해진 뒤 조목조목 풀자고 제안한다.', scoreTag: 'SECURE' },
        { text: '입을 닫고 동굴 속으로 들어간다. 연락도 피하고 혼자 있고 싶다.', scoreTag: 'AVOIDANT' },
        { text: '짜증 나서 친구를 만나거나 딴짓으로 스트레스를 푼다.', scoreTag: 'FREE' },
      ],
    },
    {
      id: 3,
      question: '연인이 내게 너무 깊은 속마음과 의존을 요구할 때 드는 솔직한 느낌은?',
      options: [
        { text: '나를 그만큼 신뢰하고 의지해 줘서 고맙고 더 가깝게 느껴진다.', scoreTag: 'ANXIOUS' },
        { text: '서로 기대고 채워주는 건강한 관계라고 생각하며 기꺼이 받아들인다.', scoreTag: 'SECURE' },
        { text: '숨이 턱 막히고 내 개인 공간이 침범당하는 듯한 부담감을 느낀다.', scoreTag: 'AVOIDANT' },
        { text: '상황에 따라 다르지만 과하면 도망치고 싶다.', scoreTag: 'FREE' },
      ],
    },
    {
      id: 4,
      question: '이상적인 연애의 거리감에 대해 내가 내리는 정의는?',
      options: [
        { text: '눈에서 멀어지면 마음도 멀어진다. 틈만 나면 붙어 있고 싶은 껌딱지.', scoreTag: 'ANXIOUS' },
        { text: '각자의 인생을 잘 살면서도 힘들 땐 든든한 쉼터가 되어주는 동반자.', scoreTag: 'SECURE' },
        { text: '연인이어도 100% 공유는 불가. 내 영역과 사생활이 절대적으로 우선.', scoreTag: 'AVOIDANT' },
        { text: '구속하지 않고 서로 재미있게 지낼 수 있는 자유로운 관계.', scoreTag: 'FREE' },
      ],
    },
  ],
  results: {
    SECURE: {
      title: '단단한 멘탈의 안정형 연애러',
      subtitle: '불안도 회피도 없는 평화로운 사랑의 종결자',
      description: '상대방을 믿는 만큼 본인 스스로도 깊이 신뢰합니다. 갈등이 생겨도 회피하지 않고 차분히 소통으로 풀어내며 건강한 연애의 표준을 보여주는 타입입니다.',
      tags: ['#안정형', '#신뢰왕', '#건강한연애', '#멘탈수호자'],
      bestMatch: '단단한 멘탈의 안정형 연애러',
      worstMatch: '철벽 방어형 극단 회피러',
    },
    ANXIOUS: {
      title: '사랑 확인이 필요한 불안형 연애러',
      subtitle: '사랑의 온도가 조금만 식어도 심장이 덜컥 내려앉는 타입',
      description: '연인의 작은 표정 변화나 카톡 말투에도 민감하게 반응합니다. 상대방의 애정을 끊임없이 확인하고 싶어 하지만, 본인의 자존감을 스스로 채우는 연습이 필요합니다.',
      tags: ['#불안형', '#사랑확인러', '#감정다이브', '#애정갈구'],
      bestMatch: '단단한 멘탈의 안정형 연애러',
      worstMatch: '철벽 방어형 극단 회피러',
    },
    AVOIDANT: {
      title: '철벽 방어형 동굴 회피러',
      subtitle: '가까워질수록 왠지 모르게 도망치고 싶은 철벽주의자',
      description: '상대방이 깊은 감정을 요구하거나 집착한다고 느끼면 즉시 마음의 문을 닫아버립니다. 혼자만의 시간이 절대적으로 필요하며, 상처받지 않으려는 방어기제가 강합니다.',
      tags: ['#회피형', '#동굴주민', '#개인주의', '#철벽수비'],
      bestMatch: '자유로운 영혼의 무소유 러버',
      worstMatch: '사랑 확인이 필요한 불안형 연애러',
    },
    FREE: {
      title: '자유로운 영혼의 쿨한 연애러',
      subtitle: '구속과 집착은 사절! 재미있고 편안한 사랑 추구',
      description: '연애도 인생의 일부일 뿐, 전부는 아니라고 생각합니다. 함께 있을 때 즐겁고 서로의 성장을 응원하는 담백하고 유쾌한 연애를 선호합니다.',
      tags: ['#자유영혼', '#쿨한연애', '#구속사절', '#담백그자체'],
      bestMatch: '철벽 방어형 동굴 회피러',
      worstMatch: '사랑 확인이 필요한 불안형 연애러',
    },
  },
};
