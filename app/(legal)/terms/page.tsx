import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-4 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 mb-8 transition">
          <ArrowLeft size={14} /> 메인으로 돌아가기
        </Link>
        
        <h1 className="text-3xl font-black text-white mb-6">서비스 이용약관</h1>
        <p className="text-xs text-slate-500 mb-8">최종 개정일: 2026년 8월 25일</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">제1조 (목적)</h2>
            <p className="text-slate-400">
              본 약관은 TheEveryTest(이하 &apos;서비스&apos;)가 제공하는 모든 AI 심리·성향 테스트 및 부가 서비스의 이용 조건과 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">제2조 (면책 조항 및 결과의 성격)</h2>
            <p className="text-slate-400">
              본 서비스에서 제공하는 모든 테스트 결과와 분석 내용은 오락 및 자가 참고 목적으로 제공됩니다. 
              전문적인 의학적 진단, 심리 치료, 법률적 또는 커리어 결정의 절대적 근거로 활용될 수 없으며, 결과의 활용으로 발생하는 일체의 판단에 대한 책임은 이용자 본인에게 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">제3조 (저작권 및 지식재산권)</h2>
            <p className="text-slate-400">
              서비스가 자체 제작한 문항, UI 디자인, 텍스트 알고리즘 및 콘텐츠의 저작권은 TheEveryTest에 있습니다. 
              이용자는 결과 카드를 개인 SNS에 공유할 수 있으나, 서비스의 데이터나 소스코드를 무단 복제, 크롤링, 상업적으로 재배포할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">제4조 (약관의 개정)</h2>
            <p className="text-slate-400">
              서비스는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정 시 본 페이지를 통해 공지합니다.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
